import { Component, OnInit } from '@angular/core';
import {CartService} from "../../cocktail-shop/cart/cart.service";
import {CartDataStorageService} from "../../shared/cartData-Storage.service";
import {map} from "rxjs/operators";
@Component({
  selector: 'app-see-orders',
  templateUrl: './see-orders.component.html',
  styleUrls: ['./see-orders.component.css']
})
export class SeeOrdersComponent implements OnInit {
  comenzi: any;
  currentOrder= null;
  currentIndex = -1;

  constructor(private cartService: CartService, private dataSt: CartDataStorageService) {}

  ngOnInit(): void {
    this.retrieveOrders();
  }

  retrieveOrders(): void {
    this.dataSt.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })

        )
      )
    ).subscribe(data => {
      console.log(data);

      this.comenzi = data;

    });
  }
  setActiveOrder(order, index): void {
    this.currentOrder= order;
    this.currentIndex = index;
  }

}
