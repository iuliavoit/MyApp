import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {Produs} from "./produs.model";
import {produsDataStorageService} from "../../shared/produsData-storage.service";
import {ProdusService} from "./produs.service";

@Injectable({providedIn:'root'})
export class ProductsResolverService implements Resolve<Produs[]>{

  constructor(private dataStorage:produsDataStorageService, private produsService:ProdusService) {
  }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const c=this.produsService.getProduse();
    if(c.length===0){
      return this.dataStorage.fetchProduse();
    }else{
      return c;
    }

  }

}
