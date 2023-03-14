import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <img [src]="imageUrl" class="w-100"/>
      <br/>
      <br/>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li *ngFor="let course of courses" class="list-group-item">{{ course }}</li>
        </ul>
      </div>
      <br/>
      <br/>
      <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
        </tr>
      </table>
    </div>
  `
})

export class CoursesComponent {
    title = 'List of Courses';
    imageUrl = 'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates-800x500.jpg'
    colSpan = 2;
    courses;

    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
}
