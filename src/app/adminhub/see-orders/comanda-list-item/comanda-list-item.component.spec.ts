import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaListItemComponent } from './comanda-list-item.component';

describe('ComandaListItemComponent', () => {
  let component: ComandaListItemComponent;
  let fixture: ComponentFixture<ComandaListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandaListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
