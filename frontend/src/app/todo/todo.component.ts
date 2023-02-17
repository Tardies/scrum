import { Component, OnInit } from '@angular/core';
import { Note } from '../noted';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  notes: Note[] = []
  
  constructor(private todoService: TodoService){ }
  ngOnInit(): void {
    this.todoService.findAll().subscribe(data => {
      this.notes = data;
    })
  }
}
