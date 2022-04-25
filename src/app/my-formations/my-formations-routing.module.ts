import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFormationsPage } from './my-formations.page';

const routes: Routes = [
  {
    path: '',
    component: MyFormationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFormationsPageRoutingModule {}
