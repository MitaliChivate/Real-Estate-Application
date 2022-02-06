import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth-guard.service';

import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';
import { PostpropertyComponent } from './postproperty/postproperty.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { MypropComponent } from './myprop/myprop.component';
import { TrackComponent } from './track/track.component';
import { AddimageComponent } from './addimage/addimage.component';
import { Login1Component } from './login1/login1.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';
//import { UpdateComponent } from './update/update.component';
//import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
    {path: "",  redirectTo : "home", pathMatch : "full"},
    {path: "home", component : HomeComponent},
    //{path: "about", component : AboutComponent},
    //{path: "admin", component : AdminComponent, canActivate : [AuthGuardService]},
    {path: "login", component : LoginComponent},
   
    {path: "search", component : SearchComponent},
    {path: "forgot", component : ForgotComponent},
    {path: "admin", component : AdminComponent},
    {path: "image", component : AddimageComponent},
    {path: "login1", component : Login1Component},
    {path:"add",component:AddComponent},
    {path:"delete",component:DeleteComponent},
    {path:"list",component:ListComponent},
    {path:"myprop",component:MypropComponent},
    {path:"track",component:TrackComponent},
    {path:"adminsearch",component:AdminsearchComponent},
    {path:"postproperty",component:PostpropertyComponent},
    {path:"userdetails",component:UserdetailsComponent},
    {path:'registration',component:RegisterComponent},

];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}