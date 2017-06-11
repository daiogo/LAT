import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoursePage } from '../pages/course/course';
import { AssessmentPage } from '../pages/assessment/assessment';
import { InstructorCoursePage } from '../pages/instructor-course/instructor-course';
import { NewAssessmentPage } from '../pages/new-assessment/new-assessment';
import { InstructorAssessmentPage } from '../pages/instructor-assessment/instructor-assessment';
import { QueuePage } from '../pages/queue/queue';
import { MarkingSheetPage } from '../pages/marking-sheet/marking-sheet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursePage,
    InstructorCoursePage,
    NewAssessmentPage,
    InstructorAssessmentPage,
    AssessmentPage,
    QueuePage,
    MarkingSheetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursePage,
    InstructorCoursePage,
    NewAssessmentPage,
    InstructorAssessmentPage,
    AssessmentPage,
    QueuePage,
    MarkingSheetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
