import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projectsData = { 
    "project_type":"",
    "project_name":"",
    "members":""
  }
  project =[];
  childModal: any;
  constructor(private  _auth: AuthService ) { }

  ngOnInit(): void {
    this._auth.getprojects().subscribe(
      _auth =>this.project = _auth
    )
  }

  deleteproject(id){
    debugger;
    this.project.splice(id,1);
  console.log(id);
  }

 project_create(){
  success_alert("Success");
  document.getElementById('newmodal').click();
  this._auth.createProject(this.projectsData)
  .subscribe(
    res => {
      console.log();
     
    },
    err => console.log(err))
  }
}


function success_alert(arg1){
  document.getElementById("toaster").innerHTML +=
  '<div class="toaster_header fadeInDown fadeInDown-warn shadow error mb-3">'
      +'<div class="d-flex align-items-center">'
          +'<img src="../../assets/images/cross.gif" class="mr-2" height="25">'
          +'<span class="pt-0">Yay ,&nbsp;<strong>'+arg1+'</strong></span>'
      +'</div>'
  +'</div> ';
  setTimeout(function(){
  var ab = document.getElementsByClassName("fadeInDown-warn")[0].outerHTML;
  document.getElementsByClassName("fadeInDown-warn")[0].outerHTML= '';
}, 6000);
}