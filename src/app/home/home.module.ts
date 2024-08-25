import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WelcomeComponent,
    AboutMeComponent,
    JoinUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
