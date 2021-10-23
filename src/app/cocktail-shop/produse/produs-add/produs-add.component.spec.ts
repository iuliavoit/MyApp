import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusAddComponent } from './produs-add.component';

describe('ProdusEditComponent', () => {
  let component: ProdusAddComponent;
  let fixture: ComponentFixture<ProdusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdusAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
