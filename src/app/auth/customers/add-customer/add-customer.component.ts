import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html'
})
export class AddCustomerComponent implements OnInit {
  page = 'Add Customer';
  constructor(
    public activeModal: NgbActiveModal
  ) { 

  }

  ngOnInit(): void {
  }
  
}
