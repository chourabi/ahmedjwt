import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }



  auth(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('http://localhost:8080/auth/signin',data,httpOptions)
  }


  info(){
    
    const token = localStorage.getItem('tokenahmed');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Bearer "+token
      })
    };
    return this.http.get('http://localhost:8080/auth/info',httpOptions)
  }
}
