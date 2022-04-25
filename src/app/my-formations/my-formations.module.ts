import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFormationsPageRoutingModule } from './my-formations-routing.module';

import { MyFormationsPage } from './my-formations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFormationsPageRoutingModule
  ],
  declarations: [MyFormationsPage]
})
export class MyFormationsPageModule {}
