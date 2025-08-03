import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notes } from 'src/app/models/notes/Notes';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent {

  color = ''

@Input() note!:Notes

@Output() deleteNote:EventEmitter<Notes> = new EventEmitter()

constructor(private noteService:NoteService){}


onToggle(note:Notes){
  this.noteService.toggleImportant(note.id)
}

onDeleteItem(note:Notes){
  this.deleteNote.emit(note)
}

}
