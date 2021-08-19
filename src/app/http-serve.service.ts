import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class HttpServeService {
  private url:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getJsonDatas() {
    return this.http.get(this.url, {responseType: 'json'})
           .pipe(catchError(this.handleError));
  }

  postJsonData() {
    let dataval = { title: 'foo', body: 'bar', userId: 1 };
     return this.http.post(this.url, dataval);
  }

  deleteData(id:number) : Observable<any> {
    let _url:string = `${this.url}/${id}`;
    console.log("_url:"+_url);
    return this.http.delete(_url);
  }
   

   
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body is: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
