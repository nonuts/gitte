import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <div (click)="makeRequest()" [class]="'shadow shadow' + size">
      <div class="character">
        <img [class]="'eyes' + size" src="app/img/eyes.svg"/>
        <div [class]="'gitte gitte' + size"></div>
    </div>
    </div>
    
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Gitte';
  fat: false;
  size: number;

  constructor(private http: Http) {

  }

  getFat() {
    if(this.fat){
      return "gitte gitte02";
    } else {
      return "gitte gitte012";
    }
  }
  getEyes() {
    if(this.fat){
      return "big";
    } else {
      return "small";
    }
  }

  makeRequest(): void {
    this.http.request('http://localhost:8080').subscribe((res: Response) => {
      const data = res.json();
      this.size=data.lines;
    })
  }
}
