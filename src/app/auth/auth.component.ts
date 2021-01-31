import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Event, Router, RouterLink, NavigationStart } from '@angular/router';
// @ts-ignore
import * as Feather from 'feather-icons/dist/feather.min.js';
import firebase from 'firebase/app';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, AfterViewInit {
  public userCollapsed = true;
  public page = '';

  constructor(public router: Router) {
    router.events.subscribe((event: Event) => {
      this.page = this.router.url;
    });
  }

  ngOnInit(): void {
  }

  user() {
    this.userCollapsed = !this.userCollapsed;
  }
  burgerMenu() {
    return false;
  }

  ngAfterViewInit() {
  	Feather.replace()
  }

}

