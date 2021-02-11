import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: any;
  constructor(private http: HttpClient) { 
    this.token = window.sessionStorage.getItem('token');
  }
  isUserLoggedIn() {

    if (this.token) {
      console.log("isUserLoggedIn: returning true")
      
      return true;
    }
    console.log("isUserLoggedIn: returning false")
    return false;
  }
 
  loginUser(formData: any): Observable<any> {
    console.log(formData);
    this.http.post<any>("http://localhost:5000/login", formData).subscribe(data => {
      console.log("DATA")
      console.log(data.token)
  })
   
      return this.http.post<any>("http://localhost:5000/login", formData).
      pipe(tap(res => this.token = res.token))
      .pipe(tap(res => window.sessionStorage.setItem('token', this.token)))

  }

  logoutUser(): void {
    window.sessionStorage.removeItem('token');
    this.token = null;
  }

}
