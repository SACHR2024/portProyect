import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SachrtubeRoutingModule } from './sachrtube-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { SeaarchContentComponent } from './components/seaarch-content/seaarch-content.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MainPageComponent,
    ContentListComponent,
    SeaarchContentComponent
  ],
  imports: [
    CommonModule,
    SachrtubeRoutingModule,
  ]
})
export class SachrtubeModule { }
