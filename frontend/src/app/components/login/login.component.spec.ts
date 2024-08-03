import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { of } from 'rxjs';

import { HttpService } from 'src/app/services/http-service.service';
import { HeaderComponent } from '../header/header/header.component';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, HeaderComponent ],
      imports: [ 
        HttpClientTestingModule,
        FormsModule // Add FormsModule here
      ],
      providers: [
        { provide: HttpService, useValue: { get: () => of([]) } } // Mock the HttpService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
