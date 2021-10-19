import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailShopComponent } from './cocktail-shop.component';

describe('CocktailShopComponent', () => {
  let component: CocktailShopComponent;
  let fixture: ComponentFixture<CocktailShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
