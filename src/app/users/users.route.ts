import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UsersComponent } from './users.component';
import { TestComponent} from './../test/test.component';

const routes: Routes = [
  {path: '', component: UsersComponent, children:[,
  {path: '/test', component: TestComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
