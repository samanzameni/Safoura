import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { WorkshopsComponent} from "../pages";


const routes: Routes = [
  {
    path: '',
    component: WorkshopsComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class WorkshopsModule { }
