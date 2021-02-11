import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { 

  }

  getAllPosts():Observable<any> 
  {
    return this.http.get("http://jsonplaceholder.typicode.com/posts")
  }

  addPost(post:any){

    const options= {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }


    this.http.post("http://jsonplaceholder.typicode.com/posts",post, options).subscribe(res=>{
      console.log(res);
    })
  }

}
