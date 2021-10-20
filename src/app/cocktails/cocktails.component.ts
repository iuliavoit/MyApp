import { Component, OnInit } from '@angular/core';
import {cocktailDataStorageService} from "../shared/cocktailData-storage.service";


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],

})
export class CocktailsComponent implements OnInit {
  constructor(private dataSt:cocktailDataStorageService) { }

  ngOnInit(){
  this.dataSt.fetchCocktails().subscribe();

  }


}

