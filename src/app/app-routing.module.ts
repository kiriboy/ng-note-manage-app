import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './Components/notes/notes.component';
import { AddNewNoteComponent } from './Components/add-new-note/add-new-note.component';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path:'', component:NotesComponent}, 
  {path:'addNotes', component:AddNewNoteComponent}, 
  {path:'about', component:AboutComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
