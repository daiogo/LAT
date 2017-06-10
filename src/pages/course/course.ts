import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssessmentPage } from '../assessment/assessment';

/**
 * Generated class for the CoursePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  course: any;
  assessments: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.course = this.navParams.get('course');
    this.assessments = []; // Call for backend later

    this.assessments.push({
      name: "Lab 1",
      queued: false,
      available: true
    });

    this.assessments.push({
      name: "Lab 2",
      queued: false,
      available: true
    });

    this.assessments.push({
      name: "Final project",
      queued: false,
      available: false
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

  assessmentSelected(assessment) {
    this.navCtrl.push(AssessmentPage, {
      course: this.course,
      assessment: assessment
    });
  }

  enqueue(assessment) {
    assessment.queued = true;
    // Call backend to change db
    alert("You just entered the queue!");
  }

  dequeue(assessment) {
    assessment.queued = false;
    // Call backend to change db
    alert("You removed yourself from the queue!");
  }

}
