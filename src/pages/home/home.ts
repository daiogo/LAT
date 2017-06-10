import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../course/course';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coursesAsStudent: any[];
  coursesAsInstructor: any[];

  constructor(public navCtrl: NavController) {

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
  
    this.coursesAsStudent.push({
      name: "Electric Circuits",
      code: "EE201"
    });

    this.coursesAsStudent.push({
      name: "Analogue Electronics",
      code: "EE203"
    });

  }

  studentCourseSelected(course) {
    this.navCtrl.push(CoursePage, {
      course: course
    });
    //alert(course.name);
  }

  instructorCourseSelected(course) {
    this.navCtrl.push(CoursePage, {
      course: course
    });
    //alert(course.name);
  }

}