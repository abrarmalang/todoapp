import { TestBed, inject } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        BackendService
      ]
    });
  });

  it('should be created', inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  }));
});
