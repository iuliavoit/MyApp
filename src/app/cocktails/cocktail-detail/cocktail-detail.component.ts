import { Component, OnInit } from '@angular/core';
import {Cocktail} from "../cocktail.model";
import {CocktailsService} from "../cocktails.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {cocktailDataStorageService} from "../../shared/cocktailData-storage.service";

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

  cocktail:Cocktail;
  id:number;
  constructor(private cocktailService : CocktailsService, private route: ActivatedRoute, private router:Router,private dataStorage:cocktailDataStorageService) {

  }

  ngOnInit(){
    this.route.params.subscribe((p:Params)=>{this.id= +p['id'];
    this.cocktail=this.cocktailService.getSingleCocktail(this.id);
    });
  }

  editCocktail(){
    this.router.navigate(['edit'],{relativeTo:this.route });
  }


  onDeleteCocktail() {
    this.cocktailService.deleteCocktail(this.id);
    this.dataStorage.storeCocktails();
    this.router.navigate(['/cocktails']);
  }
}
