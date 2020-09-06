import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service'
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThemesComponent } from './themes/themes.component';
import { CssStufComponent } from './css-stuf/css-stuf.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DesignsComponent } from './designs/designs.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    DashboardComponent,
    NavbarComponent,
    ProjectsComponent,
    ThemesComponent,
    CssStufComponent,
    CampaignsComponent,
    DesignsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
