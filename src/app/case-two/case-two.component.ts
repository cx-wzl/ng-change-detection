import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'case-two',
  template: ` <div *ngFor="let n of data">{{ n }}</div> `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseTwoComponent implements OnChanges {
  @Input() data: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  addItems(items: any) {
    this.data = this.data.concat(items);
    console.log(this.data);
  }

  markForCheck() {
    // this.cdr.markForCheck();
    // this.cdr.reattach();
    this.cdr.detectChanges();
    // this.cdr.checkNoChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change CaseTwo');
  }
}
