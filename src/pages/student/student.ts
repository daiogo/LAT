import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursePage } from '../course/course';

/**
 * Generated class for the StudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  courses: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.courses = [];
    
    this.courses.push({
      name: "Intro to CS",
      code: "CS101"
    });

    this.courses.push({
      name: "Object-oriented Programming",
      code: "CS102"
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  itemSelected(course) {
    this.navCtrl.push(CoursePage, {
      course: course
    });
    //alert(course.name);
  }
}
