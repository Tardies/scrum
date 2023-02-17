import { Component, OnInit } from '@angular/core';
import { Note } from '../noted';
import { InprogressService } from './inprogress.service';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {
  notes: Note[] = []

  constructor(private inprogressService: InprogressService) { }

  ngOnInit(): void {
    this.inprogressService.findAll().subscribe(data => {
      this.notes = data;
    })
  }
}
