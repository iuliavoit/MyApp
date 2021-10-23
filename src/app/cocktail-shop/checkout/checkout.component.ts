import {Component, OnDestroy, OnInit} from '@angular/core';
import {Produs} from "../produse/produs.model";
import {CartService} from "../cart/cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartDataStorageService} from "../../shared/cartData-Storage.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit,OnDestroy {
  produse:Produs[];
  dateForm: FormGroup;
  length=0;
  totalBani=0;
  constructor(private cartService:CartService, private cartDataStorage:CartDataStorageService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produse=this.cartService.getProduse();
    console.log(this.produse);
    this.length=this.cartService.getTotalQty();
    this.totalBani=this.cartService.getTotalBani();
   // this.cartService.initializare();
    this.initForm();
  }

ngOnDestroy() {
  this.cartService.initializare();
}

  private initForm() {
    let nume = '';
    let prenume = '';
    let adresa='';
    let oras='';
    let judet='';
    let zip='';

    this.dateForm = new FormGroup({
      'nume': new FormControl(nume, Validators.required),
      'prenume': new FormControl(prenume, Validators.required),
      'adresa': new FormControl(adresa, Validators.required),
      'oras': new FormControl(oras, Validators.required),
      'judet': new FormControl(judet, Validators.required),
      'zip': new FormControl(zip, Validators.required)

    });
  }


  onPlaceOrder(){


    this.cartService.setDate(this.dateForm.value.nume,this.dateForm.value.prenume, this.dateForm.value.adresa,this.dateForm.value.oras,this.dateForm.value.judet,this.dateForm.value.zip);
  console.log(this.produse);
    this.cartDataStorage.storeComanda();
    this.router.navigate(['/shop/homepage'], {relativeTo:this.route});
  }
}
