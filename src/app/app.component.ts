import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { faCarCrash,faHeart,faBuilding,faPhone,faEnvelope,faHome,faTruck,faHeartbeat,faBriefcaseMedical,faCheck  } from '@fortawesome/free-solid-svg-icons';


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
  faCheck = faCheck


  closeModal() {
    
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "none";

  }


  openModal() {
    // Get the modal
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "block";
      
   console.log("algo")

   
  }

  enviarCotizacion(){
    console.log("hola")
  }
 
}


