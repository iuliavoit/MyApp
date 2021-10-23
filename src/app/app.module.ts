import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClickOutsideModule } from 'ng-click-outside';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

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
import {LoadingGifComponent} from "./shared/loading-gif/loading-gif.component";
import {AuthInterceptorService} from "./authentication/auth-interceptor.service";
import { ProduseComponent } from './cocktail-shop/produse/produse.component';
import { FooterComponent } from './cocktail-shop/footer/footer.component';
import { ShopHeaderComponent } from './cocktail-shop/shop-header/shop-header.component';
import {CarouselComponent} from "./cocktail-shop/carousel/carousel.component";
import { HomepageComponent } from './cocktail-shop/homepage/homepage.component';
import { ProduseListComponent} from "./cocktail-shop/produse/produse-list/produse-list.component";
import { ProduseItemComponent } from './cocktail-shop/produse/produse-item/produse-item.component';
import {produsDataStorageService} from "./shared/produsData-storage.service";
import {ProdusService} from "./cocktail-shop/produse/produs.service";
import { AdminhubComponent } from './adminhub/adminhub.component';
import { ProdusAddComponent } from './cocktail-shop/produse/produs-add/produs-add.component';
import { ProdusEditComponent } from './cocktail-shop/produse/produs-edit/produs-edit.component';
import { ProdusEditListComponent } from './cocktail-shop/produse/produs-edit/produs-edit-list/produs-edit-list.component';
import { ProdusEditListItemComponent } from './cocktail-shop/produse/produs-edit/produs-edit-list/produs-edit-list-item/produs-edit-list-item.component';
import { ProdusDetailComponent } from './cocktail-shop/produse/produs-edit/produs-detail/produs-detail.component';
import { EditComponent } from './cocktail-shop/produse/produs-edit/edit/edit.component';
import { AlertComponent } from './shared/alert/alert.component';
import { CartComponent } from './cocktail-shop/cart/cart.component';
import {CartDataStorageService} from "./shared/cartData-Storage.service";
import { CheckoutComponent } from './cocktail-shop/checkout/checkout.component';
import {CartService} from "./cocktail-shop/cart/cart.service";


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
    SignupComponent,
    LoadingGifComponent,
    ProduseComponent,
    FooterComponent,
    ShopHeaderComponent,
    CarouselComponent,
    HomepageComponent,
    ProduseListComponent,
    ProduseItemComponent,
    AdminhubComponent,
    ProdusAddComponent,
    ProdusEditComponent,
    ProdusEditListComponent,
    ProdusEditListItemComponent,
    ProdusDetailComponent,
    EditComponent,
    AlertComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule,
    NgbModule

  ],
  providers: [CocktailsService,cocktailDataStorageService, ProdusService, CartDataStorageService, CartService, produsDataStorageService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
