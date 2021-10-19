import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from "../cocktail.model";
import {CocktailsService} from "../cocktails.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit, OnDestroy {

  cocktails: Cocktail[];
  subscription: Subscription;

  constructor(private cocktailsService:CocktailsService, private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription=this.cocktailsService.cocktailsChanged.subscribe(
      (cocktails:Cocktail[])=>{
        this.cocktails=cocktails;
      }
    );
    this.cocktails=this.cocktailsService.getCocktails();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

  addCocktail(){
  this.router.navigate(['new'], {relativeTo:this.route});

  }
}

