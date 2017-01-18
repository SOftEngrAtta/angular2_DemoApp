import { Component, OnInit } from '@angular/core';
import {AuthorsrsService} from '../authorsrs.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  mainHeading  : string = "Authors";
  subHeadingTitle : string = "Title for the author page";
  authorArrayData : string[];
  constructor(authorService : AuthorsrsService){
    this.authorArrayData = authorService.getAuthorServiceArray();
   }

  ngOnInit() {
  }

}
