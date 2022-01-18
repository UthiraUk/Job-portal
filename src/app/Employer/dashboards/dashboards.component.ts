import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  sidenavWidth = 15;
  ngStyle!: string;
  router: any;
  constructor() { }

  ngOnInit(): void {
  
  }

  
}
