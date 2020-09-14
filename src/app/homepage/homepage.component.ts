import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  
  imgPath:string="../../assets/s2.jpg ";
  //bgImg:string="../../assets/bgimg1.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
