import { Injectable } from '@angular/core';
import { Notes } from '../models/notes/Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  NOTE_LIST: Notes[] = [];

  constructor() {
    const notes = localStorage.getItem('NOTE_LIST');
    this.NOTE_LIST = notes ? JSON.parse(notes) : [];
  }

  private saveNotesToLocalStorage(): void {
    localStorage.setItem('NOTE_LIST', JSON.stringify(this.NOTE_LIST));
  }


  // Add Note to localStorage
  addNote(note: Notes): void {
   
    this.NOTE_LIST.push(note);
    this.saveNotesToLocalStorage();
  }


  // Update toggleImportant to save changes
  toggleImportant(id: number): void {
    const note = this.NOTE_LIST.find(n => n.id === id);
    if (note) {
      note.isImportant = !note.isImportant;
      this.saveNotesToLocalStorage();
    }
  }


  deleteNote(id: number): void {
    this.NOTE_LIST = this.NOTE_LIST.filter(note => note.id !== id);
    this.saveNotesToLocalStorage();
  }

  getAllNotes(): Notes[] {
    return this.NOTE_LIST;
  }

 
}
