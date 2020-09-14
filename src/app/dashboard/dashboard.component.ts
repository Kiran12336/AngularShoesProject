import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user :any =[]

  delete(id)
  {
    this.dataservice.deleteData(id).subscribe((res)=>{
      alert("User Deleted Successfully...")
      this.getUserData()
    })
  }

  constructor(private dataservice:DataService) { }
  getUserData()
  {
    this.dataservice.getData().subscribe((res)=>{
      this.user=res
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }

}
