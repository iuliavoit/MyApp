import {Component, OnDestroy, OnInit} from '@angular/core';
import {cocktailDataStorageService} from "../shared/cocktailData-storage.service";
import {AuthService} from "../authentication/auth.service";
import {Subscription} from "rxjs";
@Component({
  templateUrl: './header.component.html',
  selector:'app-header',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit,OnDestroy{
  private userSub:Subscription;
  isLogged=false;

  constructor(private dataStorage:cocktailDataStorageService, private authService:AuthService){

  }
  ngOnInit() {
    this.userSub=this.authService.user.subscribe(user=>{
        this.isLogged=!user ? false:true;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


  onSaveData() {
    this.dataStorage.storeCocktails();
  }

  onFetchData() {
    this.dataStorage.fetchCocktails().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
