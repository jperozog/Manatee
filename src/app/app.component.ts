import { Component } from '@angular/core';
import { faCarCrash,faHeart,faBuilding,faPhone,faEnvelope,faHome,faTruck,faHeartbeat,faBriefcaseMedical  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manatee';
  faCarCrash = faCarCrash;
  faHeart = faHeart;
  faHeartbeat = faHeartbeat;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHome = faHome
  faTruck=faTruck
  faBriefcaseMedical = faBriefcaseMedical
 
}
