import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) {

   }


   findByIdPromise(id){
     return this.http.get( `https://jsonplaceholder.typicode.com/comments?postId=${id}` ).toPromise();
   }

}
