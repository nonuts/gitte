import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http'
import { GitteComponent } from './gitte.component';
import { GitteManagerComponent } from './gitteManager.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    GitteComponent,
    GitteManagerComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
