import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
  
export class HomeComponent implements OnInit {
  constructor(private readonly router: Router) {}

  userToken!: string;

  ngOnInit(): void {
    this.userToken = localStorage.getItem('token') as string;
    if (!this.userToken) {
      this.router.navigate(['/login']);
    }
  }
}
