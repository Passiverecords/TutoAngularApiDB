import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard2 } from './auth.guard';
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard2]
    });
  });

  it('should ...', inject([AuthGuard2], (guard: AuthGuard2) => {
    expect(guard).toBeTruthy();
  }));
});
