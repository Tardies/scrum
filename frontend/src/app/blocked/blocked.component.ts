import { Component, OnInit } from '@angular/core';
import { Note } from '../noted';
import { BlockedService } from './blocked.service';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit{
  notes: Note[] = [];

  constructor(private blockedSevice: BlockedService) { }

  ngOnInit(): void {
    this.blockedSevice.findAll().subscribe(data => {
      this.notes = data;
    })
  }
}
