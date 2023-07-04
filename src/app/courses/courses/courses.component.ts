import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatIconModule} from '@angular/material/icon';



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

   constructor(private coursesService: CoursesService ,
    public dialog: MatDialog ) {
    this.courses = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos!');
        return of([])
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
   }

  ngOnInit() : void {
    //this.coursesService = new CoursesService();
    //this.courses = this.coursesService.list();
  }

}
