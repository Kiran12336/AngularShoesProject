import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
import { DataService } from '../data.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  form : FormGroup
  user:any =[]
id:number
 
  update()
  {
    console.log(this.form.value);
    this.dataservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("User Data Updated SuccessFully..")
      this.router.navigateByUrl("/ds")
    })
  }
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    
this.activatedroute.params.subscribe((param)=>
{
  this.id=param["id"]
  //console.log(this.id)
  this.dataservice.getDataById(this.id).subscribe((data)=>{

    this.user = data
    this.form = new FormGroup({
      uname:new FormControl(data[0]['username']),
      uemail: new FormControl(data[0]['useremail']),
      umobile: new FormControl(data[0]['userno']),
      uadd: new FormControl(data[0]['useradd']),
      upass: new FormControl(data[0]['userpass']),
      ucpass: new FormControl(data[0]['usercpass'])
    })
  
  })

 
})
  
  }

}
