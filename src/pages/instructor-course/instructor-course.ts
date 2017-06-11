import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewAssessmentPage } from '../new-assessment/new-assessment';
import { InstructorAssessmentPage } from '../instructor-assessment/instructor-assessment';

/**
 * Generated class for the InstructorCoursePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-instructor-course',
  templateUrl: 'instructor-course.html',
})
export class InstructorCoursePage {

  course: any;
  assessments: any[];
  newAssessment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.newAssessment = {};
    this.course = this.navParams.get('course');

    this.assessments = []; // Call for backend later

    // Test dummy data
    this.assessments.push({
      name: "Lab 1",
      dueDate: "2017-06-11",
      enabled: true
    });

    this.assessments.push({
      name: "Lab 2",
      dueDate: "2017-07-04",
      enabled: false
    });

    this.assessments.push({
      name: "Final project",
      dueDate: "2017-09-12",
      enabled: false
    });

    if (this.navParams.get('newAssessment') != false) {
      this.newAssessment = this.navParams.get('newAssessment');
      this.assessments.push({
        name: this.newAssessment.name,
        dueDate: this.newAssessment.dueDate,
        enabled: false
      });
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructorCoursePage');
  }

  addNewAssessment(course) {
    this.navCtrl.push(NewAssessmentPage, {
      course: course
    });
  }

  instructorAssessmentSelected(assessment) {
    this.navCtrl.push(InstructorAssessmentPage, {
      course: this.course,
      assessment: assessment
    });
  }

  enableQueue(assessment) {
    assessment.enabled = true;
    // Call backend to change db
    //alert("You just enabled the queue!");
  }

  disableQueue(assessment) {
    assessment.enabled = false;
    // Call backend to change db
    //alert("You just disabled the queue!");
  }
}
