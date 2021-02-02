import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: any = [];
  errorMessage: string = '';

  constructor(
    public commonService: CommonServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.commonService.getCustomers().subscribe(
      (res) => {
        this.customers = res;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  filter() {
    
  }

  openAddCustomerModal() {
    const modalRef = this.modalService.open(
      AddCustomerComponent,
      {
        animation: true,
        size: 'lg'
      }
    );
  }
}
