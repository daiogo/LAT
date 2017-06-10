import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../course/course';
import { InstructorCoursePage } from '../instructor-course/instructor-course';

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
      name: "Object-oriented programming",
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
      name: "Intro to Business",
      code: "BS101"
    });

  }

  studentCourseSelected(course) {
    this.navCtrl.push(CoursePage, {
      course: course
    });
    //alert(course.name);
  }

  instructorCourseSelected(course) {
    this.navCtrl.push(InstructorCoursePage, {
      course: course
    });
    //alert(course.name);
  }

}