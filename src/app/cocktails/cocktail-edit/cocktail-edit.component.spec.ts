import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcocktailComponent } from './cocktail-edit.component';

describe('EditcocktailComponent', () => {
  let component: EditcocktailComponent;
  let fixture: ComponentFixture<EditcocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcocktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
