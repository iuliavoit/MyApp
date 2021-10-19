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

const routes: Routes= [
  {path:'', redirectTo: '/cocktails',pathMatch:'full'},
  {path: 'cocktails', component: CocktailsComponent,canActivate:[AuthGuard], children: [
      {path:'', component:ListstartComponent},
      {path :'new', component:CocktailEditComponent},
      {path: ':id', component:CocktailDetailComponent, resolve:[CocktailsResolverService] },

      {path :':id/edit', component:CocktailEditComponent, resolve:[CocktailsResolverService]}
    ]},
  {path: 'shop', component: CocktailShopComponent, children:[

    ]},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent}


];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class RoutingModule{

}

