import {Component, OnInit, Input} from '@angular/core';
import { Cocktail } from "../../cocktail.model";

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.css']
})
export class CocktailItemComponent implements OnInit {
  @Input() cocktail: Cocktail;
  @Input() index: number;



  ngOnInit(): void {

  }



}
