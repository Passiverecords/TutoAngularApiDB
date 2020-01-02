## Intro
Welcome to this tutorial on creating an Angular project, an API, a data basse, and how to connect everything.

**Warning** : For this tutorial, you must first install the development software : <a style='color:blue' href="Setup" target="_blank">here</a><br>
**Download** : 
- You can download the files in the tutorial whenever you see this <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB" target="_blank">**DOWNLOAD**</a>.<br>
- Clicking on the link will take you to the corresponding commit.<br>
- Then click on "clone or download" and "Download ZIP".<br>
- But the command below is essential after each file recovery<br>
```
    npm install
```
**Bonus** : At the end we will see how to secure all of this
## Projet Angular
- We will initially see the creation of an angular project <br>
    - [**Angular Tutorials** ](https://angular.io/tutorial):  you can check here for more detail : <a style='color:blue' href="https://angular.io/tutorial" target="_blank">here</a>.
    ( **Warning:I made some modification**)

    ### Creation
    - Open VSC in new folder, click on terminal, new terminal.
    - We are going to create an angular project. In the terminal enter : <br>
    ```
        ng new APP
        - Would you like to add Angular routing? Y.
        - Which stylesheet format would you like to use?
        - Select your stylesheet and clic enter (in tutoriel:CSS)
        - Wait for the loading to finish.
        cd APP
        ng serve --open-
        - your new app running in http://localhost:4200/.
    ```
    - So we have our first angular project
    - We are now going to appropriate it.
    ### Package.json
    - Edit the package.json file.
        <details>
        <summary>package.json</summary>
        ```
        {
            "name": "app",
            "version": "0.0.0",
            "scripts": {
                "ng": "ng",
                "start": "ng serve",
                "build": "ng build",
                "test": "ng test",
                "lint": "ng lint",
                "e2e": "ng e2e"
            },
            "private": true,
            "dependencies": {
                "@angular/animations": "~8.2.14",
                "@angular/common": "~8.2.14",
                "@angular/compiler": "~8.2.14",
                "@angular/core": "~8.2.14",
                "@angular/forms": "~8.2.14",
                "@angular/platform-browser": "~8.2.14",
                "@angular/platform-browser-dynamic": "~8.2.14",
                "@angular/router": "~8.2.14",
                "angular-in-memory-web-api": "^0.9.0",
                "helmet": "^3.21.2",
                "http": "^0.0.0",
                "rxjs": "^6.5.3",
                "tslib": "^1.10.0",
                "zone.js": "~0.9.1"
            },
            "devDependencies": {
                "@angular-devkit/build-angular": "~0.803.19",
                "@angular/cli": "~8.3.19",
                "@angular/compiler-cli": "~8.2.14",
                "@angular/language-service": "~8.2.14",
                "@types/jasmine": "~3.3.8",
                "@types/jasminewd2": "~2.0.3",
                "@types/node": "~8.9.4",
                "codelyzer": "^5.0.0",
                "jasmine-core": "~3.4.0",
                "jasmine-spec-reporter": "~4.2.1",
                "karma": "~4.1.0",
                "karma-chrome-launcher": "~2.2.0",
                "karma-coverage-istanbul-reporter": "~2.0.1",
                "karma-jasmine": "~2.0.1",
                "karma-jasmine-html-reporter": "^1.4.0",
                "protractor": "~5.4.0",
                "ts-node": "~7.0.0",
                "tslint": "~5.15.0",
                "typescript": "~3.5.3"
            }
        }
        ```
        </details>
    - The package.json file that we just edited contains all the dependencies we will need, to load them just execute the command below.
        ```
        npm install
        ```
    ### APP
    - We will modify the file below
        #### App-Routing
    - The app-routing file is where all of our routes will be stored.
        <details>
        <summary>app-routing.module.ts</summary>
        ```
        import { NgModule }             from '@angular/core';
        import { RouterModule, Routes } from '@angular/router';

        import { DashboardComponent }   from './component/dashboard/dashboard.component';
        import { HeroesComponent }      from './component/heroes/heroes.component';
        import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';

        const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'detail/:_id', component: HeroDetailComponent },
        { path: 'heroes', component: HeroesComponent }
        ];

        @NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
        })
        export class AppRoutingModule {}
        ```
        </details>

        #### App-Component
    - The app-component files contain the style, the layout, the content of the application.
        <details>
        <summary>app.component.css</summary>
        ```
        /* AppComponent's private CSS styles */
        h1 {
        font-size: 1.2em;
        margin-bottom: 0;
        }
        h2 {
        font-size: 2em;
        margin-top: 0;
        padding-top: 0;
        }
        nav a {
        padding: 5px 10px;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        background-color: #eee;
        border-radius: 4px;
        }
        nav a:visited, a:link {
        color: #334953;
        }
        nav a:hover {
        color: #039be5;
        background-color: #cfd8dc;
        }
        nav a.active {
        color: #039be5;
        }
        ```
        </details>

        <details>
        <summary>app.component.html</summary>
        ```
        <html>
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        ```
        </details>

        <details>
        <summary>app.component.ts</summary>
        ```
        import { Component } from '@angular/core';

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        })
        export class AppComponent {
        title = 'Tour of Heroes';
        }    
        ```
        </details>

        #### App.module
    - The app-module file builds the application.
        <details>
        <summary>app.module.ts</summary>
        ```
        import { NgModule }       from '@angular/core';
        import { BrowserModule }  from '@angular/platform-browser';
        import { FormsModule }    from '@angular/forms';
        import { HttpClientModule }    from '@angular/common/http';
        import { AppRoutingModule }     from './app-routing.module';
        import { AppComponent }         from './app.component';
        import { DashboardComponent }   from './component/dashboard/dashboard.component';
        import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
        import { HeroesComponent }      from './component/heroes/heroes.component';
        import { HeroSearchComponent }  from './component/hero-search/hero-search.component';

        @NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            HttpClientModule,
        ],
        declarations: [
            AppComponent,
            DashboardComponent,
            HeroesComponent,
            HeroDetailComponent,
            HeroSearchComponent
        ],
        bootstrap: [ AppComponent ]
        })

        export class AppModule { }
        ```
        </details>
    
    <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/7ef6668447c1588ee06a5718c354da70dad6ae0b" target="_blank">**DOWNLOAD**</a>.
    
    ### Component
    - Let's create some component, in the terminal
        ```
            mkdir src/app/component
            cd src/app/component
            ng generate component dashboard
            ng generate component hero-detail
            ng generate component hero-search
            ng generate component heroes
        ```
    - Each module is composed of a CSS file, an html file, is 2 ts files.
    - Fill in the files below
        #### Dashboard
        <details>
        <summary>Dashboard.component.css</summary>
        ```
        /* DashboardComponent's private CSS styles */
            [class*='col-'] {
            float: left;
            padding-right: 20px;
            padding-bottom: 20px;
            }
            [class*='col-']:last-of-type {
            padding-right: 0;
            }
            a {
            text-decoration: none;
            }
            *, *:after, *:before {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            }
            h3 {
            text-align: center;
            margin-bottom: 0;
            }
            h4 {
            position: relative;
            }
            .grid {
            margin: 0;
            }
            .col-1-4 {
            width: 25%;
            }
            .module {
            padding: 20px;
            text-align: center;
            color: #eee;
            max-height: 120px;
            min-width: 120px;
            background-color: #3f525c;
            border-radius: 2px;
            }
            .module:hover {
            background-color: #EEE;
            cursor: pointer;
            color: #607d8b;
            }
            .grid-pad {
            padding: 10px 0;
            }
            .grid-pad > [class*='col-']:last-of-type {
            padding-right: 20px;
            }
            @media (max-width: 600px) {
            .module {
                font-size: 10px;
                max-height: 75px; }
            }
            @media (max-width: 1024px) {
            .grid {
                margin: 0;
            }
            .module {
                min-width: 60px;
            }
            }
        ```
        </details>

        <details>
        <summary>Dashboard.component.html</summary>
        ```
        <h3>Top Heroes</h3>
        <div class="grid grid-pad">
        <a *ngFor="let hero of heroes" class="col-1-4"
            routerLink="/detail/{{hero._id}}">
            <div class="module hero">
            <h4>{{hero.name}}</h4>
            </div>
        </a>
        </div>
        <app-hero-search></app-hero-search>
        ```
        </details>

        <details>
        <summary>Dashboard.component.ts</summary>
        ```
        import { Component, OnInit } from '@angular/core';
        import { Hero } from '../../class/hero';
        import { HeroService } from '../../service/hero.service';
        @Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: [ './dashboard.component.css' ]
        })
        export class DashboardComponent implements OnInit {
        heroes: Hero[] = [];
        constructor(private heroService: HeroService) { }
        ngOnInit() {
            this.getHeroes();
        }
        getHeroes(): void {
            this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
        }
        }
        ```
        </details>

        #### HeroDetail
        <details>
        <summary>hero.detail.component.css</summary>
        ```
        /* HeroDetailComponent's private CSS styles */
        label {
        display: inline-block;
        width: 3em;
        margin: .5em 0;
        color: #607D8B;
        font-weight: bold;
        }
        input {
        height: 2em;
        font-size: 1em;
        padding-left: .4em;
        }
        button {
        margin-top: 20px;
        font-family: Arial;
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer; cursor: hand;
        }
        button:hover {
        background-color: #cfd8dc;
        }
        button:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
        }
        ```
        </details>

        <details>
        <summary>hero.detail.component.html</summary>
        ```
        <div *ngIf="hero">
            <h2>{{hero.name | uppercase}} Details</h2>
            <div><span>id: </span>{{hero._id}}</div>
            <div>
            <label>name:
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </label>
            </div>
            <button (click)="goBack()">go back</button>
            <button (click)="save()">save</button>
        </div>
        ```
        </details>

        <details>
        <summary>hero.detail.component.ts</summary>
        ```
        import { Component, OnInit, Input } from '@angular/core';
        import { ActivatedRoute } from '@angular/router';
        import { Location } from '@angular/common';
        import { Hero }         from '../../class/hero';
        import { HeroService }  from '../../service/hero.service';
        @Component({
        selector: 'app-hero-detail',
        templateUrl: './../class/hero-detail.component.html',
        styleUrls: [ './../class/hero-detail.component.css' ]
        })
        export class HeroDetailComponent implements OnInit {
        @Input() hero: Hero;
        constructor(
            private route: ActivatedRoute,
            private heroService: HeroService,
            private location: Location
        ) {}
        ngOnInit(): void {
            this.getHero();
        }
        getHero(): void {
            const id = +this.route.snapshot.paramMap.get('id');
            this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
        }
        goBack(): void {
            this.location.back();
        }
        save(): void {
            this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
        }
        }
        ```
        </details>
        
        #### HeroSearch
        <details>
        <summary>hero-search.component.css</summary>
        ```
        /* HeroSearch private styles */
        .search-result li {
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        width: 195px;
        height: 16px;
        padding: 5px;
        background-color: white;
        cursor: pointer;
        list-style-type: none;
        }
        .search-result li:hover {
        background-color: #607D8B;
        }
        .search-result li a {
        color: #888;
        display: block;
        text-decoration: none;
        }
        .search-result li a:hover {
        color: white;
        }
        .search-result li a:active {
        color: white;
        }
        #search-box {
        width: 200px;
        height: 20px;
        }
        ul.search-result {
        margin-top: 0;
        padding-left: 0;
        }
        ```
        </details>

        <details>
        <summary>hero-search.component.html</summary>
        ```
        <div id="search-component">
            <h4><label for="search-box">Hero Search</label></h4>

            <input #searchBox id="search-box" (input)="search(searchBox.value)" />

            <ul class="search-result">
            <li *ngFor="let hero of heroes$ | async" >
                <a routerLink="/detail/{{hero._id}}">
                {{hero.name}}
                </a>
            </li>
            </ul>
        </div>
        ```
        </details>

        <details>
        <summary>hero-search.component.ts</summary>
        ```
            import { Component, OnInit } from '@angular/core';
            import { Observable, Subject } from 'rxjs';
            import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
            import { Hero } from '../../class/hero';
            import { HeroService } from '../../service/hero.service';
            @Component({
            selector: 'app-hero-search',
            templateUrl: './hero-search.component.html',
            styleUrls: [ './hero-search.component.css' ]
            })
            export class HeroSearchComponent implements OnInit {
            heroes$: Observable<Hero[]>;
            private searchTerms = new Subject<string>();
            constructor(private heroService: HeroService) {}
            // Push a search term into the observable stream.
            search(term: string): void {
                this.searchTerms.next(term);
            }
            ngOnInit(): void {
                this.heroes$ = this.searchTerms.pipe(
                // wait 300ms after each keystroke before considering the term
                debounceTime(300),
                // ignore new term if same as previous term
                distinctUntilChanged(),
                // switch to new search observable each time the term changes
                switchMap((term: string) => this.heroService.searchHeroes(term)),
                );
            }
            }
        ```
        </details>

        #### Heroes
        <details>
        <summary>heroes.component.html</summary>
        ```
        /* HeroesComponent's private CSS styles */
        .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
        }
        .heroes li {
        position: relative;
        cursor: pointer;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
        }
        .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
        }
        .heroes a {
        color: #333;
        text-decoration: none;
        position: relative;
        display: block;
        width: 250px;
        }
        .heroes a:hover {
        color:#607D8B;
        }
        .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color:#405061;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        min-width: 16px;
        text-align: right;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
        }
        button {
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
        font-family: Arial;
        }
        button:hover {
        background-color: #cfd8dc;
        }
        button.delete {
        position: relative;
        left: 194px;
        top: -32px;
        background-color: gray !important;
        color: white;
        }
        ```
        </details>

        <details>
        <summary>heroes.component.html</summary>
        ```
        <h2>My Heroes</h2>
        <div>
        <label>Hero name:
            <input #heroName />
        </label>
        <!-- (click) passes input value to add() and then clears the input -->
        <button (click)="add(heroName.value); heroName.value=''">
            add
        </button>
        </div>
        <ul class="heroes">
        <li *ngFor="let hero of heroes">
            <a routerLink="/detail/{{hero._id}}">
            <span class="badge">{{hero._id}}</span> {{hero.name}}
            </a>
            <button class="delete" title="delete hero"
            (click)="delete(hero)">x</button>
        </li>
        </ul>
        ```
        </details>

        <details>
        <summary>heroes.component.ts</summary>
        ```
            import { Component, OnInit } from '@angular/core';
            import { Hero } from '../../class/hero';
            import { HeroService } from '../../service/hero.service';
            @Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
            })
            export class HeroesComponent implements OnInit {
            heroes: Hero[];
            constructor(private heroService: HeroService) { }
            ngOnInit() {
                this.getHeroes();
            }
            getHeroes(): void {
                this.heroService.getHeroes()
                .subscribe(heroes => {
                console.log(heroes)
                this.heroes = heroes
                });
            }
            add(name: string): void {
                name = name.trim();
                if (!name) { return; }
                this.heroService.addHero({ name } as Hero)
                .subscribe(hero => {
                    this.heroes.push(hero);
                });
            }
            delete(hero: Hero): void {
                this.heroes = this.heroes.filter(h => h !== hero);
                this.heroService.deleteHero(hero).subscribe();
            }
            }
        ```
        </details>

        #### 
        <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/6fc10ca667ee8768c3747bbf7520d1f08123db56" target="_blank">**DOWNLOAD**</a>.

    ### Class
    + After the service, the class.
        ```
            cd ../../..
            mkdir src/app/class
            cd src/app/class
            ng generate class hero
        ```
    + Fill in the files below
        <details>
            <summary>hero.ts</summary>
            ```
            export class Hero {
                _id: number;
                name: string;
                createdAt : Date;
                updatedAt : Date;
            }
            ```
        </details>
    <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/003b0ad6118d5cbdb809906df2ef3d88ae223e1c" target="_blank">**DOWNLOAD**</a>.
    
    ### Service
    + After the composent, the service.
        ```
            cd ../../..
            mkdir src/app/service
            cd src/app/service
            ng generate service hero
        ```
    + Fill in the files below
        <details>
        <summary>heroes.service.ts</summary>
        ```
        import { Injectable } from '@angular/core';
        import { HttpClient, HttpHeaders } from '@angular/common/http';
        import { Observable, of } from 'rxjs';
        import { catchError, map, tap } from 'rxjs/operators';
        import { Hero } from '../class/hero';
        @Injectable({ providedIn: 'root' })
        export class HeroService {
        private heroesUrl = '';  // URL to web api   
        httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
        constructor(
            private http: HttpClient) { }
        /** GET heroes from the server */
        getHeroes (): Observable<Hero[]> {
            return this.http.get<Hero[]>(this.heroesUrl,this.httpOptions)
            .pipe(
                tap(_ => console.log('fetched heroes')),
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
                console.log(`${outcome} hero _id=${_id}`);
                }),
                catchError(this.handleError<Hero>(`getHero _id=${_id}`))
            );
        }
        /** GET hero by id. Will 404 if id not found */
        getHero(_id: String): Observable<Hero> {
            const url = `${this.heroesUrl}/${_id}`;
            return this.http.get<Hero>(url,this.httpOptions).pipe(
            tap(_ => console.log(`fetched hero _id=${_id}`)),
            catchError(this.handleError<Hero>(`getHero _id=${_id}`))
            );
        }
        /* GET heroes whose name contains search term */
        searchHeroes(term: string): Observable<Hero[]> {
            if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
            }
            return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`,this.httpOptions).pipe(
            tap(_ => console.log(`found heroes matching "${term}"`)),
            catchError(this.handleError<Hero[]>('searchHeroes', []))
            );
        }
        //////// Save methods //////////
        /** POST: add a new hero to the server */
        addHero (hero: Hero): Observable<Hero> {
            return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
            tap((newHero: Hero) => console.log(`added hero w/ _id=${newHero._id}`)),
            catchError(this.handleError<Hero>('addHero'))
            );
        }
        /** DELETE: delete the hero from the server */
        deleteHero (hero: Hero | number): Observable<Hero> {
            const _id = typeof hero === 'number' ? hero : hero._id;
            const url = `${this.heroesUrl}/${_id}`;
            return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(_ => console.log(`deleted hero _id=${_id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
            );
        }
        /** PUT: update the hero on the server */
        updateHero (hero: Hero): Observable<any> {
            var url = this.heroesUrl+'/'+hero._id
            return this.http.put(url , hero, this.httpOptions).pipe(
            tap(_ => console.log(`updated hero _id=${hero._id}`)),
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
        ```
        </details>
    - As you can see on line 8, we will retrieve the data from an API.
    - It will therefore be necessary to add your API address here, as below.<br>
        ``` exemple : private heroesUrl = 'http://localhost:3000/listeHeros';```

    <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/7e8c7bcc5ffaa22b899c4c4a0e7bd0f92d34aa12" target="_blank">**DOWNLOAD**</a>.
## API
- Now that we have our angular application, we are going to create our API
- Let's start by creating the API file<br>
    ```
    |-- TutoAngularApiDB
        |-- APP (The application we just made)
        |-- API
    ```
    ```
        mkdir API && cd API
    ```
    ### Package.json
    ```
        npm init
        - Press enter until "Is this OK?"
        yes
    ```
    - Edit the package.json file.
        <details>
        <summary>package.json</summary>
        ```
        {
            "name": "api",
            "version": "1.0.0",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "dev": "ts-node app/server.ts"
            },
            "author": "",
            "license": "ISC",
            "dependencies": {
                "@types/mongoose": "^5.5.32",
                "access": "^1.0.2",
                "body-parser": "^1.19.0",
                "express": "^4.17.1",
                "express-jwt": "^5.3.1",
                "express-jwt-authz": "^2.3.1",
                "express-jwt-permissions": "^1.3.2",
                "expresse": "^1.0.2",
                "jsonwebtoken": "^8.5.1",
                "jwks-rsa": "^1.6.0",
                "tokens": "0.0.8"
            },
            "devDependencies": {
                "@types/express": "^4.17.2",
                "@types/node": "^12.12.14",
                "cors": "^2.8.5",
                "helmet": "^3.21.2",
                "mongoose": "^5.7.12",
                "ts-node": "^8.5.4",
                "typescript": "^3.7.2"
            },
            "description": "API TS/MONGO"
        }
        ```
        </details>
    - The package.json file that we just edited contains all the dependencies we will need. to load them just execute the command below.
        ```
        npm install
        ```
        <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/7c9c9e5f24577315d5b56675862eb3b9e45fa3c5" target="_blank">**DOWNLOAD**</a>.<br>
    
    ### App
    - We will now create the folder and file  we will need
        ```
        touch tsconfig.json
        mkdir app
        mkdir "app/controllers" "app/model" "app/security"
        touch "app/app.ts" "app/server.ts" "app/route.ts" "app/controller/controllers.ts" "app/model/hero.ts"
        ```
    - We will modify the file below
        #### Tsconfig
        As for the application we will use "type script" for the API,so we need the file "tsconfig.json"
        <details>
        <summary>tsconfig.json</summary>
        ```
        {
            "compilerOptions": {
            "module": "commonjs",
            "moduleResolution": "node",
            "pretty": true,
            "sourceMap": true,
            "target": "es6",
            "outDir": "./dist",
            "baseUrl": "./app"
            },
            "include": ["app/**/*.ts"],
            "exclude": ["node_modules"]
        }
        ```
        </details>
        <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/693da55f0f2e34a41bdb2aaa4a839e1a791016b3" target="_blank">**DOWNLOAD**</a>.<br>
        
        #### APP/folder
        A
        <details>
        <summary>app/app.ts</summary>
        ```
        import * as express from "express";
        import * as bodyParser from "body-parser";
        import * as cors from "cors";
        import * as helmet from "helmet";
        import { Routes } from "./routes";
        class App {
        public app: express.Application;
        public routePrv: Routes = new Routes();
        constructor() {
            this.app = express();
            this.config();
            this.routePrv.routes(this.app);
        }
        private config(): void {
            this.app.use(bodyParser.json());
            this.app.use(bodyParser.urlencoded({ extended: false }));
            this.app.use(cors());
            // security
            this.app.use(helmet());
            this.app.disable('x-powered-by');
            this.app.use(helmet.hidePoweredBy());
        }
        }
        export default new App().app;
        ```
        </details>

        B
        <details>
        <summary>app/route.ts</summary>
        ```
        import {Constructeur} from './controllers/controllers';
        export class Routes {
            public Constructeur: Constructeur = new Constructeur();
            public routes(app): void {
                app.route("/").get(this.Constructeur.index);
                app.route('/listeHeros').get(this.Constructeur.allHeros);
                app.route('/listeHeros').post(this.Constructeur.addHero);
                app.route('/listeHeros/:id').get(this.Constructeur.showHero);
                app.route('/listeHeros/:id').put(this.Constructeur.updateHero);
                app.route('/listeHeros/:id').delete(this.Constructeur.deleteHero);
                app.route('/test').get(this.Constructeur.testAPI);
                app.use((req, res) => {
                res.status(404).json({url: req.originalUrl, error: 'not found'});
                });
            }
        }
        ```
        </details>

        C 
        <details>
        <summary>app/server.ts</summary>
        ```
        import app from "./app";
        import * as mongoose from "mongoose";
        const PORT = process.env.PORT || 3000;
        // var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
        // var urlmongo = "";
        // mongoose.connect(urlmongo, options);

        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
        ```
        </details>

        D
        <details>
        <summary>app/controller/controllers.ts</summary>
        ```
        import { Request, Response } from "express";
        import Hero from "../model/hero";
        var jwt = require('jsonwebtoken');
        export class Constructeur{
        public index = (req: Request, res: Response) => {
            var token = req.headers.authorization.split(' ')[1]
            var decoded = jwt.decode(token, {complete: true})
            res.json(
            {
            jwkType : req.headers.authorization.split(' ')[0],
            jwkToken : req.headers.authorization.split(' ')[1],
            jwkToken2 : req.headers.authorization.split(' ')[1].split('.'),
            jwtHeader : decoded.header,
            jwtPayload: decoded.payload
            });
        }
        public testAPI = (req: Request, res: Response) => {
            res.json(
            {
            Response : "API is Running",
            });
        }
        public allHeros = (req: Request, res: Response) => {
            const heros = Hero.find((err: any, heros: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(heros);
            }
            });
        }
        public showHero = (req: Request, res: Response) => {
            const hero = Hero.findById(req.params.id, (err: any, hero: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(hero);
            }
            });
        }
        public addHero = (req: Request, res: Response) => {
            const hero = new Hero(req.body);
            hero.save((err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(hero);
            }
            });
        }
        public updateHero = (req: Request, res: Response) => {
            const hero = Hero.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err: any, hero: any) => {
                if (err) {
                res.send(err);
                } else {
                res.send(hero);
                }
            }
            );
        }
        public deleteHero = (req: Request, res: Response) => {
            const hero = Hero.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err)
            {
                res.send(err);
            } 
            else 
            {
                res.send("Hero deleted from database");
            }
            });
        }
        }
        ```
        </details>

        E
        <details>
        <summary>app/model/hero.ts</summary>
        ```
        import { Schema, Document} from "mongoose";
        import * as mongoose from "mongoose";
        export interface HeroInterface extends Document {
        name: string;
        status: string;
        }
        const HeroSchema = new Schema({
            name: {type: String, required: true},
            status: {type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo', required: true}
        }, 
        {timestamps: true} // Pour avoir les dates de création et de modification automatiquement gérés par mongoose
        );
        const Hero = mongoose.model<HeroInterface>("Hero", HeroSchema);
        export default Hero;
        ```
        </details>
        <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/3a5f1559ffb0a8b0447cd9f6c4cf1efadd0beb9a" target="_blank">**DOWNLOAD**</a>.<br>
## Projet -> API
- In "APP/src/app/service/hero.service.ts" line 8 remplace. <br>
    ```private heroesUrl = '';```
- by <br>
    ```private heroesUrl = 'http://localhost:3000/listeHeros';```
- or <br>
    ```private heroesUrl = 'YOUR API ADDRESS';```
## DATA BASSE
### Online
- Go to the website of [**MmongoDB**](https://www.mongodb.com/)
- Click on try free
- Create your account and click on get started for free.
- Click on creat cluster in Starter Clusters.
- And Follow the instructions.
    - Choose your host (I choose Google CP)
    - Choose your region (I choose Belgium because it is the closest region )
    - Choose your Cluster Name (I chose DB)
- And Click sur create cluster
- In the dashbord (wait until the end of the cluster creation) and click on connect.
- Add your IP address.
- Create a MongoDB User.
- Click on choose your connection methode.
- Click on Connect your application
- Choose your driver version (for this API NodeJS 3.0)
- And Click on copy.(This is what you will need to put in place of the url.)
    **Warning** : Don't forget to change <password> with your user password
### LocalHost
- Go to [Mongodb WebSite](https://www.mongodb.com/download-center/community)
## API -> BDD
- In "API/app/server.ts" remplace. <br>
    ```
    // var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
    // var urlmongo = "";
    // mongoose.connect(urlmongo, options);        
    ```
- by <br>
    ```
    var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
    var urlmongo = "YOUR DB URL";
    mongoose.connect(urlmongo, options);
    ```
## Security
- Until everyone can access our API
- We will now secure our API whis Auth0
    ### AUHT0
    - Auht0 allows rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.
    - go to [Auht0 web site](https://auth0.com/)
    - Sigin you
    ### Create Auth0API
    - Click on APIs in slide-bar.
    - Click on Create API (this API represents our API)
    - Choose your API name (ex:TutoAPI)
    - Choose your API id (ex: http://localhost:3000/listeHeros)
    - Choose your Signing Algorithm (ex: RS256)
    - In Settings.
        - check Enable RBAC and Add Permissions in the Access Token.
        - click on save.
    - In "Quick Start" in "2. Configuring your API to accept RS256 signed tokens" click on "Node.js"
    - Copy the content.
    ### Created security to the API
    - In API/app/security create jwt.ts files and paste this content 
    - But remove 
        - var express = require('express');
        - var app = express();
        - var port = process.env.PORT || 8080;
        - app.use(jwtCheck);
        - app.get('/authorized', function (req, res) {
                res.send('Secured Resource');
            });
        - app.listen(port);
    - And add export behind var jwtCheck = jwt({
        <details>
        <summary>exemple of jwt.ts</summary>
        ```
        var jwt = require('express-jwt');
        var jwks = require('jwks-rsa');
        export var jwtCheck = jwt({
            secret: jwks.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://dev--36fn6vi.eu.auth0.com/.well-known/jwks.json'
            }),
            audience: 'http://localhost:3000/listeHeros',
            issuer: 'https://dev--36fn6vi.eu.auth0.com/',
            algorithms: ['RS256']
        });
        ```
        </details>
    - Import jwtCheck in route.ts
        ```import {jwtCheck} from "./security/jwt";```
    - And add jwtCheck on route to protect
        <details>
        <summary>routes.ts</summary>
        ```
        import {Constructeur} from './controllers/controllers';
        import {jwtCheck} from "./security/jwt";
        export class Routes {
            public Constructeur: Constructeur = new Constructeur();
            public routes(app): void {
                app.route("/").get(jwtCheck,this.Constructeur.index);
                app.route('/listeHeros').get(jwtCheck,this.Constructeur.allHeros);
                app.route('/listeHeros').post(jwtCheck,this.Constructeur.addHero);
                app.route('/listeHeros/:id').get(jwtCheck,this.Constructeur.showHero);
                app.route('/listeHeros/:id').put(jwtCheck,this.Constructeur.updateHero);
                app.route('/listeHeros/:id').delete(jwtCheck,this.Constructeur.deleteHero);
                app.route('/test').get(this.Constructeur.testAPI);
                app.use((req, res) => {
                res.status(404).json({url: req.originalUrl, error: 'not found'});
                });
            }
        }
        ```
        </details>
    - And now to access our API we need an access token
    - We will also add permissions. (It will allow us to authorize the access according to the connected user.)
    - In  API/app/security create jwtPerm.ts files
        <details>
        <summary>jwtPerm.ts</summary>
        ```
            var jwtPerm = require('express-jwt-permissions')();

            export var admin = jwtPerm.check('admin')
            export var user = jwtPerm.check('user')
            export var canRead = jwtPerm.check('read:hero')
            export var canCreate = jwtPerm.check('create:hero')
            export var canUpdate = jwtPerm.check('update:hero')
            export const canDelete = jwtPerm.check('delete:hero')
        ```
        </details>
    - Import jwtCheck in route.ts
        ```import * as Perm from "../securité/jwtPerm";```
    - And add permission on route to protect
        <details>
        <summary>routes.ts</summary>
        ```
            import {Constructeur} from './controllers/controllers';
            import {jwtCheck} from "./security/jwt";
            import * as Perm from "./security/jwtPerm";

            export class Routes {
            public Constructeur: Constructeur = new Constructeur();
            public routes(app): void {
                app.route("/").get(jwtCheck,this.Constructeur.index);
                app.route('/listeHeros').get(jwtCheck,Perm.canRead,this.Constructeur.allHeros);
                app.route('/listeHeros').post(jwtCheck,Perm.canCreate,this.Constructeur.addHero);
                app.route('/listeHeros/:id').get(jwtCheck,Perm.canRead,this.Constructeur.showHero);
                app.route('/listeHeros/:id').put(jwtCheck,Perm.canUpdate,this.Constructeur.updateHero);
                app.route('/listeHeros/:id').delete(jwtCheck,Perm.canDelete,this.Constructeur.deleteHero);
                app.use((req, res) => {
                res.status(404).json({url: req.originalUrl, error: 'not found'});
                });
            }
            }
        ```
        </details>
        <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/546821c10065016f0f019d3e7bd6711d1cce6b2d" target="_blank">**DOWNLOAD**</a> 
    ### Create Auth0Application
    - Click on Application in slide-bar.
    - Click on Create Application (this Application represents our APP)
    - Choose your name (ex:TutoAPP)
    - Choose an application type (click on Single Page Web Applications)
    - Create your app
    - In settings
        - Configure Callback URLs add :
            ```http://localhost:4200/```
        - Configure Logout URLs add :
            ```http://localhost:4200/```
        - Configure Allowed Web Origins add :
            ```http://localhost:4200/```
    - In Quickstart click on.
        - Angular
        - DOWNLOAD SAMPLE
        - DOWNLOAD
    - Copy this file contenent in APP-AUTH0
    - Open this file in terminal
        ```
        npm install
        ng serve --port 4200
        ```
    - You have an application that includes authentication.
    - More than merge the 2 applications.<br>

    <a style='color:blue' href="https://github.com/Passiverecords/TutoAngularApiDB/tree/6f2b402cfa7484302e3c7d4c9e9112e74677c749" target="_blank">**DOWNLOAD**</a>
## Source
- https://angular.io/start
- https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/
- https://docs.atlas.mongodb.com/
