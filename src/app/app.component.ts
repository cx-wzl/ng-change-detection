import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  caseOneData = {
    aList: [
      { val: 1, cData: 'c1' },
      { val: 2, cData: 'c2' },
      { val: 3, cData: 'c3' },
    ],
    bList: [
      { val: 'a', cData: 'ca' },
      { val: 'b', cData: 'cb' },
      { val: 'c', cData: 'cc' },
    ],
  };

  constructor(private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('-------------Timeout-----------------');
      this.caseOneData.aList = [
        { val: 11, cData: 'c11' },
        { val: 21, cData: 'c21' },
        { val: 31, cData: 'c31' },
      ];
    }, 1000);
  }

  onCaseOneClick() {
    console.log('-------------Event-----------------');
    this.caseOneData.bList = [
      { val: 'a1', cData: 'ca1' },
      { val: 'b1', cData: 'cb1' },
      { val: 'c1', cData: 'cc1' },
    ];
  }
}
