import { Component } from '@angular/core';
// import { DynamicComponentLoader } from './../dynamic-component-loader/dynamic-component-loader.service';
// import { Router, ActivatedRoute, Route } from '@angular/router';
// import { Injectable, Compiler } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {


  constructor(){
        console.log('component has been loaded');
  }

  // ngOnInit() {
  //   // this.loadComponent(this.route.url);
  // }

  // ngAfterViewInit (){
  //   this.loadComponent('users');
  // }
}
