import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from './components/avatar/avatar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase2';
}
