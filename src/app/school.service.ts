import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import {FormGroup} from '@angular/forms';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { School } from './model/school';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: Http) { }

  
  /** POST: add a new hero to the server */
 /* registerSchool (school: School): Observable<School> {
    return this._httpClient.post<School>('http://localhost:3000/schools', school, httpOptions).pipe(
    catchError(this.handleError<School>('registerSchool'))
  );
}*/

registerSchool (school: any) {
  return this.http.post('http://localhost:3000/schools', school.value);
}


/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 console.log("Error happening for post call");
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
