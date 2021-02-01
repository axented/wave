import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: any = [];
  errorMessage: string = '';

  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.commonService.getCustomers().subscribe(
      (res) => {
        this.customers = res;
        $(function () {
          $('table').DataTable();
        });
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  filter() {
    
  }
}
