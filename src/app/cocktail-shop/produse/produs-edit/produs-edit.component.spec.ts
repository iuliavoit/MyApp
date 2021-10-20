import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusEditComponent } from './produs-edit.component';

describe('ProdusEditComponent', () => {
  let component: ProdusEditComponent;
  let fixture: ComponentFixture<ProdusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdusEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
