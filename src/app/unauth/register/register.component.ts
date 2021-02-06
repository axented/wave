import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ToastrService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  constructor(
    private auth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

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

  registerUser(form: FormGroup) {
    if (form.get('password')?.value == form.get('confirmPassword')?.value) {
      this.auth.createUserWithEmailAndPassword(
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value)
        .then(cred => {
          firebase.firestore().collection('users').doc(cred.user?.uid)
            .set({
              email: form.get('email')?.value,
              displayName: form.get('name')?.value,
            })
            .catch(error => {
              console.error('Something went wrong with added user to firestore: ', error);
            })
            // Get credentials after authentication and use updateProfile function to set properties values.
            cred.user?.updateProfile({
              displayName: form.get('firstName')?.value + ' ' + form.get('lastName')?.value
            })
          this.router.navigate(['auth'])
        })
        .catch(error => {
          console.error('Something went wrong with sign up: ', error);
        })
    } else {
      this.toastr.error('Password does not match')
    }
  }
}
