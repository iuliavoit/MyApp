import {Component, OnDestroy, OnInit} from '@angular/core';
import {Produs} from "../produs.model";
import {Subscription} from "rxjs";
import {ProdusService} from "../produs.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-produse-list',
  templateUrl: './produse-list.component.html',
  styleUrls: ['./produse-list.component.css']
})
export class ProduseListComponent implements OnInit,OnDestroy {

  produse: Produs[];
  subscription: Subscription;

  constructor(private produsService: ProdusService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.subscription=this.produsService.produsChanged.subscribe(
      (produse:Produs[])=>{
        this.produse=produse;
      }
    );
    this.produse=this.produsService.getProduse();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }


}
