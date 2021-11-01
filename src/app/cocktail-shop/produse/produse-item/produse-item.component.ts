import {Component, Input, OnInit} from '@angular/core';
import {Produs} from "../produs.model";
import {ProdusService} from "../produs.service";
import {Subscription} from "rxjs";
import {CartService} from "../../cart/cart.service";


@Component({
  selector: 'app-produse-item',
  templateUrl: './produse-item.component.html',
  styleUrls: ['./produse-item.component.css']
})
export class ProduseItemComponent implements OnInit {
  produse: Produs[];
  subscription: Subscription;

  constructor(private produsService: ProdusService, private cartService:CartService) {
  }

  ngOnInit(){
    this.subscription=this.produsService.produsChanged.subscribe(
      (produse:Produs[])=>{
        this.produse=produse;
      }
    );
    this.produse=this.produsService.getProduse();
  }

  onAddToCart(produs) {
    this.cartService.addProductToCart(produs);
  }
}
