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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkingSheetPage');
  }

  submitAssessment() {
    this.navCtrl.push(QueuePage, {});
    //alert(course.name);
  }

}
