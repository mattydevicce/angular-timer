import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent }       from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimerComponent }     from './timer/timer.component';
import { NavbarComponent }    from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimerComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
