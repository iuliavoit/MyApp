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
  refreshList(): void {
    this.currentOrder = undefined;
    this.currentIndex = -1;
    this.retrieveOrders();
  }
  setActiveOrder(order, index): void {
    this.currentOrder= order;
    this.currentIndex = index;
    //console.log(this.currentOrder.key);
  }
  removeAllOrders(): void {
    this.dataSt.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
  deleteOrder(): void {
    if (this.currentOrder.key) {
      //console.log(this.currentOrder);
      this.dataSt.deleteone(this.currentOrder.key)
        .then(() => {
          this.refreshList();
          //this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
