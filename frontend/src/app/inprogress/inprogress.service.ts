import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class InprogressService {
  private inprogressUrl: string;

  constructor(private http: HttpClient) { 
    this.inprogressUrl = "http://localhost:8080/inprogress";
  }

  public findAll():Observable<Note[]> {
    return this.http.get<Note[]>(this.inprogressUrl);
  }
}
