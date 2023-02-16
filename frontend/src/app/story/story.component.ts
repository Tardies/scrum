import { Component } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  notes: Note[] = [
    {label: "Server side",
     description: "Write a REST API"},
    {label: "Client side",
     description: "Frontend Web Applictation"}]
}
