import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { PostpropertyComponent } from './postproperty/postproperty.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { MypropComponent } from './myprop/myprop.component';
import { TrackComponent } from './track/track.component';
import { AddimageComponent } from './addimage/addimage.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { Login1Component } from './login1/login1.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    SearchComponent,
    AddComponent,
    PostpropertyComponent,
    DeleteComponent,
    ListComponent,
    MypropComponent,
    TrackComponent,
    AddimageComponent,
    ViewimageComponent,
    Login1Component,
    ForgotComponent,
    UserdetailsComponent,
    AdminsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
