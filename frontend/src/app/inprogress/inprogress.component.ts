import { Component } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent {
  notes: Note[] = [{
    label: "Statistics webpage",
    description: "Self-explanatory name of the task. Just do it, I don't care how."
  }]
}
