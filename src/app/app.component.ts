import { Component } from '@angular/core';
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manatee';
  faCarCrash = faCarCrash;
  faUserInjured = faUserInjured;
  faBuilding = faBuilding;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
