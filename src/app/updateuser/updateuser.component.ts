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
      uname:new FormControl(this.user.uname),
      uemail: new FormControl(this.user.uemail),
      umobile: new FormControl(this.user.umobile),
      uadd: new FormControl(this.user.uadd),
      upass: new FormControl(this.user.upass),
      ucpass: new FormControl(this.user.ucpass)
    })
  
  })

 
})
  
  }

}
