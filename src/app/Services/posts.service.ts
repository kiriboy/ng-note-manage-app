import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

 private postUrl = 'https://jsonplaceholder.typicode.com/posts'
 private postLimit = '?_limit=5'

//  get all posts
getAllPost():Observable<any[]>{
  return this.http.get<any[]>(`${this.postUrl}${this.postLimit}`)
}

updatePost(id:number, data:any):Observable<any[]>{
  return this.http.put<any[]>(`${this.postUrl}/${id}`, data, httpOptions)
}


}
