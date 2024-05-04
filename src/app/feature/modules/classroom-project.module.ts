import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClassroomProjectsComponent} from "../pages";


const routes: Routes = [
  {
    path: '',
    component: ClassroomProjectsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ClassroomProjectModule { }
