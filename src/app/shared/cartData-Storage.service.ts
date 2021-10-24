import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CocktailsService} from "../cocktails/cocktails.service";
import {AuthService} from "../authentication/auth.service";
import {CartService} from "../cocktail-shop/cart/cart.service";
import {Produs} from "../cocktail-shop/produse/produs.model";

@Injectable({ providedIn: 'root' })
export class CartDataStorageService{
  constructor(private http:HttpClient, private cartService:CartService, private authService:AuthService) {
  }

  storeComanda(){
    const comanda=this.cartService.getComanda();
    console.log(comanda);
    this.http.post('https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/comenzi.json',comanda)
    .subscribe(response=>{console.log(response)});
  }
}
