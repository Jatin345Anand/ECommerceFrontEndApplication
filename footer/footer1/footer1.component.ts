import { Component } from '@angular/core';

@Component(
    {
        selector:'footer-comp',
        templateUrl:'footer1.component.html',
        styleUrls:['footer1.component.css']
    }
)
export class Footer1Component{
    title:string;
    constructor(){
        this.title="FOOTER";
    }
}