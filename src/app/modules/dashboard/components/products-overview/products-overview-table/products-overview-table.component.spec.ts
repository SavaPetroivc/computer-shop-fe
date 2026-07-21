import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOverviewTableComponent } from './products-overview-table.component';

describe('ProductsOverviewTableComponent', () => {
  let component: ProductsOverviewTableComponent;
  let fixture: ComponentFixture<ProductsOverviewTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsOverviewTableComponent]
    });
    fixture = TestBed.createComponent(ProductsOverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
