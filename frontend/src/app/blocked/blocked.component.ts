import { Component } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent {
  notes: Note[] = []
}
