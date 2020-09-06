import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThemesComponent } from './themes/themes.component';
import { CssStufComponent } from './css-stuf/css-stuf.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DesignsComponent } from './designs/designs.component';

const routes: Routes = [
  {
    path:'events',component:EventsComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {path:'projects',component:ProjectsComponent},
  {path:'themes',component:ThemesComponent},
  {path:'css_stuff',component:CssStufComponent},
  {path:'campaigns',component:CampaignsComponent},
  {path:'designs',component:DesignsComponent},
  {
    path:'special',component:SpecialEventsComponent
  },{
    path:'dashboard', component:DashboardComponent
    }
  ,{
  path:'',
  redirectTo:'/login',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
