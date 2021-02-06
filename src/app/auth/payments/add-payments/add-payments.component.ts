import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrls: ['./add-payments.component.css']
})
export class AddPaymentsComponent implements OnInit {

  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
  }

  deleteModal(template: TemplateRef<any>) {
  }

}
