import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOverviewComponent } from './cart-overview.component';

describe('CartOverviewComponent', () => {
  let component: CartOverviewComponent;
  let fixture: ComponentFixture<CartOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartOverviewComponent]
    });
    fixture = TestBed.createComponent(CartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
