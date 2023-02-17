import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { StoryService } from './story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit{
  notes: Note[] = [];

  constructor(private storyService: StoryService) {

  }

  ngOnInit(): void {
    this.storyService.findAll().subscribe(data => {
      this.notes = data;
    })
  }
}
