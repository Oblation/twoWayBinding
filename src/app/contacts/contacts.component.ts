import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  template: `
  <app-contacts-item [(name)]="contactPerson"></app-contacts-item>
  <p>{{ contactPerson }}</p>
`,
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactPerson: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
