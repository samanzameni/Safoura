import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RelatedCoursesComponent } from './pages/related-courses/related-courses.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ClassroomProjectsComponent } from './pages/classroom-projects/classroom-projects.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ConferencesComponent } from './pages/conferences/conferences.component';
import { LanguageProficiencyComponent } from './pages/language-proficiency/language-proficiency.component';
import { ReferencesComponent } from './pages/references/references.component';






@NgModule({
  declarations: [
  
  
    RelatedCoursesComponent,
           SkillsComponent,
           ClassroomProjectsComponent,
           PublicationsComponent,
           WorkshopsComponent,
           ConferencesComponent,
           LanguageProficiencyComponent,
           ReferencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FeatureModule { }
