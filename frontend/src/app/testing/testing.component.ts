import { Component, OnInit } from '@angular/core';
import { Note } from '../noted';
import { TestingService } from './testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit{
  notes:Note[] = []

  constructor(private testingService: TestingService) { }

  ngOnInit(): void {
    this.testingService.findAll().subscribe(data => {
      this.notes = data;
    })
  }
}
