import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Storage Service', () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
    apiService = TestBed.get(ApiService);
  });

});
