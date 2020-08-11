import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'case-one',
  template: `
    <div>{{ title }}</div>
    <case-one-child-a
      *ngFor="let a of data.aList"
      [data]="a"
    ></case-one-child-a>
    <case-one-child-b
      *ngFor="let b of data.bList"
      [data]="b"
    ></case-one-child-b>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseOneComponent implements OnChanges {
  @Input() data: any;
  @Input() title: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change CaseOne');
  }
}
