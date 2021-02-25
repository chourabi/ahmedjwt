import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule , ReactiveFormsModule
  ]
})
export class HomeModule { }
