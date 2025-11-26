import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { User } from './components/user/user';
import { Dashboard } from './components/dashboard/dashboard';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'variables',
    component: Variables,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: '**',
    component: NotFound,
  },
];
