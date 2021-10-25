import {Component, OnDestroy, OnInit} from '@angular/core';
import {Produs} from "../../../cocktail-shop/produse/produs.model";
import {Subscription} from "rxjs";
import {ProdusService} from "../../../cocktail-shop/produse/produs.service";
import {CartService} from "../../../cocktail-shop/cart/cart.service";
import {Cart} from "../../../cocktail-shop/cart/cart.model";

@Component({
  selector: 'app-comanda-list',
  templateUrl: './comanda-list.component.html',
  styleUrls: ['./comanda-list.component.css']
})
export class ComandaListComponent implements OnInit,OnDestroy {
  comenzi: Cart[];
  subscription: Subscription;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.subscription=this.cartService.comanda2Changed.subscribe(
      (comenzi:Cart[])=>{
        this.comenzi=comenzi;
      }
    );
    this.comenzi=this.cartService.getComenzi();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
