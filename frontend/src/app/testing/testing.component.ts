import { Component } from '@angular/core';
import { Note } from '../noted';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  notes:Note[] = [{
    label: "Login page",
    description: "Mostly of cases"
  }]
}
