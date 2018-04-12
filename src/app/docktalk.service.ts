import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { SearchResponse } from './search-response';

@Injectable()
export class DocktalkService {


  private endpoint = 'https:/\/\api.github.com';
  private searchUsersUrl = this.endpoint + '/search/users?sort=followers&q=';
  private getUserUrl = this.endpoint + '/users/';

  constructor(private http: HttpClient) { }

  getUsers(q: string): Observable<SearchResponse>{
    return this.http.get<any>(this.searchUsersUrl+q)
      .pipe(
        catchError(this.handleError('getUsers'))
      );
  }

  getUserFromUsername(username: string): Observable<any>{
    return this.http.get<any>(this.getUserUrl+username)
      .pipe(
        catchError(this.handleError('getUsers'))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
