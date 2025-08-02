import { Component } from '@angular/core';
import { Notes } from 'src/app/models/notes/Notes';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  allNotes!:Notes[]

constructor(private noteService:NoteService){}

// get all notes 
  ngOnInit() {
    this.allNotes = this.noteService.getAllNotes();
    if (this.allNotes.length <= 0) {
      this.noteService.addNote(
        {
          id:1,
          title:'Sample Note',
          description:'This is sample note desc',
          isImportant:false
        }
      )
    }
  }

  // On delete Event
  deleteNote(note:Notes){
    this.allNotes = this.allNotes.filter( item => item.id !== note.id)
    this.noteService.deleteNote(note.id)
  }
}
