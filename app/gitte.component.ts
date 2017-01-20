import { Component, Input } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';

@Component({
  selector: 'gitte',
  templateUrl: 'app/gitte.component.html',
  styleUrls: ['app/gitte.component.css']
})

export class GitteComponent implements AfterViewInit {

  stageRank: number;

  size: number;

  constructor(private http: Http) {
    this.pokedGitte = false;
  }

  ngAfterViewInit() {
    this.http.request('http://localhost:8080').subscribe((res: Response) => {
      const data = res.json();
      this.size = data.lines;
      this.stageRank = Math.floor(Math.random() * 5);
      this.url = "app/img/body.svg"
      this.watchForChanges();
    })
    this.watchForChanges();
  }

  watchForChanges(): void {
    setTimeout(() => {
      const randomNumber = this.getRandomInt();
      this.size = randomNumber;
      this.watchForChanges();
      this.pokedGitte = false;
      console.log(this.url);
    } , 7000);

    // setTimeout(() =>
    //     this.http.request('http://localhost:8080').subscribe((res: Response) => {
    //       const data = res.json();
    //       this.size = data.lines;
    //       console.log("got number: ", data.lines);
    //       this.watchForChanges();
    //     })
    //   , 5000)
  }

  getRandomInt() {
    const min = 0;
    const max = 4;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  pokeMe() {
    this.pokedGitte = true;
  }

}
