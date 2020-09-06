import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login"
  private _createprojectUrl = "http://localhost:3000/api/projects"
  private _getprojects = "http://localhost:3000/api/projects"
  constructor(private  http : HttpClient ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl , user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl , user)
  }
  createProject(user){
    return this.http.post<any>(this._createprojectUrl,user)
  }
  getprojects(){
    return this.http.get<any>(this._getprojects)
  }
  deletproject(id){
    return this.http.delete<any>(this._getprojects)
  }
}
