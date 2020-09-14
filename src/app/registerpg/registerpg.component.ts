import { Component, OnInit } from '@angular/core';
import{User} from './user';
import{FormGroup,FormControl, Validators} from '@angular/forms'
import { DataService } from '../data.service';
@Component({
  selector: 'app-registerpg',
  templateUrl: './registerpg.component.html',
  styleUrls: ['./registerpg.component.css']
})
export class RegisterpgComponent implements OnInit {


  form : FormGroup
  

 
  register()
  {
    //console.log(this.form.value)
    //this.user.push(this.form.value)

    this.dataservice.saveData(this.form.value).subscribe((res)=>{
      alert("Registered SuccessFully..")
    })
  }
  constructor(private dataservice:DataService) { }

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
