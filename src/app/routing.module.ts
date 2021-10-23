import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CocktailsComponent} from "./cocktails/cocktails.component";
import {CocktailShopComponent} from "./cocktail-shop/cocktail-shop.component";
import {LoginComponent} from "./authentication/login/login.component";
import {CocktailDetailComponent} from "./cocktails/cocktail-detail/cocktail-detail.component";
import {ListstartComponent} from "./cocktails/liststart/liststart.component";
import {CocktailEditComponent} from "./cocktails/cocktail-edit/cocktail-edit.component";
import {CocktailsResolverService} from "./cocktails/cocktails-resolver.service";
import {SignupComponent} from "./authentication/signup/signup.component";
import {AuthGuard} from "./authentication/auth.guard";
import {AdminGuard} from "./authentication/admin.guard";
import {ProduseComponent} from "./cocktail-shop/produse/produse.component";
import {HomepageComponent} from "./cocktail-shop/homepage/homepage.component";
import {AdminhubComponent} from "./adminhub/adminhub.component";
import {ProdusAddComponent} from "./cocktail-shop/produse/produs-add/produs-add.component";
import {ProductsResolverService} from "./cocktail-shop/produse/products-resolver.service";
import {ProdusEditComponent} from "./cocktail-shop/produse/produs-edit/produs-edit.component";
import {ProdusDetailComponent} from "./cocktail-shop/produse/produs-edit/produs-detail/produs-detail.component";
import {EditComponent} from "./cocktail-shop/produse/produs-edit/edit/edit.component";
import {CartComponent} from "./cocktail-shop/cart/cart.component";
import {CheckoutComponent} from "./cocktail-shop/checkout/checkout.component";

const routes: Routes= [
  {path:'', redirectTo: '/cocktails',pathMatch:'full'},
  {path: 'cocktails', component: CocktailsComponent,canActivate:[AuthGuard], children: [
      {path:'', component:ListstartComponent},
      {path :'new', component:CocktailEditComponent},
      {path: ':id', component:CocktailDetailComponent, resolve:[CocktailsResolverService] },

      {path :':id/edit', component:CocktailEditComponent, resolve:[CocktailsResolverService]}
    ]},
  {path: 'shop', component: CocktailShopComponent, children:[
      {path:'homepage',component: HomepageComponent},
      {path:'products', component: ProduseComponent},
      {path:'cart',component: CartComponent},
      {path:'checkout',component:CheckoutComponent},
    ]},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'adminhub' ,component: AdminhubComponent,canActivate:[AdminGuard], children:[
      //{path:'',redirectTo:'/shop',pathMatch:'full'},
      {path:'adaugare',component: ProdusAddComponent},
      {path:'editare',component: ProdusEditComponent,children:[
          {path: ':id', component:ProdusDetailComponent, resolve:[ProductsResolverService] },
          {path :':id/edit', component:EditComponent, resolve:[ProductsResolverService]}
        ]}
    ]},


];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class RoutingModule{

}

