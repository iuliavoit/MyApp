import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CocktailsService} from "../cocktails/cocktails.service";
import {Cocktail} from "../cocktails/cocktail.model";
import {exhaust, exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../authentication/auth.service";


@Injectable({ providedIn: 'root' })
export class cocktailDataStorageService{


  constructor(private http:HttpClient, private cocktailsService:CocktailsService, private authService:AuthService) {
  }

  storeCocktails(){
    const cocktails=this.cocktailsService.getCocktails();
    this.http.put('https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/cocktails.json',cocktails)
      .subscribe(response=>{console.log(response)});
  }

  fetchCocktails(){
    return this.http
      .get<Cocktail[]>(
        'https://proiect-pw-b77a3-default-rtdb.europe-west1.firebasedatabase.app/cocktails.json'
      )
      .pipe(
        map(cocktails => {
          return cocktails.map(cocktail => {
            return {
              ...cocktail,
              ingredients: cocktail.ingrediente ? cocktail.ingrediente : []
            };
          });
        }),
        tap(cocktails => {
          this.cocktailsService.setCocktails(cocktails);
        })
      );
  }


}
