import {Ingredient} from "../shared/ingredients.model";

export class Cocktail{
  public nume: string;
  public poza: string;
  public ingrediente :Ingredient[];

  constructor(nume:string, poza:string, ingredients:Ingredient[] ) {
    this.nume=nume;
    this.poza=poza;
    this.ingrediente=ingredients;
  }


}
