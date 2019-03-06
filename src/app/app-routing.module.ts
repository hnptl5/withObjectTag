import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UsersComponent } from './users/users.component';
import { ApptestComponent } from './apptest/apptest.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test', component: ApptestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
