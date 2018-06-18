import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private activatedRoute: ActivatedRoute){
    console.log( "log" );
    this.activatedRoute.url
    .subscribe(url => console.log('The URL changed to: ' + url));
  }

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
