import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClickOutsideModule } from 'ng-click-outside';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailListComponent } from './cocktails/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktails/cocktail-detail/cocktail-detail.component';
import { CocktailItemComponent } from './cocktails/cocktail-list/cocktail-item/cocktail-item.component';
import { CocktailShopComponent } from './cocktail-shop/cocktail-shop.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {RoutingModule} from "./routing.module";
import {ListstartComponent} from "./cocktails/liststart/liststart.component";
import {CocktailEditComponent} from './cocktails/cocktail-edit/cocktail-edit.component';
import {CocktailsService} from "./cocktails/cocktails.service";
import {cocktailDataStorageService} from "./shared/cocktailData-storage.service";
import {LoginComponent} from "./authentication/login/login.component";
import {SignupComponent} from "./authentication/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    CocktailItemComponent,
    CocktailShopComponent,
    DropdownDirective,
    ListstartComponent,
    CocktailEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule

  ],
  providers: [CocktailsService,cocktailDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
