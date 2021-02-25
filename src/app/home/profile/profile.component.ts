import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username='Chargement...';
  email='Chargement...';
  
  hasEmail = false;

  emailUpdate = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required])
  })

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getUserdata();
  }


  getUserdata(){
    this.auth.info().subscribe((data:any)=>{
      console.log(data);
      
      this.username = data.username;
      this.email = data.email;
      

      if (data.email == null) {
        this.hasEmail = false;
      }else{
        this.hasEmail = true;
      }
    })
  }


  saveEmail(){
    this.auth.update(this.emailUpdate.value).subscribe((newUser)=>{
        console.log(newUser);

        this.getUserdata();
        
    })
  }



}
