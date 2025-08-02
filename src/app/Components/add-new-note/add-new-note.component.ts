import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.css']
})
export class AddNewNoteComponent {

  title:string =''
  description:string =''                
  isImportant:boolean = false

  constructor(private noteService:NoteService, private router:Router){}


submitForm(){
  const note = {
    id:Math.random(),
    title:this.title,
    description:this.description,
    isImportant:this.isImportant
  }

  

  this.noteService.addNote(note)
  this.router.navigate(['/'])

}
}
