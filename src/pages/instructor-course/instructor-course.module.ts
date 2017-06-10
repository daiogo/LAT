import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructorCoursePage } from './instructor-course';

@NgModule({
  declarations: [
    InstructorCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(InstructorCoursePage),
  ],
  exports: [
    InstructorCoursePage
  ]
})
export class InstructorCoursePageModule {}
