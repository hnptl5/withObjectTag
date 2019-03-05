import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../dynamic-component-loader/dynamic-component-loader.module';
import { UsersComponent } from './users.component';
import { UsersRoutingModule} from './users.route';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';

@NgModule({
  declarations: [UsersComponent, TestComponent],
  imports: [DynamicComponentLoaderModule.forChild(UsersComponent)]
})
export class UsersModule {}