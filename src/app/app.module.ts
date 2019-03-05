import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { UsersComponent } from './users/users.component';

import {
  DynamicComponentLoaderModule,
  DynamicComponentManifest
} from './dynamic-component-loader/dynamic-component-loader.module';
import { TestComponent } from './test/test.component';

const manifests: DynamicComponentManifest[] = [
  {
    componentId: 'users',
    path: 'users', // some globally-unique identifier, used internally by the router
    loadChildren: './users/users.module#UsersModule'
  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //TestComponent
    //UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicComponentLoaderModule.forRoot(manifests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
