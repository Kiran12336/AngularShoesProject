import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormalfootComponent } from './formalfoot/formalfoot.component';
import { MTraditionalComponent } from './mtraditional/mtraditional.component';
//import { LoginpageComponent } from './loginpage/loginpage.component';
import { McasualComponent } from './mcasual/mcasual.component';
import { WFormalComponent } from './wformal/wformal.component';
import { WcasualComponent } from './wcasual/wcasual.component';
import { WTraditionalComponent } from './wtraditional/wtraditional.component';
import { KFormalComponent } from './k-formal/k-formal.component';
import { KCasualComponent } from './k-casual/k-casual.component';
//import { HeaderComponent } from './header/header.component';
import { KTarditinalComponent } from './k-tarditinal/k-tarditinal.component';
//import { LoginpgComponent } from './loginpg/loginpg.component';
import { RegisterpgComponent } from './registerpg/registerpg.component';
//import { LoginpageComponent } from './loginpage/loginpage.component';
//import { LoginformComponent } from './loginform/loginform.component';
//import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './component/shared/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { LogpgComponent } from './logpg/logpg.component';
import { AdminlgComponent } from './adminlg/adminlg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewimgdetailComponent } from './viewimgdetail/viewimgdetail.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { RegsiterdashComponent } from './regsiterdash/regsiterdash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
   routingComponents,
   FormalfootComponent,
   MTraditionalComponent,
   //LoginpageComponent,
   McasualComponent,
   WFormalComponent,
   WcasualComponent,
   WTraditionalComponent,
   KFormalComponent,
   KCasualComponent,
   KTarditinalComponent,
   //LoginpgComponent,
   RegisterpgComponent,
   UpdateuserComponent,
   LogpgComponent,
   AdminlgComponent,
   DashboardComponent,
   ViewimgdetailComponent,
   AddtocartComponent,
   PagenotfoundComponent,
   //LoginpageComponent,
   //LoginformComponent,
   //RegsiterdashComponent,
   //HeaderComponent,
   //HeaderComponent,
   //FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
