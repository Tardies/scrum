import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { TodoComponent } from './todo/todo.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { TestingComponent } from './testing/testing.component';
import { DoneComponent } from './done/done.component';
import { BlockedComponent } from './blocked/blocked.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
