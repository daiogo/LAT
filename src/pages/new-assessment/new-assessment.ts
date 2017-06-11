import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstructorCoursePage } from '../instructor-course/instructor-course';

/**
 * Generated class for the NewAssessmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-assessment',
  templateUrl: 'new-assessment.html',
})

export class NewAssessmentPage {

  time: any;
  date: any;
  course: any;
  assessment: any;
  assessmentName: string;
  assessmentDueDate: string;
  assessmentCriteria: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assessmentCriteria = [];
    this.assessmentCriteria.push({});
    this.course = navParams.get('course');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAssessmentPage');
  }

  addCriterion() {
    // Add more input to same page
    this.assessmentCriteria.push({});
  }

  addNewAssessment(course, newAssessment) {
    this.assessment = {
      name: this.assessmentName,
      dueDate: this.assessmentDueDate,
      criteria: this.assessmentCriteria
    }

    this.navCtrl.push(InstructorCoursePage, {
      course: this.course,
      newAssessment: this.assessment
    });
  }

}
