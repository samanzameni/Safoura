import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LanguageProficiencyComponent} from "../pages";


const routes: Routes = [
  {
    path: '',
    component: LanguageProficiencyComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LanguageProficiencyModule { }
