import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AuthContentComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export default class AppComponent {
  title = 'authentication-frontend';
}
