import { Component } from '@angular/core';
import { Notes } from 'src/app/models/notes/Notes';
import { NoteService } from 'src/app/Services/note.service';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  allNotes!:Notes[]

constructor(private noteService:NoteService, private postService:PostsService){}

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
     this.getAllPostData();
     let id = 1
     let data = {
      body:'something body',
      id:1,
      title:'Some Title',
      userId:1
     }
     setTimeout(() => {
       this.onUpdatePost(id, data);
     }, 1200);

  }

  // On delete Event
  deleteNote(note:Notes){
    this.allNotes = this.allNotes.filter( item => item.id !== note.id)
    this.noteService.deleteNote(note.id)
  }


  // get list of post
  getAllPostData(){
    console.log("Get all post data 1");
    this.postService.getAllPost().subscribe(data =>{
      console.log("Get all post data 2");
      console.log(data);
      
    })

  }

  onUpdatePost(id:number, data:any){
    this.postService.updatePost(id,data).subscribe(resp =>{
      console.log("response data");
      console.log(resp);
      
    })
  }
  
  
  
}
