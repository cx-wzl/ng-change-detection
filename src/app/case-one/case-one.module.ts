import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaseOneChildAComponent } from './case-one-child-a.component';
import { CaseOneChildBComponent } from './case-one-child-b.component';
import { CaseOneComponent } from './case-one.component';
@NgModule({
  declarations: [CaseOneComponent, CaseOneChildAComponent, CaseOneChildBComponent],
  imports: [CommonModule, FormsModule],
  exports: [CaseOneComponent]
})
export class CaseOneModule { }