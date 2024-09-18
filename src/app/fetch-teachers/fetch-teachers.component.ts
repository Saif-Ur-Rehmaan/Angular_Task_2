import { Component } from '@angular/core';
import { SchoolServiceService } from '../school-service.service'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-teachers',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './fetch-teachers.component.html',
  styleUrl: './fetch-teachers.component.css',
  providers:[SchoolServiceService]
})
export class FetchTeachersComponent {
  teachers:any = [];

  constructor(public SchoolApi: SchoolServiceService) {

  }
  ngOnInit(){
    this.SchoolApi.getTeachers().subscribe((data)=>{
      this.teachers=data;
      console.log('data',data);
    })
    
  }
}
