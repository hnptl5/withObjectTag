import { BrowserModule } from '@angular/platform-browser';
import { NgModule , OnInit} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { UsersComponent } from './users/users.component';

import {
  DynamicComponentLoaderModule,
  DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';
// import { TestComponent } from './test/test.component';
import { Router } from '@angular/router';
// import { Test2Component } from './test2/test2.component';
import { ApptestComponent } from './apptest/apptest.component';
import { UsersModule } from './users/users.module';


const manifests: DynamicComponentManifest[] = 
  [{
    componentId: 'users',
    path: 'users', // some globally-unique identifier, used internally by the router
    loadChildren: './users/users.module#UsersModule'
  }];
  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApptestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicComponentLoaderModule.forRoot(manifests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  implements OnInit{ 

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    console.log("Loading module");
    // this.loadModule();
 }
 
 loadModule() {
  this.router.resetConfig([
    ...this.router.config,
    {
        path: 'home/users',
        loadChildren: './users.module#UsersModule'
    }
  ]);

  // this.router.navigateByUrl('users/test');
}
  
}

