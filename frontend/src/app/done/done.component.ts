import { Component, OnInit } from '@angular/core';
import { Note } from '../noted';
import { DoneService } from './done.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  notes:Note[] = []

  constructor(public doneService: DoneService) { }
  ngOnInit(): void {
    this.doneService.findAll().subscribe(data => {
      this.notes = data;
    })
  }
}
