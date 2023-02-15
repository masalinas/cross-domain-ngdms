import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cross Domain Proxy NGDMS';
  sampleToken: string;

  constructor(private cookieService: CookieService) {    
  }

  ngOnInit() {
    this.sampleToken = this.cookieService.get('token');
  }
}
