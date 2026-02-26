import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from './components/avatar/avatar.component';
import { Avatar1Component } from './components/avatar1/avatar1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Avatar1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase2';
}
