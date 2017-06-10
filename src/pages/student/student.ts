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

  coursesAsStudent: any[];
  coursesAsInstructor: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.coursesAsStudent = [];
    this.coursesAsInstructor = [];
    
    this.coursesAsInstructor.push({
      name: "Intro to CS",
      code: "CS101"
    });

    this.coursesAsInstructor.push({
      name: "Object-oriented Programming",
      code: "CS102"
    });

    this.coursesAsStudent.push({
      name: "Data Structures",
      code: "CS201"
    });

    this.coursesAsStudent.push({
      name: "Algorithms",
      code: "CS202"
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
