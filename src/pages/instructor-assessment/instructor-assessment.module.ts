import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructorAssessmentPage } from './instructor-assessment';

@NgModule({
  declarations: [
    InstructorAssessmentPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructorAssessmentPage),
  ],
  exports: [
    InstructorAssessmentPage
  ]
})
export class InstructorAssessmentPageModule {}
