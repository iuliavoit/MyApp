import {Produs} from "../produse/produs.model";
import {Ingredient} from "../../shared/ingredients.model";

export class Cart{
  public id:number;
  public nume:string;
  public prenume:string;
  public oras:string;
  public judet:string;
  public zip:string;
  public adresa:string;
  public produse:Produs[];

  constructor(n:string, p:string, o:string,j:string,a:string,z:string,produse:Produs[] ) {
    this.nume=n;
    this.prenume=p;
    this.oras=o;
    this.judet=j;
    this.zip=z;
    this.adresa=a;
    this.produse=produse;
  }

}
