import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaseTwoComponent } from './case-two.component';

@NgModule({
  declarations: [CaseTwoComponent],
  imports: [CommonModule, FormsModule],
  exports: [CaseTwoComponent],
})
export class CaseTwoModule {}
