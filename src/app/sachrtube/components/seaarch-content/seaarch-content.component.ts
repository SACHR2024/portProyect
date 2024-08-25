import { Component } from '@angular/core';
import { SachrContentService } from '../../services/sachr-content.service';

@Component({
  selector: 'app-seaarch-content',
  templateUrl: './seaarch-content.component.html',
  styleUrl: './seaarch-content.component.css'
})
export class SeaarchContentComponent {
  constructor(
    private searchService : SachrContentService
  ){

  }

  findContent(){
    this.searchService.getContent('cat');
  }
}
