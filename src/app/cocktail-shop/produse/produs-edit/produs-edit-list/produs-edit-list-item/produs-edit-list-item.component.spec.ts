import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusEditListItemComponent } from './produs-edit-list-item.component';

describe('ProdusEditListItemComponent', () => {
  let component: ProdusEditListItemComponent;
  let fixture: ComponentFixture<ProdusEditListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdusEditListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusEditListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
