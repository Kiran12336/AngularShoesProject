import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formalfoot',
  templateUrl: './formalfoot.component.html',
  styleUrls: ['./formalfoot.component.css']
})
export class FormalfootComponent implements OnInit {

  footimg:string="../../assets/s2.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
