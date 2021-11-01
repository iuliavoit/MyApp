import { Component, OnInit } from '@angular/core';
import {produsDataStorageService} from "../../shared/produsData-storage.service";

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {

  constructor(private dataStorage:produsDataStorageService) { }

  ngOnInit(){
    this.dataStorage.fetchProduse().subscribe(data=>
    {
      console.log(data);
    });

  }

}
