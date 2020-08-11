import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CaseOneModule } from './case-one/case-one.module';
import { CaseTwoModule } from './case-two/case-two.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CaseOneModule, CaseTwoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
