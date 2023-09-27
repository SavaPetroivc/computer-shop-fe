import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWrapperComponent } from './cart-wrapper.component';

describe('CartWrapperComponent', () => {
  let component: CartWrapperComponent;
  let fixture: ComponentFixture<CartWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartWrapperComponent]
    });
    fixture = TestBed.createComponent(CartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
