import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component'

// Services 
import {CourseServiceService} from './course-service.service';
import {AuthorsrsService} from './authorsrs.service';
import { AutoGrewDirective } from './auto-grew.directive';
import { ChangeColorDirective } from './change-color.directive';



@NgModule({
  declarations: [AppComponent,AutoGrewDirective,CourseComponent, AuthorsComponent, ChangeColorDirective ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseServiceService , AuthorsrsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
