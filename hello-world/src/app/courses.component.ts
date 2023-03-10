import { CoursesService } from './course/courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <div class="container">
      <h2>{{ title }}</h2>
      <img [src]="imageUrl" class="w-100"/>
      <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
      </ul>
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
