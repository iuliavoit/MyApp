import { Component, OnInit } from '@angular/core';
import {produsDataStorageService} from "../../../shared/produsData-storage.service";

@Component({
  selector: 'app-produs-edit',
  templateUrl: './produs-edit.component.html',
  styleUrls: ['./produs-edit.component.css']
})
export class ProdusEditComponent implements OnInit {

  constructor(private dataSt:produsDataStorageService) { }

  ngOnInit(){
    this.dataSt.fetchProduse().subscribe();

  }

}
