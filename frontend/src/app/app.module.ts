import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { TodoComponent } from './todo/todo.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { TestingComponent } from './testing/testing.component';
import { DoneComponent } from './done/done.component';
import { BlockedComponent } from './blocked/blocked.component';
import { StoryService } from './story/story.service';
import { TodoService } from './todo/todo.service';
import { InprogressService } from './inprogress/inprogress.service';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    TodoComponent,
    InprogressComponent,
    TestingComponent,
    DoneComponent,
    BlockedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoryService, TodoService, InprogressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
