import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Authentication } from '../services/authentication';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-navbar',
  standalone: true,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  constructor(
    private authenticationService: Authentication
  ) {
    
  }
  
  ngOnInit() {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void {
    return this.authenticationService.logout();
  }
}
