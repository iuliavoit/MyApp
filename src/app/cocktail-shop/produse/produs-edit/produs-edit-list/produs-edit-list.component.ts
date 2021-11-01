import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Produs} from "../../produs.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdusService} from "../../produs.service";

@Component({
  selector: 'app-produs-edit-list',
  templateUrl: './produs-edit-list.component.html',
  styleUrls: ['./produs-edit-list.component.css']
})
export class ProdusEditListComponent implements OnInit,OnDestroy {
  produse: Produs[];
  subscription: Subscription;
  constructor(private produsService:ProdusService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
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
