import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusEditListComponent } from './produs-edit-list.component';

describe('ProdusEditListComponent', () => {
  let component: ProdusEditListComponent;
  let fixture: ComponentFixture<ProdusEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdusEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
