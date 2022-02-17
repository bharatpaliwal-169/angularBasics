import { Component,Input } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})

export class ChildComponent{   
    @Input() childMessage: string | undefined
}