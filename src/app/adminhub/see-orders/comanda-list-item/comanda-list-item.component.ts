import {Component, Input, OnInit} from '@angular/core';
import {Produs} from "../../../cocktail-shop/produse/produs.model";
import {Cart} from "../../../cocktail-shop/cart/cart.model";
import {CartDataStorageService} from "../../../shared/cartData-Storage.service";

@Component({
  selector: 'app-comanda-list-item',
  templateUrl: './comanda-list-item.component.html',
  styleUrls: ['./comanda-list-item.component.css']
})
export class ComandaListItemComponent implements OnInit {
  @Input() comanda: Cart;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {

  }

}
