import { Component } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {
  notes:Note[] = [{
    label: "Account get responses",
    description: "For login page"
  }, {
    label: "Balance get responses",
    description: "For login page"
  }, {
    label:"Statistics get responses",
    description: "For account page"
  }]
}
