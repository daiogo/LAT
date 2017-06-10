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

  queued: boolean;
  available: boolean;
  course: any;
  assessment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.queued = false; // Get data from backend later
    //this.course = NavParams.course;
    //this.assessment = NavParams.assessment;

    this.course = {
      name: "Intro to CS",
      code: "CS101"
    };
    this.assessment = {
      name: "Lab 1"
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentPage');
  }

  enqueue() {
    this.queued = true;
    // Call backend to change db
    alert("You just entered the queue!");
  }

  dequeue() {
    this.queued = false;
    // Call backend to change db
    alert("You removed yourself from the queue!");
  }

}
