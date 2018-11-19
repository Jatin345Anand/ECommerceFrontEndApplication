import { TestBed, inject } from '@angular/core/testing';

import { SearchDataMobileService } from './search-data-mobile.service';

describe('SearchDataMobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchDataMobileService]
    });
  });

  it('should be created', inject([SearchDataMobileService], (service: SearchDataMobileService) => {
    expect(service).toBeTruthy();
  }));
});
