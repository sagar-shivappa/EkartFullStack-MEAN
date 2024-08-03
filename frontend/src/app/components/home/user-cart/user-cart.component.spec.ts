import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http-service.service';
import { HeaderComponent } from '../../header/header/header.component';
import { UserCartComponent } from './user-cart.component';

describe('UserCartComponent', () => {
  let component: UserCartComponent;
  let fixture: ComponentFixture<UserCartComponent>;
  let httpService: HttpService;
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCartComponent, HeaderComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpService,
        AuthService,
      ]
    }).compileComponents(); // Create a fake app.module.ts for that particular Component

    fixture = TestBed.createComponent(UserCartComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // Inject testbed for all services required
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call initFun and populate cartItems', () => {
      const mockCartData = {
        _id: '66a3730d4fdf1d6001533c93',
        user_id: 1,
        products: [{
          product_name: 'Sample',
          product_id: 123,
          product_description: 'Sports Running Shoes',
          price: 456,
          discount_percentage: 5,
          image: '13000',
          product_brand: 'PumA',
        }],
        createdAt: '2024-07-26T09:57:33.616Z',
        updatedAt: '2024-07-26T09:57:33.616Z',
        __v: 0,
      };

      spyOn(authService, 'getUserId').and.returnValue(1);
      spyOn(httpService, 'cartByUserId').and.returnValue(of(mockCartData));

      component.ngOnInit();

      expect(httpService.cartByUserId).toHaveBeenCalledWith(1);
      expect(component.cartItems).toEqual(mockCartData);
    });

    // it('should handle error in initFun', () => {
    //   spyOn(authService, 'getUserId').and.returnValue(12);
    //   spyOn(httpService, 'cartByUserId').and.returnValue(throwError('Error'));

    //   component.initFun();
      
    //   expect(component.cartItems).toThrowError();
    // });
  });

  describe('cardButtonClicked', () => {
    it('should call deleteFromCart and refresh cart', () => {
      const mockCartData = {
        _id: '66a3730d4fdf1d6001533c93',
        user_id: 1,
        products: [{
          product_name: 'Sample',
          product_id: 123,
          product_description: 'Sports Running Shoes',
          price: 456,
          discount_percentage: 5,
          image: '13000',
          product_brand: 'PumA',
        }],
        createdAt: '2024-07-26T09:57:33.616Z',
        updatedAt: '2024-07-26T09:57:33.616Z',
        __v: 0,
      };

      spyOn(authService, 'getUserId').and.returnValue(1);
      spyOn(httpService, 'cartByUserId').and.returnValue(of(mockCartData));

      component.ngOnInit();

      expect(httpService.cartByUserId).toHaveBeenCalledWith(1);

      const mockResponse = 'Item removed';
      spyOn(httpService, 'deleteFromCart').and.returnValue(of(mockResponse));
      spyOn(window, 'alert'); // To suppress and test alert

      component.cardButtonClicked(123);

      expect(httpService.cartByUserId).toHaveBeenCalledWith(1);
      expect(component.cartItems).toEqual(mockCartData);
      expect(httpService.deleteFromCart).toHaveBeenCalledWith(1, 123);
      expect(httpService.deleteFromCart).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith(mockResponse);
    });

    // it('should handle error in cardButtonClicked', () => {
    //   spyOn(authService, 'getUserId').and.returnValue(1);
    //   spyOn(httpService, 'deleteFromCart').and.returnValue(throwError('Error'));
    //   spyOn(window, 'alert');

    //   component.cardButtonClicked(123);

    //   expect(httpService.deleteFromCart).toHaveBeenCalledWith(1, 123);
    //   expect(window.alert).toHaveBeenCalledWith('Error'); // Adjust this according to actual error handling
    // });
  });
});
