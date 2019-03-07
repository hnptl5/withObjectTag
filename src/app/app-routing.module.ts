import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApptestComponent } from './apptest/apptest.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test', component: ApptestComponent},
  {  path: 'home/users', 
    loadChildren: './users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
