import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  facebookLogin() {
  	alert('Coming Soon!')
  }

}
