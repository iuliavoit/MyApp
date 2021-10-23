import { Component, OnInit } from '@angular/core';
import {Cocktail} from "../../../../cocktails/cocktail.model";
import {Produs} from "../../produs.model";
import {CocktailsService} from "../../../../cocktails/cocktails.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProdusService} from "../../produs.service";
import {produsDataStorageService} from "../../../../shared/produsData-storage.service";

@Component({
  selector: 'app-produs-detail',
  templateUrl: './produs-detail.component.html',
  styleUrls: ['./produs-detail.component.css']
})
export class ProdusDetailComponent implements OnInit {
  produs:Produs;
  id:number;
  constructor(private produsService : ProdusService, private route: ActivatedRoute, private router:Router,private dataStorage:produsDataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe((p:Params)=>{this.id= +p['id'];
      this.produs=this.produsService.getSingleProduct(this.id);
    });
  }
  editProduct(){
    this.router.navigate(['edit'],{relativeTo:this.route });
  }


  deleteProduct() {
    this.produsService.deleteProduct(this.id);
    this.dataStorage.storeProduse();
    this.router.navigate(['/adminhub/editare']);
  }
}
