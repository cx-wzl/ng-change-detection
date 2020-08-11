import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CaseOneComponent } from './case-one/case-one.component';
import { CaseTwoComponent } from './case-two/case-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  caseOneData: any;
  caseOneTitle: string;
  @ViewChild(CaseOneComponent) caseOne: CaseOneComponent;
  @ViewChild(CaseTwoComponent) caseTwo: CaseTwoComponent;
  caseTwoData: any;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    console.log('-------------Init-----------------');
    this.caseOneTitle = 'Case One';
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
    this.caseTwoData = [1, 2, 3, 4];
  }

  ngAfterViewInit(): void {
    this.httpClient.get<any>('assets/case.json').subscribe((o) => {
      console.log('-------------Ajax-----------------');
      // this.caseOneTitle = 'Case One Ajax';
      this.caseOneData.aList = o.aList;
      console.log(JSON.stringify(this.caseOneData));
    });

    setTimeout(() => {
      console.log('-------------Timeout-----------------');
      // this.caseOneTitle = 'Case One Timeout';
      this.caseOneData.aList = [
        { val: 11, cData: 'c11' },
        { val: 21, cData: 'c21' },
        { val: 31, cData: 'c31' },
      ];
      console.log(JSON.stringify(this.caseOneData));
    }, 2000);
  }

  onCaseOneClick() {
    console.log('-------------Event-----------------');
    this.caseOneTitle = 'Case One Event';
    // this.caseOne.title = 'Case One Event';
    this.caseOneData.bList = [
      { val: 'a1', cData: 'ca1' },
      { val: 'b1', cData: 'cb1' },
      { val: 'c1', cData: 'cc1' },
    ];
    // this.caseOne.data.bList = [
    //   { val: 'a1', cData: 'ca1' },
    //   { val: 'b1', cData: 'cb1' },
    //   { val: 'c1', cData: 'cc1' },
    // ];
    console.log(JSON.stringify(this.caseOneData));
  }

  markCheck = false;
  onCaseTwoClick() {
    if (!this.markCheck) {
      this.markCheck = true;
      this.caseTwo.markForCheck();
    }
    this.caseTwo.addItems([5, 6, 7]);
    // this.caseTwo.data.push(8);
  }
}
