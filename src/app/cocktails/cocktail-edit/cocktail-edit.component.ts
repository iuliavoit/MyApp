import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CocktailsService} from "../cocktails.service";
import {Cocktail} from "../cocktail.model";
import {cocktailDataStorageService} from "../../shared/cocktailData-storage.service";

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  id:number;
  editMode=false;
  cocktailForm: FormGroup;

  constructor(private route: ActivatedRoute, private cocktailService: CocktailsService,private router:Router,private dataStorage:cocktailDataStorageService) { }

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

    let cocktailName = '';
    let cocktailPoza = '';
    let cocktailIngrediente = new FormArray([]);

    if (this.editMode) {
      const cocktail = this.cocktailService.getSingleCocktail(this.id);
      cocktailName = cocktail.nume;
      cocktailPoza = cocktail.poza;
      if (cocktail['ingrediente']) {
        for (let ingredient of cocktail.ingrediente) {
          cocktailIngrediente.push(new FormGroup({
            'name':new FormControl(ingredient.name)
            })


            );
        }

      }
    }

      this.cocktailForm = new FormGroup({
        'nume': new FormControl(cocktailName, Validators.required),
        'poza': new FormControl(cocktailPoza, Validators.required),
        'ingrediente': cocktailIngrediente
      });
    }

    onSave()
    {

      if(this.editMode){
        this.cocktailService.editCocktail(this.id,this.cocktailForm.value)
        this.dataStorage.storeCocktails();
      }else{
        this.cocktailService.addCocktail(this.cocktailForm.value);
        this.dataStorage.storeCocktails();
      }

      this.onCancelAndSave();
    }

  onDeleteIngredient(index: number) {
    (<FormArray>this.cocktailForm.get('ingrediente')).removeAt(index);
  }


  get
    controls()
    {
      return (<FormArray>this.cocktailForm.get('ingrediente')).controls;
    }
    onAddIngredient(){
      (<FormArray>this.cocktailForm.get('ingrediente')).push
      (new FormGroup({
        'name':new FormControl(null)
      })
      );
    }

  onCancelAndSave() {
    this.router.navigate(['../'], {relativeTo:this.route});
  }
}
