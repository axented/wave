import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import { Event, Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {
  url;
  page = 'Add Expense';
  constructor(public router: Router, location: Location, public commonService: CommonServiceService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        if(event.url === '/edit-expenses') {
          this.page = 'Edit Expense';
        } else {
          this.page = 'Add Expense';
        }
      }
    });
    this.url = location.path();
    if(this.url === '/edit-expenses') {
      this.page = 'Edit Expense';
    } else {
      this.page = 'Add Expense';
    }
  }

  ngOnInit(): void {
  }

}
