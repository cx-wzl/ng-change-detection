import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  caseOneData: any;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    console.log('-------------Init-----------------');
    this.caseOneData = {
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
    console.log(JSON.stringify(this.caseOneData));
  }

  ngAfterViewInit(): void {
    this.httpClient.get<any>('assets/case.json').subscribe((o) => {
      console.log('-------------Ajax-----------------');
      this.caseOneData.aList = o.aList;
      console.log(JSON.stringify(this.caseOneData));
    });

    setTimeout(() => {
      console.log('-------------Timeout-----------------');
      this.caseOneData.aList = [
        { val: 11, cData: 'c11' },
        { val: 21, cData: 'c21' },
        { val: 31, cData: 'c31' },
      ];
      console.log(JSON.stringify(this.caseOneData));
    }, 1000);
  }

  onCaseOneClick() {
    console.log('-------------Event-----------------');
    this.caseOneData.bList = [
      { val: 'a1', cData: 'ca1' },
      { val: 'b1', cData: 'cb1' },
      { val: 'c1', cData: 'cc1' },
    ];
    console.log(JSON.stringify(this.caseOneData));
  }
}
