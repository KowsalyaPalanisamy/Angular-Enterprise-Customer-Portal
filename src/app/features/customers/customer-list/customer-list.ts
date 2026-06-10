import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [NgFor],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  customers = [
    {
      id: 1,
      name: 'Kowsalya Palanisamy',
      email: 'kowsalya@example.com',
      status: 'Active'
    },
    {
      id: 2,
      name: 'John Murphy',
      email: 'john@example.com',
      status: 'Inactive'
    },
    {
      id: 3,
      name: 'Mary Ryan',
      email: 'mary@example.com',
      status: 'Active'
    }
  ];
}