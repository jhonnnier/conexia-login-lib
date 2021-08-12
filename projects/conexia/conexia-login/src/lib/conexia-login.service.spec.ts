import { TestBed } from '@angular/core/testing';

import { ConexiaLoginService } from './conexia-login.service';

describe('ConexiaLoginService', () => {
  let service: ConexiaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexiaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
