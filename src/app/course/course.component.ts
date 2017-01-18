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
  imgUrl : string = "https://static.pexels.com/photos/27714/pexels-photo-27714.jpg";
  courses : string[];
  // Service Dependency inject in constructor 
  constructor(courseService : CourseServiceService) { 
   
    this.courses = courseService.getCourseArray(); //Service Data Bind here 
  }

  clickDivFunction(){
    console.log('div function call');
  }
  clickButtonFunction($event){
    $event.stopPropagation();
    console.log("button function call");
  }
  ngOnInit() {
  }
}
