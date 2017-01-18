import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../course-service.service';
import { AutoGrewDirective } from './../auto-grew.directive';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  coursesheading : string = "Courses";
  courseSubTile : string = "The title of course page";
  courses : string[];
  // Service Dependency inject in constructor 
  constructor(courseService : CourseServiceService) { 
   
    this.courses = courseService.getCourseArray(); //Service Data Bind here 
  }
  ngOnInit() {
  }
}
