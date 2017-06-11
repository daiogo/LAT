import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QueuePage } from '../queue/queue';

/**
 * Generated class for the InstructorAssessmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-instructor-assessment',
  templateUrl: 'instructor-assessment.html',
})
export class InstructorAssessmentPage {

  course: any;
  assessment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.course = navParams.get('course');
    this.assessment = navParams.get('assessment');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstructorAssessmentPage');
  }

  viewQueue(assessment) {
    this.navCtrl.push(QueuePage, {
      course: this.course,
      assessment: assessment
    });
    //alert(course.name);
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
