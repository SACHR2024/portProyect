import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaarchContentComponent } from './seaarch-content.component';

describe('SeaarchContentComponent', () => {
  let component: SeaarchContentComponent;
  let fixture: ComponentFixture<SeaarchContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeaarchContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeaarchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
