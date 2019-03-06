import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit} from '@angular/core';
import { DynamicComponentLoader } from './../dynamic-component-loader/dynamic-component-loader.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Injectable, Compiler } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { relative } from 'path';
import {UsersComponent} from './../users/users.component'
import { UsersModule } from '../users/users.module';
import { compileBaseDefFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('testOutlet', { read: ViewContainerRef })
  testOutlet: ViewContainerRef | undefined;

  existingRoutes: BehaviorSubject<Route[]>;

  constructor(private dynamicComponentLoader: DynamicComponentLoader, 
        private route: ActivatedRoute, 
        private router: Router, 
        private compiler: Compiler) { 
    debugger
    this.existingRoutes = new BehaviorSubject<Route[]>(this.routes);
    this.createAndRegisterRoute();
    // this.loadComponent("users");
  }

  // ngOnInit() {
  //   this.loadComponent("users");
  // }

  // ngAfterViewInit (){
  //   this.loadComponent('users');
  // }

  loadComponent(url:any) {
    let self=this;
    this.dynamicComponentLoader
      .getComponentFactory(url)
      .subscribe({
        next: componentFactory => {
          if (!this.testOutlet) {
            return;
          }

          const ref = this.testOutlet.createComponent(componentFactory);
          ref.changeDetectorRef.detectChanges();
          // this.createAndRegisterRoute();
          // this.router.navigate(["users"], {relativeTo: self.route})
        },
        error: err => {
          console.warn(err);
        }
      });
  }

    private get routes(): Route[]{
        var routesToReturn = this.router.config;
        return routesToReturn.filter(x => x.path !== "");
    }

    createAndRegisterRoute() {
        let route: Route = { 
            path: 'home',
            component: HomeComponent,
            children: [{path: 'users', 
            loadChildren: './../users/users.module#UsersModule'
            }]
          }

        this.registerRoute(route);
    }

    routeIsRegistered(path: string) {
        return this.router.config.filter(r => r.path === path).length > 0;
    }

    registerRoute(route: Route){
        if(this.routeIsRegistered(route.path)) {
          this.unRegisterRoute(route.path);
        }

        this.router.config.push(route);
        this.updateRouteConfig(this.router.config);
    }

    unRegisterRoute(path: string){
        console.log("Unregister", path);
        this.updateRouteConfig(this.router.config.filter(route => route.path !== path));
    }    

    private updateRouteConfig(config) {
        this.router.resetConfig(config);
        this.existingRoutes.next(this.routes);
    }

}
