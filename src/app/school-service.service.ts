import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolServiceService {
  private Url: string ="https://localhost:7211/";
  
  constructor(private http:HttpClient) { 

     
  }
  getTeachers(){
    return this.http.get(this.Url)
  }
}
