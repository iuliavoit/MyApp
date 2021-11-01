import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CartService} from "../cocktail-shop/cart/cart.service";
import {Cart} from "../cocktail-shop/cart/cart.model";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
@Injectable({ providedIn: 'root' })
export class CartDataStorageService {

  private dbPath = '/comenzi';
  tutorialsRef: AngularFireList<Cart> = null;

  constructor(private http: HttpClient, private cartService: CartService, private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);

  }
  getAll(): AngularFireList<Cart> {
    return this.tutorialsRef;
  }
  storeComanda() {
    const comanda = this.cartService.getComanda();
    console.log(comanda);
    this.http.post('https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/comenzi.json', comanda)
      .subscribe(response => {
        console.log(response)
      });
  }

}
