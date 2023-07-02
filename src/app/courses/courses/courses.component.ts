import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  public courses: Observable<Course[]>;
  displayedColumns = ['name','category']

  // coursesService!: CoursesService;
   //Tive problema ao iniciar CoursesService. Colocando ! resolve o problema

   constructor(private coursesService: CoursesService ) {
    this.courses = this.coursesService.list();
   }

  ngOnInit() : void {
    //this.coursesService = new CoursesService();
    //this.courses = this.coursesService.list();
  }

}
