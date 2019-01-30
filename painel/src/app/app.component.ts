import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AppHttpService } from "./app-http.service";

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Version: ' + VERSION;

  ngOnInit(){
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }
}
