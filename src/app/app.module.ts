import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CaseOneModule } from './case-one/case-one.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CaseOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
