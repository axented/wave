import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  invoices: any = [];
  errorMessage?: string;

  constructor(
    public commonService: CommonServiceService
  ) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.commonService.getInvoices().subscribe(
      (res) => {
        this.invoices = res;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
}
