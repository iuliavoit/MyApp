import {Component, Input, OnInit} from '@angular/core';
import {Produs} from "../../../produs.model";

@Component({
  selector: 'app-produs-edit-list-item',
  templateUrl: './produs-edit-list-item.component.html',
  styleUrls: ['./produs-edit-list-item.component.css']
})
export class ProdusEditListItemComponent implements OnInit {
  @Input() produs: Produs;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
