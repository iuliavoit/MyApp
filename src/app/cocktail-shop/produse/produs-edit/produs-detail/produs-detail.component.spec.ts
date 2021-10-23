import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusDetailComponent } from './produs-detail.component';

describe('ProdusDetailComponent', () => {
  let component: ProdusDetailComponent;
  let fixture: ComponentFixture<ProdusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
