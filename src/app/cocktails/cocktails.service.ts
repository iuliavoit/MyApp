import {Cocktail} from "./cocktail.model";
import {Ingredient} from "../shared/ingredients.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class CocktailsService{

  cocktailsChanged=new Subject<Cocktail[]>();


    private cocktails:Cocktail[]=[];
    getCocktails(){
      return this.cocktails.slice();
    }

    getSingleCocktail(idx:number){
      return this.cocktails[idx];
    }

    addCocktail(cocktail:Cocktail){
      this.cocktails.push(cocktail);
      this.cocktailsChanged.next(this.cocktails.slice());
    }

    editCocktail(index:number, newCocktail:Cocktail){
      this.cocktails[index]=newCocktail;
      this.cocktailsChanged.next(this.cocktails.slice());
    }

    deleteCocktail(index:number){
      this.cocktails.splice(index,1);
      this.cocktailsChanged.next(this.cocktails.slice());

    }

    setCocktails(cocktails: Cocktail[]){
      this.cocktails=cocktails;
      this.cocktailsChanged.next(this.cocktails.slice());
    }
}
