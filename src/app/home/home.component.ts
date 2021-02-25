import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getUserName();

  }


  getUserName(){
    this.auth.info().subscribe((data)=>{
      if (data== null) {
        alert("session expired");
      this.router.navigate(['/signin'])
      }else{
        console.log(data);
        
      }
      
    },(err)=>{
      alert("session expired");
      this.router.navigate(['/signin'])

    })
  }



}
