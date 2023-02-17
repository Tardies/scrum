import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  private testingUrl: string;

  constructor(private http:HttpClient) { 
    this.testingUrl = "http://localhost:8080/testing";
  }

  public findAll():Observable<Note[]> {
    return this.http.get<Note[]>(this.testingUrl);
  }
}
