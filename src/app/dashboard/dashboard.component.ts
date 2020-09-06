import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  project =[];
  public dashboard =[
    {
      "dashboard_card_heading":"Active Projects",
      "dashboard_card_heading_count":"my_cont",
      "border_class":"border-1"
    },
    {
      "dashboard_card_heading":"No of Themes Used",
      "dashboard_card_heading_count":"20",
      "border_class":"border-2"
    },
    {
      "dashboard_card_heading":"No of Themes Customized",
      "dashboard_card_heading_count":"8",
      "border_class":"border-3"
    },
    {
      "dashboard_card_heading":"No of Campaigns Created",
      "dashboard_card_heading_count":"12",
      "border_class":"border-4"
    },
  ]
  constructor( private _auth:AuthService) { }

  ngOnInit(): void {
    this._auth.getprojects().subscribe(
      _auth =>this.project = _auth
    )
  }

}
