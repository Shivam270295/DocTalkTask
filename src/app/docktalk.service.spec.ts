import { TestBed, inject } from '@angular/core/testing';

import { DocktalkService } from './docktalk.service';

describe('DocktalkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocktalkService]
    });
  });

  it('should be created', inject([DocktalkService], (service: DocktalkService) => {
    expect(service).toBeTruthy();
  }));
});
