import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlg',
  templateUrl: './adminlg.component.html',
  styleUrls: ['./adminlg.component.css']
})
export class AdminlgComponent implements OnInit {

 uname:string
 pass:string

onclick()
{
  if(this.uname=="admin" && this.pass=="admin123")
  
    alert("admin login successfully")
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
