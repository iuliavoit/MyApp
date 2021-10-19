import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstartComponent } from './liststart.component';

describe('ListstartComponent', () => {
  let component: ListstartComponent;
  let fixture: ComponentFixture<ListstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
