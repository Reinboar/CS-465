import { Component, OnInit, signal } from '@angular/core';
import { trips } from '../data/trips';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [JsonPipe, CurrencyPipe, TripCard, CommonModule],
  standalone: true,
  selector: 'app-trip-listing',
  styleUrl: './trip-listing.css',
  templateUrl: './trip-listing.html',
  providers: [TripData]
})
export class TripListing implements OnInit {
  trips = signal<Trip[]>([]);
  message: string = '';
  
  constructor(private tripDataService: TripData, private router: Router) {
    console.log('trip-listing constructor');
  }
  
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips.set(value);
          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database.';
          }
          console.log(this.message);
          console.log(this.trips);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
