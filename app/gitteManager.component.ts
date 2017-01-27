import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'gitteManager',
  templateUrl: 'app/gitteManager.component.html',
  styleUrls: ['app/gitteManager.component.css']
})

export class GitteManagerComponent  {

  stageRank: number;

  url: string;


  size: number;

  constructor(private http: Http) {
  }


  stageGitte(contestantUrl: string, contestantName: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    debugger;
    this.http.post('http://localhost:8080/gittes',
      {url: contestantUrl, reponame: contestantName}, headers).subscribe((res: Response) => {
      debugger;
      const data = res.json();
      this.size = data.lines;
      this.stageRank = Math.floor(Math.random() * 5);
      this.url = "app/img/body.svg";
    });
  }

}
