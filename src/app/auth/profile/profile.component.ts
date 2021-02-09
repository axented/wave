import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id
  changePass = false
  currentUser: any = ''
  key
  name
  personalDetails = true

  constructor(
    private Router: Router,
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.currentUser = user
    })
  }

  about() {
    this.changePass = false;
    this.personalDetails = true;
    document.getElementById('about').classList.add('active');
    document.getElementById('pass').classList.remove('active');
  }
  pass() {
    this.changePass = true;
    this.personalDetails = false;
    document.getElementById('about').classList.remove('active');
    document.getElementById('pass').classList.add('active');
  }
  editModal(template: TemplateRef<any>) {
    this.id = 1;
  }

  update() {
    let params = {
      id: this.id,
      key: this.key,
      speciality: this.name,
    };
  }

  submit() {
    this.Router.navigateByUrl('/admin/mentor-profile');
  }
}
