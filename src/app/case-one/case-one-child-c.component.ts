import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'case-one-child-c',
  template: `<div style="background-color: yellow">
    {{ data }}
    <div></div>
  </div>`,
})
export class CaseOneChildCComponent implements OnChanges {
  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change CaseOneChildC');
  }
}
