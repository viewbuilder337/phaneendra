import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginUserData = { 
    "email":"",
    "password":""
  }
  constructor(private  _auth: AuthService , private _router : Router) { }

  ngOnInit(): void {
  }
  loginUser(){

    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
            this._router.navigate(['/dashboard'])
            localStorage.setItem('token',res.token);
      },
      err => {
       var ab=  document.createElement('div');
       document.getElementsByTagName('body')[0].appendChild(ab);
       ab.innerHTML =` <div class="alert">
       <p class="mb-0">`+ err +`</p>
       </div>
       `
      }
    )

  }
}
