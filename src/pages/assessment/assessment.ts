import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssessmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html',
})
export class AssessmentPage {

  course: any;
  assessment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.course = navParams.get('course');
    this.assessment = navParams.get('assessment');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentPage');
  }

  enqueue(assessment) {
    assessment.queued = true;
    // Call backend to change db
    //alert("You just entered the queue!");
  }

  dequeue(assessment) {
    assessment.queued = false;
    // Call backend to change db
    //alert("You removed yourself from the queue!");
  }

}
