import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkingSheetPage } from '../marking-sheet/marking-sheet';

/**
 * Generated class for the QueuePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html',
})
export class QueuePage {

  course: any;
  assessment: any;
  students: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.course = this.navParams.get('course');
    this.assessment = this.navParams.get('assessment');
    this.students = [];

    this.students.push({
      name: "Diogo Freitas",
      assessed: false
    });

    this.students.push({
      name: "Diego Lee",
      assessed: false
    });

    this.students.push({
      name: "Luis Fernando",
      assessed: false
    });

    this.students.push({
      name: "Tiago Nagy",
      assessed: false
    });

    this.students.push({
      name: "Mauro Zanella",
      assessed: false
    });

    this.students.push({
      name: "Costanza Cascelli",
      assessed: false
    });

    this.students.push({
      name: "Markus Birk",
      assessed: false
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueuePage');
  }

  studentSelected(student) {
    this.navCtrl.push(MarkingSheetPage, {
      course: this.course,
      assessment: this.assessment,
      student: student
    });
  }

}
