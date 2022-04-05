import { TestBed } from '@angular/core/testing';

import { NgxProgressBarService } from './ngx-progress-bar.service';

describe('NgxProgressBarService', () => {
  let service: NgxProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
