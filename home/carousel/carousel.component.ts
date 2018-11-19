import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doleft(event :Event):void{
    console.log('do left...');
  }
  doright(event :Event):void{
    console.log('do rigtht...');
  }
}
