import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logpg',
  templateUrl: './logpg.component.html',
  styleUrls: ['./logpg.component.css']
})
export class LogpgComponent implements OnInit {


  user :any =[]
  constructor(private dataservice:DataService) { }

 /* getUserData()
  {
    this.dataservice.logindata().subscribe((res)=>{
      this.user=res
    })
  }*/


  ngOnInit(): void {
  }

}
