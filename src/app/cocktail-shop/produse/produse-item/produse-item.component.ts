import {Component, Input, OnInit} from '@angular/core';
import {Produs} from "../produs.model";


@Component({
  selector: 'app-produse-item',
  templateUrl: './produse-item.component.html',
  styleUrls: ['./produse-item.component.css']
})
export class ProduseItemComponent implements OnInit {
  @Input() produs: Produs;
  @Input() index: number;


  ngOnInit(){
console.log(this.produs.name);
  }

}
