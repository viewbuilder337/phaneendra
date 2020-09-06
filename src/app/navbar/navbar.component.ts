import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public navbarlinks =[
    {"nav_name":"Dashboard","router_link":"/dashboard"},
    {"nav_name":"Projects","router_link":"/projects"},
    {"nav_name":"Themes","router_link":"/themes"},
    {"nav_name":"CSS Stuff","router_link":"/css_stuff"},
    {"nav_name":"Campaigns","router_link":"/campaigns"},
    {"nav_name":"Designs","router_link":"/designs"},
     {"nav_name":"Activity","router_link":"/activity"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
