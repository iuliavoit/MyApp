import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CocktailsService} from "../../../../cocktails/cocktails.service";
import {ProdusService} from "../../produs.service";
import {produsDataStorageService} from "../../../../shared/produsData-storage.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number;
  editMode=false;
  produsForm: FormGroup;

  constructor(private route: ActivatedRoute, private produsService: ProdusService,private router:Router,private dataStorage:produsDataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id= +params['id'];
        this.editMode= params['id'] !=null;

        this.initForm();
      }

    );
  }

  private initForm() {

    let produsName = '';
    let produsPoza = '';
    let produsPret=0;
    let produsCategorie='';
   let produsCantitate=1;
    if (this.editMode) {
      const produs = this.produsService.getSingleProduct(this.id);
      produsName = produs.nume;
      produsPoza = produs.poza;
      produsPret=produs.pret;
      produsCategorie=produs.categorie;
      produsCantitate=produs.cantitate;

    }

    this.produsForm = new FormGroup({
      'nume': new FormControl(produsName, Validators.required),
      'poza': new FormControl(produsPoza, Validators.required),
      'pret': new FormControl(produsPret, Validators.required),
      'categorie': new FormControl(produsCategorie, Validators.required),
      'cantitate':new FormControl(produsCantitate)
    });
  }

  onSave() {
    this.produsService.editProduct(this.id,this.produsForm.value);
    this.onCancelAndSave();
  }

  onCancelAndSave() {
    this.dataStorage.storeProduse();
    this.router.navigate(['../'], {relativeTo:this.route});
  }
}
