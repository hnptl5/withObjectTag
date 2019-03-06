import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';
// import { UsersComponent } from './users.component';
import { UsersRoutingModule} from './users.route';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { DynamicComponentManifest} from './../dynamic-component-loader/dynamic-component-manifest';
import { UsersComponent } from './users.component';
import { Test2Component } from './test2/test2.component';
// import { RouterModule } from '@angular/router';

//  const manifests: DynamicComponentManifest[] = 

//      [{
//          componentId: 'test',
//          path: 'users/test', // some globally-unique identifier, used internally by the router
//          loadChildren: './../test.module#TestModule'
//     }]
  

@NgModule({
  declarations: [TestComponent, UsersComponent, Test2Component],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DynamicComponentLoaderModule.forChild(UsersComponent)
  ],
  exports: [TestComponent, Test2Component]
})
export class UsersModule {}