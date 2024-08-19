import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
