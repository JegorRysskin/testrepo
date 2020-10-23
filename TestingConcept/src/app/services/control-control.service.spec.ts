import { TestBed } from '@angular/core/testing';

import { ControlControlService } from './control-control.service';

describe('ControlControlService', () => {
  let service: ControlControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
