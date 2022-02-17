import { Component } from '@angular/core';

@Component({
  selector: 'app-generated-component',
  templateUrl: './generated-component.component.html',
  styleUrls: ['./generated-component.component.css']
})
export class GeneratedComponentComponent {
  add(a:number,b:number):number{
    return a+b;
  }
}
