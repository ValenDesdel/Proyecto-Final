import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiproductComponent } from './admiproduct.component';

describe('AdmiproductComponent', () => {
  let component: AdmiproductComponent;
  let fixture: ComponentFixture<AdmiproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
