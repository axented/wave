import { Component, AfterViewInit } from '@angular/core';
// TODO remove below. Not sure why @types/feather not working
// @ts-ignore
import * as Feather from 'feather-icons/dist/feather.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
  	Feather.replace()
  }
}
