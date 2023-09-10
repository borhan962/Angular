import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtoflioComponent } from './protoflio/protoflio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',redirectTo : "home", pathMatch : "full"},
  {path:'home', component : HomeComponent , title: "home"},
  {path:'about', component : AboutComponent , title: "about"},
  {path:'portfolio', component : ProtoflioComponent , title : "portfolio"},
  {path:'contact', component : ContactComponent, title : "contact"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
