import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UsersComponent } from './users.component';
import { TestComponent} from './test/test.component';
import { Test2Component} from './test2/test2.component';
// import { DynamicComponentManifest} from './../dynamic-component-loader/dynamic-component-manifest';

const routes: Routes = [
//  {path: '', redirectTo: 'test', pathMatch: 'full'},
{path: '', component: UsersComponent},
    {   
        path: 'test',
        component: TestComponent
    },
    
    {   
      path: 'test2',
      component: Test2Component
  }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
