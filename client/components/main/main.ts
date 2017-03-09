import {Component, provide} from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES, RouterLink, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {HomeComponent} from '../home/home';
import {LoginComponent} from '../login/login';
import {RegisterComponent} from '../register/register';
import {AdminComponent} from '../admin/admin';
import {UsersComponent} from '../users/users';

@RouteConfig([
  {path: '/admin/...', component: AdminComponent, name: 'AdminCmp' },
  {path: '/home', component: HomeComponent, name: 'HomeCmp' },
  {path: '/login', component: LoginComponent, name: 'LoginCmp' },
  {path: '/register', component: RegisterComponent, name: 'RegCmp' },
  {path: '/users/...', component: UsersComponent, name: 'UsersCmp' }

])

@Component({
  selector: 'main-app',
  template:` 
      <center><h1>Employee Directory</h1>
      <a [routerLink]="['AdminCmp']">Enter Directory</a>
      <hr><br>
    <router-outlet></router-outlet></center>
  `,
  directives: [ROUTER_DIRECTIVES, RouterLink]
})

export class MainComponent{
}
