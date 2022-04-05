import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { progressBarAmination } from './animations/progress-bar.animation';
import { routeAnimations } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations, progressBarAmination]
})
export class AppComponent {
  title = 'example';
  width = 0;
  progressBarState = false;

  loading() {
    this.progressBarState = !this.progressBarState;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.['animation'];
  }
}
