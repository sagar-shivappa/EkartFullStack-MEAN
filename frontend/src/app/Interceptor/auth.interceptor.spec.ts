import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;
  let httpMock: HttpTestingController;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthInterceptor,
        {
          provide: AuthService,
          useValue: {
            getToken: jasmine.createSpy('getToken')
          }
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    });

    interceptor = TestBed.inject(AuthInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if token is present', () => {
    (authService.getToken as jasmine.Spy).and.returnValue('test-token');

    const httpClient = TestBed.inject(HttpClient);

    httpClient.get('/test').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('Bearer test-token');
    req.flush({});
  });

  it('should not add Authorization header if token is not present', () => {
    (authService.getToken as jasmine.Spy).and.returnValue('');

    const httpClient = TestBed.inject(HttpClient);

    httpClient.get('/test').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeFalse();
    req.flush({});
  });
});
