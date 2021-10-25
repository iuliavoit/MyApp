import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../authentication/auth.service";
import {CartService} from "../cocktail-shop/cart/cart.service";
import {map, tap} from "rxjs/operators";
import {Cart} from "../cocktail-shop/cart/cart.model";

@Injectable({ providedIn: 'root' })
export class CartDataStorageService{
  constructor(private http:HttpClient, private cartService:CartService) {
  }

  storeComanda(){
    const comanda=this.cartService.getComanda();
    console.log(comanda);
    this.http.post('https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/comenzi.json',comanda)
    .subscribe(response=>{console.log(response)});
  }

  fetchComanda(){
    return this.http
      .get<Cart[]>(
        'https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/comenzi/-MmsF_6qYI0MzgFViZtH.json'
      ).pipe(
        map(comenzi => {
          return comenzi.map(comanda => {
            return {
              ...comanda,
             produse: comanda.produse ? comanda.produse : []
            };
          });
        }),
        tap(comenzi => {
          this.cartService.setProduct(comenzi);
         // console.log(comenzi);
        })
      );

  }
}
