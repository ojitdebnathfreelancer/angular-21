import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { User } from './components/user/user';
import { Dashboard } from './components/dashboard/dashboard';
import { NotFound } from './components/not-found/not-found';
import { Login } from './components/login/login';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { Layout } from './components/layout/layout';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'dashboard/databinding',
        component: DataBinding,
        canActivate: [authGuard],
      },
      {
        path: 'dashboard/signal',
        component: Signal,
      },
      {
        path: 'dashboard/variables',
        component: Variables,
      },
      {
        path: 'dashboard/user',
        component: User,
      },
      {
        path: 'dashboard/control-flow',
        component: ControlFlow,
      },
      {
        path: 'dashboard/dynamic-css-class',
        component: DynamicCssClass,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
