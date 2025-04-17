import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HackathonResultsComponent } from './landing/hackathon-results/hackathon-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, HackathonResultsComponent],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'landing-page-app';
}
