import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'case-one-child-a',
  template: `<div style="background-color: blue">
    {{ data.val }}<case-one-child-c [data]="data.cData"></case-one-child-c>
    <div></div>
  </div>`,
})
export class CaseOneChildAComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change CaseOneChildA');
  }
}
