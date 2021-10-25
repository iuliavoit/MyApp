import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Produs} from "../produse/produs.model";
import {Cart} from "./cart.model";
import {Cocktail} from "../../cocktails/cocktail.model";

@Injectable()
export class CartService {
  produsChanged=new Subject<Produs[]>();
  comanda2Changed=new Subject<Cart[]>();
  private produse:Produs[]=[];
  private comanda:Cart[]=[];
  private comanda2:Cart[]=[];
  private n:string;
  private p:string;
  private a:string;
  private o:string;
  private j:string;
  private z:string;
  private i=-1;

  addProductToCart(produs) {
    let ok=0;
    for(let i=0;i<this.produse.length;i++){
      if(this.produse[i].nume===produs.nume){
        this.produse[i].cantitate=this.produse[i].cantitate+1;
        ok=1;
      }
    }
    if(ok===0){
      this.produse.push(produs);
      this.produsChanged.next(this.produse.slice());
    }
  }

  deleteProductFromCart(produs){
    for(let i=0;i<this.produse.length;i++){
      if(this.produse[i].nume===produs.nume) {
        if(this.produse[i].cantitate>1){
          this.produse[i].cantitate=this.produse[i].cantitate-1;
        }
        else{
          this.produse.splice(i,1);
        }
      }
      }

  }



  getProduse() {
    return this.produse.slice();
  }

  getTotalQty() {
    let total=0;
    for(let i=0;i<this.produse.length;i++){
      total=total+this.produse[i].cantitate;
    }
    return total;
  }

  getTotalBani() {
    let total=0;
    for(let i=0;i<this.produse.length;i++){
      total=total+this.produse[i].cantitate*this.produse[i].pret;
    }
    return total;
  }

  initializare(){
    //for(let i=0;i<=this.produse.length;i++) {
      this.produse.splice(0,this.produse.length);
    //}
    this.n='';
    this.p='';
    this.a='';
    this.o='';
    this.j='';
    this.z='';
  }

  getComanda() {

    this.i=this.i+1;
   this.comanda[this.i]=new Cart(this.n,this.p,this.o,this.j,this.a,this.z,this.produse);
   return this.comanda[this.i];
  }
  getComenzi(){
    return this.comanda2.slice();
  }

  setDate(nume,prenume,adresa,oras,judet,zip){
    this.n=nume;
    this.p=prenume;
    this.o=oras;
    this.j=judet;
    this.z=zip;
  }

  setProdus(produse: Produs[]) {
    this.produse=produse;
    this.produsChanged.next(this.produse.slice());
  }

  setProduct(comanda: Cart[]) {

      this.comanda2=comanda;
      this.comanda2Changed.next(this.comanda2);

  }
}
