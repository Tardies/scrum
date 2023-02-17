import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storyUrl: string;

  constructor(private http: HttpClient) { 
    this.storyUrl = "http://localhost:8080/story";
  }

  public findAll():Observable<Note[]> {
    return this.http.get<Note[]>(this.storyUrl);
  }
}
