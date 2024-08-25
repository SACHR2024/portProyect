import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FooterComponent,
    MainNavBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,

  ],
  exports: [
    FooterComponent,
    MainNavBarComponent
  ]
})
export class SharedModule { }
