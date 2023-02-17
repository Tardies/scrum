import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note'

@Injectable({
  providedIn: 'root'
})
export class BlockedService {
  private blockedUrl: string;
  
  constructor(private http: HttpClient) { 
    this.blockedUrl = "http://localhost:8080/blocked";
  }

  public findAll():Observable<Note[]> {
    return this.http.get<Note[]>(this.blockedUrl);
  }
}
