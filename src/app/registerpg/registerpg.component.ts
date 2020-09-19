import { Component, OnInit } from '@angular/core';
import{User} from './user';
import{FormGroup,FormControl, Validators} from '@angular/forms'
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registerpg',
  templateUrl: './registerpg.component.html',
  styleUrls: ['./registerpg.component.css']
})
export class RegisterpgComponent implements OnInit {


  form : FormGroup
  

 
  
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) { }


  register()
  {
    console.log(this.form.value)
    //this.user.push(this.form.value)

    this.dataservice.saveData(this.form.value).subscribe((res)=>{
     // console.log("data added" , res);
      alert("Registered SuccessFully..")
    // this.router.navigateByUrl("/ds")
    })
  }


  ngOnInit(): void {

    

    this.form = new FormGroup({
      uname:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),
      uemail: new FormControl("",[Validators.required,Validators.pattern("[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/")]),
      umobile: new FormControl("",[Validators.required,Validators.pattern("[6-9]\d{9}$/")]),
      uadd: new FormControl(""),
      upass: new FormControl("",[Validators.required]),
      ucpass: new FormControl("",[Validators.required])
    })

  }

}
