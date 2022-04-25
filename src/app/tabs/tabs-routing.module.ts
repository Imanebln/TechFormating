import { DashboardPage } from './../dashboard/dashboard.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormationsPage } from '../my-formations/my-formations.page';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'myFormations',
        loadChildren: () =>
          import('../my-formations/my-formations.module').then(
            (m) => m.MyFormationsPageModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
