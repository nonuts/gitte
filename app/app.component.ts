import { Component } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <div [class]="'shadow shadow' + size">
      <div class="character">
        <img [class]="'eyes' + size" src="app/img/eyes.svg"/>
        <div [class]="'gitte gitte' + size"></div>
    </div>
    </div>
    
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements AfterViewInit {
  size: number;

  constructor(private http: Http) {

  }

  ngAfterViewInit() {
    this.http.request('http://localhost:8080').subscribe((res: Response) => {
      const data = res.json();
      this.size=data.lines;
      this.watchForChanges();
    })
    this.watchForChanges();
  }

  watchForChanges(): void {
    setInterval(() =>
      this.http.request('http://localhost:8080').subscribe((res: Response) => {
        const data = res.json();
        this.size=data.lines;
        this.watchForChanges();
      })
      , 5000)  }
}
