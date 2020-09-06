import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUserData = {
    "email" : '',
    "org"  : '',
    "password" : ''
  }
  constructor(private  _auth: AuthService,private _router : Router) { }  

  ngOnInit(): void {
  }
  signupUser(){
    this._auth.registerUser(this.signupUserData)
    .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/dashboard'])
      },
      err => console.log(err)
    )
  }

}
