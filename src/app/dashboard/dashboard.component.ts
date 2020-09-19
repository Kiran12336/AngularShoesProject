import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user :any =[]

  

  constructor(private dataservice:DataService) { }
  getUserData()
  {
    this.dataservice.getData().subscribe((res)=>{
      this.user=res
    })
  }

  delete(id)
  {
    var myFormData= new FormData();
    myFormData.append('id', id);
    this.dataservice.deleteData(myFormData).subscribe((res)=>{
      //console.log("success",res);
      alert("User Deleted Successfully...")
      this.getUserData()
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }

}
