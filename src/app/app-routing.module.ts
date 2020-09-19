import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RegisterpageComponent } from './registerpage/registerpage.component';
import { FormalfootComponent } from './formalfoot/formalfoot.component';
import { MTraditionalComponent } from './mtraditional/mtraditional.component';
//import { LoginpageComponent } from './loginpage/loginpage.component';
import { McasualComponent } from './mcasual/mcasual.component';
import { WFormalComponent } from './wformal/wformal.component';
import { WcasualComponent } from './wcasual/wcasual.component';
import { WTraditionalComponent } from './wtraditional/wtraditional.component';
import { KFormalComponent } from './k-formal/k-formal.component';
import { KCasualComponent } from './k-casual/k-casual.component';
import { KTarditinalComponent } from './k-tarditinal/k-tarditinal.component';
//import { LoginpgComponent } from './loginpg/loginpg.component';
import { RegisterpgComponent } from './registerpg/registerpg.component';
import {HomepageComponent} from './homepage/homepage.component'
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { LogpgComponent } from './logpg/logpg.component';
import { AdminlgComponent } from './adminlg/adminlg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewimgdetailComponent } from './viewimgdetail/viewimgdetail.component';
import { AddtocartComponent } from './addtocart/addtocart.component';


const routes: Routes = [
 // {path :'register',component: RegisterpageComponent},
  {path :'mfor',component:FormalfootComponent},
  {path:'mtra',component:MTraditionalComponent},
 //{path:'login',component:LoginpageComponent},
  {path:'mcas',component:McasualComponent},
  {path:'wf',component:WFormalComponent},
  {path:'wc',component:WcasualComponent},
  {path:'wt',component:WTraditionalComponent},
  {path:'kf',component:KFormalComponent},
  {path:'kc',component:KCasualComponent},
  {path:'kt',component:KTarditinalComponent},
//{path:'log',component:LoginpageComponent},
{path:'rg',component:RegisterpgComponent},
{path:'hm',component:HomepageComponent},
{path:'update/:id',component:UpdateuserComponent},
{path:'lp',component:LogpgComponent},
{path:'adlg',component:AdminlgComponent},
{path:'ds',component:DashboardComponent},
{path:'vw',component:ViewimgdetailComponent},
{path:'add',component:AddtocartComponent}

/*{path:'adlg',component:AdminlgComponent,
children:[
  
  //
]

}
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[FormalfootComponent,
  MTraditionalComponent,McasualComponent,WFormalComponent,WcasualComponent,WTraditionalComponent,
KFormalComponent,KCasualComponent,KTarditinalComponent,RegisterpgComponent,
HomepageComponent,UpdateuserComponent,LogpgComponent,AdminlgComponent,DashboardComponent,ViewimgdetailComponent,
AddtocartComponent]
