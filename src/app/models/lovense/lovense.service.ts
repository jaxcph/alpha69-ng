import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LovenseService {


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getToys(): Observable<any> {
    const endpoint = 'https://api.lovense.com/api/lan/getToys';
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }


// https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
