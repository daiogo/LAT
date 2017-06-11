import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QueuePage } from '../queue/queue';

/**
 * Generated class for the MarkingSheetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-marking-sheet',
  templateUrl: 'marking-sheet.html',
})
export class MarkingSheetPage {

  criteria: any[];
  average: number;
  ace: number;
  student: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.student = this.navParams.get('student');

    this.average = 0;
    
    this.criteria = [];

    this.criteria.push({
      name: "Requirements",
      marksAwarded: 0,
      marksPossible: 10
    });

    this.criteria.push({
      name: "Design",
      marksAwarded: 0,
      marksPossible: 10
    });

    this.criteria.push({
      name: "Implementation",
      marksAwarded: 0,
      marksPossible: 10
    });

    this.criteria.push({
      name: "Tests",
      marksAwarded: 0,
      marksPossible: 10
    });

    // Calculates highest grade possible
    this.ace = 0;
    for (let criterion of this.criteria) {
      this.ace += criterion.marksPossible;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkingSheetPage');
  }

  onChange() {
    // Calculates final grade
    this.average = 0;
    for (let criterion of this.criteria) {
      this.average += parseInt(criterion.marksAwarded);
    }
  }

  submitAssessment() {
    this.navCtrl.push(QueuePage, {});
  }

}
