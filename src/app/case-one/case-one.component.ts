import { Component, Input } from '@angular/core';

@Component({
    selector: 'case-one',
    template: `
    <case-one-child-a></case-one-child-a>
    <case-one-child-b></case-one-child-b>
    `
})
export class CaseOneComponent {
    @Input() data: [];
} 