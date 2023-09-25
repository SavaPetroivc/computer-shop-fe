import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateLinkComponent } from './navigate-link.component';

describe('NavigateLinkComponent', () => {
  let component: NavigateLinkComponent;
  let fixture: ComponentFixture<NavigateLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigateLinkComponent]
    });
    fixture = TestBed.createComponent(NavigateLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
