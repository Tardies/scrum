import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl: string;

  constructor(private http: HttpClient) { 
    this.todoUrl = "http://localhost:8080/todo";
  }

  public findAll():Observable<Note[]> {
    return this.http.get<Note[]>(this.todoUrl);
  }
}
