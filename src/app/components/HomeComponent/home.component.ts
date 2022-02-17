import { Component, OnInit,OnDestroy } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  intervalSub:any;
  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log("Hello World");
    },3000);
  }
  ngOnDestory(){
    if(this.intervalSub){
      clearInterval(this.intervalSub)
    }
  }
}