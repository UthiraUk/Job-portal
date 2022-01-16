import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidenavWidth = 15;
  ngStyle!: string;
  constructor() { }

  ngOnInit(): void {
  }
  // increase() {
  //   this.sidenavWidth = 15;
  //   console.log('increase sidenav width');
  // }
  // decrease() {
  //   this.sidenavWidth = 4;
  //   console.log('decrease sidenav width');
  // }
}
