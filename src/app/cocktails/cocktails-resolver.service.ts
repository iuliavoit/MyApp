import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Cocktail} from "./cocktail.model";
import {cocktailDataStorageService} from "../shared/cocktailData-storage.service";
import {CocktailsService} from "./cocktails.service";

@Injectable({providedIn:'root'})
export class CocktailsResolverService implements Resolve<Cocktail[]>{

  constructor(private dataStorage:cocktailDataStorageService, private cocktailsService:CocktailsService) {
  }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const c=this.cocktailsService.getCocktails();
    if(c.length===0){
      return this.dataStorage.fetchCocktails();
    }else{
      return c;
    }

  }

}
