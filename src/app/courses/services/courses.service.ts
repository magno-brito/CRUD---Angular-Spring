import { Injectable } from '@angular/core';
import { Course } from './../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap, pipe, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  //endpoint (caminho que vai me levar até o arquivo json com os dados criados)
  private readonly API = 'api/courses';

  //Injeção de dependência
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
        first(),
        delay(1000),
        tap(courses => console.log(courses))

    );
  }
}
