import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Event, Router } from '@angular/router';
// @ts-ignore
import * as Feather from 'feather-icons/dist/feather.min.js';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, AfterViewInit {
  userCollapsed = true
  page = ''
  currentUser: any = ''

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {
    router.events.subscribe((event: Event) => {
      this.page = this.router.url;
    });
  }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.currentUser = user
    })
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

  logout() {
    this.auth.signOut()
      .then((result) => {
        this.router.navigate(['/'])
      }).catch((error) => {
        console.error(error)
      })
  }

}

