import { Component } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  notes: Note[] = [
    {label: "Money transfer webpage",
    description: "Self-explanatory name of the task. Just do it, I don't care how."}
  ]
}
