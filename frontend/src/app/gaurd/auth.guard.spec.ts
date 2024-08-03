import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http-service.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { getToken: () => null } }, // Mock AuthService
        { provide: HttpService, useValue: { get: () => of([]) } }, // Mock HttpService
        { provide: Router, useValue: { navigate: () => {} } } // Mock Router
      ]
    })
    .compileComponents();

    // Inject AuthGuard and any other dependencies here
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
