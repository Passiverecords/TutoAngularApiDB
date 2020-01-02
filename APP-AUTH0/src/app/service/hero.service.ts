import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })

export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
    ) {}
  
  private heroesUrl = 'http://127.0.0.1:3000/listeHeros';  // URL to web api
  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(_id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${_id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero _id=${_id}`);
        }),
        catchError(this.handleError<Hero>(`getHero _id=${_id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(_id: String): Observable<Hero> {
    const url = `${this.heroesUrl}/${_id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero _id=${_id}`)),
      catchError(this.handleError<Hero>(`getHero _id=${_id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ _id=${newHero._id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): void {
    const _id = typeof hero === 'number' ? hero : hero._id;
    const url = `${this.heroesUrl}/${_id}`;

    this.http.delete<Hero>(url).subscribe(
      (success) => console.log(success),
      (error) => this.handleError<Hero>('deleteHero'),
    )
  
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    var url = this.heroesUrl+'/'+hero._id
    return this.http.put(url , hero).pipe(
      tap(_ => this.log(`updated hero _id=${hero._id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    console.log(operation)
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);
      if(error.status == "404")
      {
        this.router.navigate(['']);
      }
        
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}