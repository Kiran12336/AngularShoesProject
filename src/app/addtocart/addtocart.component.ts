import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {DataService} from '../data.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {


   form:FormGroup

  constructor(private dataservice:DataService,
    private activatedroute:ActivatedRoute,
    private router:Router) { }


    onFileSelect(event)
    {
      if(event.target.files.length > 0)
      {
        const file =event.target.files[0];
      this.form.get('image').setValue(file);
          }
    }


uploadfile()
{
  const formData = new FormData();
  formData.append('myFile',this.form.get('image').value);
  formData.append('brand',this.form.get('prbrand').value);
  formData.append('color',this.form.get('prcolor').value);
  formData.append('price',this.form.get('prprice').value);
  formData.append('quantity',this.form.get('prqty').value);
  this.dataservice.saveImage(formData).subscribe((res)=>{
    alert("data saved")
  //  this.router.navigateByUrl("/disp")
  })

}


//brand:string[]=["Nike","Adidas","Puma","Walkmate"]

  ngOnInit(): void {

    this.form=new FormGroup(
      {
        prbrand:new FormControl(""),
        prcolor:new FormControl(""),
        prprice:new FormControl(""),
        prqty:new FormControl(""),
        image:new  FormControl("")
      }
    

    )
  }

}
