import { TestBed } from '@angular/core/testing';

import { SachrContentService } from './sachr-content.service';

describe('SachrContentService', () => {
  let service: SachrContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SachrContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
