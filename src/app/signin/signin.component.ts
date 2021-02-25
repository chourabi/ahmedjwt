import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
  })
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log("i'm always on ");
    
  }

  signIn(){
    
    this.auth.auth(this.myForm.value).subscribe((data:any)=>{
      if (data.token) {
        localStorage.setItem('tokenahmed',data.token);
        this.router.navigate(['/home'])

      }
      
    })
  }

}
