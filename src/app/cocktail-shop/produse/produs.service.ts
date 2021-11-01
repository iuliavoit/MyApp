import {Produs} from "./produs.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable()
export class ProdusService{
  produsChanged=new Subject<Produs[]>();
  private produse:Produs[]=[];


  getProduse(){
    return this.produse.slice();
  }
  getSingleProduct(idx:number){
    return this.produse[idx];
  }
  addProduct(produs:Produs){
    produs.cantitate=1;
    this.produse.push(produs);
    this.produsChanged.next(this.produse.slice());
  }

  editProduct(index:number, newProdus:Produs){

    this.produse[index]=newProdus;
    this.produsChanged.next(this.produse.slice());
  }

  deleteProduct(index:number){
    this.produse.splice(index,1);
    this.produsChanged.next(this.produse.slice());

  }

  setProduct(produse: Produs[]){
    this.produse=produse;
    this.produsChanged.next(this.produse.slice());
  }
}
