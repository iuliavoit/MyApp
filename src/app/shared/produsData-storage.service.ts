import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../authentication/auth.service";
import {ProdusService} from "../cocktail-shop/produse/produs.service";
import {map, tap} from "rxjs/operators";
import {Produs} from "../cocktail-shop/produse/produs.model";

@Injectable({ providedIn: 'root' })
export class produsDataStorageService {
  constructor(private http:HttpClient, private produsService:ProdusService, private authService:AuthService) {
  }

  storeProduse(){
    const produse=this.produsService.getProduse();
    this.http.put('https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/produse.json',produse)
      .subscribe(response=>{console.log(response)});
  }

  fetchProduse(){
    return this.http
      .get<Produs[]>(
        'https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/produse.json'
      )
      .pipe(
        map(produse => {
          return produse.map(produs => {
            return {
              ...produs
            };
          });
        }),
        tap(produse=> {
          this.produsService.setProduct(produse);
        })
      );
  }

}
