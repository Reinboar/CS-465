import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

@Component({
  imports: [CurrencyPipe, CommonModule],
  selector: 'app-trip-card',
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
  providers: [TripData]
})
export class TripCard implements OnInit {
  @Input('trip') trip: any;
  
  constructor(private tripService: TripData, private router: Router) {}
  
  ngOnInit(): void {}
  
  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
  
  public deleteTrip(trip: Trip) {
    console.log(trip);
    console.log(this.tripService);
    this.tripService.deleteTrip(trip.code)
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['']);
          window.location.reload();
        },
        error: (error: any) => {
          console.log('Error ' + error);
        }
      });
  }
}
