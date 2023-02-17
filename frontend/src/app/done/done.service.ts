import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class DoneService {
  private doneUrl: string;
  constructor(private http:HttpClient) { 
    this.doneUrl = "http://localhost:8080/done";
  }

public findAll():Observable<Note[]> {
  return this.http.get<Note[]>(this.doneUrl);
}
}
