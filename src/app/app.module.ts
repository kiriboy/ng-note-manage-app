import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { NotesComponent } from './Components/notes/notes.component';
import { NotesItemComponent } from './Components/notes-item/notes-item.component';
import { AddNewNoteComponent } from './Components/add-new-note/add-new-note.component';
import { AboutComponent } from './Pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { ImportantFirstPipe } from './pipes/important-first.pipe';

import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directives/highlight/highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    NotesItemComponent,
    AddNewNoteComponent,
    AboutComponent,
    ImportantFirstPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
