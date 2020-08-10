import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'case-one-child-b',
  template: `<div style="background-color: red">
    {{ data.val }}<case-one-child-c [data]="data.cData"></case-one-child-c>
    <div></div>
  </div>`,
})
export class CaseOneChildBComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change CaseOneChildB');
  }
}
