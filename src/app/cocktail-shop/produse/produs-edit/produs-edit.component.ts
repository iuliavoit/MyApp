import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProdusService} from "../produs.service";
import {produsDataStorageService} from "../../../shared/produsData-storage.service";

@Component({
  selector: 'app-produs-edit',
  templateUrl: './produs-edit.component.html',
  styleUrls: ['./produs-edit.component.css']
})
export class ProdusEditComponent implements OnInit {

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

    if (this.editMode) {
      const produs = this.produsService.getSingleProduct(this.id);
      produsName = produs.name;
      produsPoza = produs.picture;
      produsPret=produs.price;
      produsCategorie=produs.category;

    }

    this.produsForm = new FormGroup({
      'nume': new FormControl(produsName, Validators.required),
      'poza': new FormControl(produsPoza, Validators.required),
      'pret':new FormControl(produsPret,Validators.required),
      'categorie':new FormControl(produsCategorie,Validators.required),
    });
  }
  onSave()
  {

    if(this.editMode){
      this.produsService.editProduct(this.id,this.produsForm.value)
    }else{
      this.produsService.addProduct(this.produsForm.value);
    }

    this.onCancelAndSave();
  }

  onCancelAndSave() {
    this.dataStorage.storeProduse();
    this.router.navigate(['/adminhub'], {relativeTo:this.route});
  }
}
