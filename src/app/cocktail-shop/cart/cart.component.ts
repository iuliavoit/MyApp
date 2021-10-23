import {Component, OnDestroy, OnInit} from '@angular/core';
import {Produs} from "../produse/produs.model";
import {Subscription} from "rxjs";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 produse:Produs[];
 length=0;
 totalBani=0;
 isNotEmpty=true;
  private subscription: Subscription;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.produse=this.cartService.getProduse();
    this.length=this.cartService.getTotalQty();
    this.totalBani=this.cartService.getTotalBani();
    if(this.length>0){
      this.isNotEmpty=!this.isNotEmpty;
    }
console.log(this.length);
  }

  onPlusOne(produs: Produs) {
    this.cartService.addProductToCart(produs);
    this.length=this.cartService.getTotalQty();
    this.totalBani=this.cartService.getTotalBani();

  }

  onMinusOne(produs: Produs) {
    this.cartService.deleteProductFromCart(produs);
    this.length=this.cartService.getTotalQty();
    this.totalBani=this.cartService.getTotalBani();
  }


  onChechout() {
    this.cartService.setProdus(this.produse);
  }
}
