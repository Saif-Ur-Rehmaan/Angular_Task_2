import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchTeachersComponent } from "./fetch-teachers/fetch-teachers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FetchTeachersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
