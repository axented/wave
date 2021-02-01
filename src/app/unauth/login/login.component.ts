import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    public auth: AngularFireAuth,
    public router: Router
    ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      this.router.navigate(['auth'])
    }).catch((error) => {
      console.error(error)
    })
  }

  facebookLogin() {
  	alert('Coming Soon!')
  }

  emailLogin() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        this.router.navigate(['auth'])
      })
      .catch((error) => {
        console.error(error.code)
        console.error(error.message)
      })
  }

}
