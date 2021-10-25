import { Component, OnInit } from '@angular/core';
import {Produs} from "../../cocktail-shop/produse/produs.model";
import {Subscription} from "rxjs";
import {Cart} from "../../cocktail-shop/cart/cart.model";
import {CartService} from "../../cocktail-shop/cart/cart.service";
import {CartDataStorageService} from "../../shared/cartData-Storage.service";

import {map, tap} from "rxjs/operators";
@Component({
  selector: 'app-see-orders',
  templateUrl: './see-orders.component.html',
  styleUrls: ['./see-orders.component.css']
})
export class SeeOrdersComponent implements OnInit {
data:Cart[];
  constructor(private cartService: CartService, private dataSt: CartDataStorageService) {
  }

  ngOnInit(): void {
    this.dataSt.fetchComanda().subscribe();


  }
}
