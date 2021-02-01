import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;

 constructor(
    public auth: AngularFireAuth,
    public router: Router
    ) {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
 }

  ngOnInit(): void {
  }

  googleLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      this.router.navigate(['auth'])
    }).catch((error) => {
      console.error(error.code)
      console.error(error.message)
    })
  }

  facebookLogin() {
    alert('Coming Soon!')
  }

  registerUser() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        this.router.navigate(['auth'])
      })
      .catch((error) => {
        console.error(error.code)
        console.error(error.message)

      })
  }


}
