import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { faCarCrash,faHeart,faBuilding,faPhone,faEnvelope,faHome,faTruck,faUserMd,faTooth,faCheck,faHardHat  } from '@fortawesome/free-solid-svg-icons';
import {datos} from './models/datos'
import {EnviocorreoService} from './services/enviocorreo.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manatee';
  faCarCrash = faCarCrash;
  faHeart = faHeart;
  faHeartbeat = faUserMd;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHome = faHome
  faTruck=faTruck
  faBriefcaseMedical = faTooth
  faCheck = faCheck
  faHardHat = faHardHat

  datos: datos = {
    nombre:"",
    apellido:"",
    telefono:"",
    correo:"",
    codigopostal:"",
  }

  constructor(private enviocorreoService :EnviocorreoService ) { }


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
   
   
    this.enviocorreoService.enviarDatosCotizacion(this.datos).subscribe(
      res => {
        console.log(res),
        Swal.fire(
          'Datos Enviados',
          'Sus datos fueron enviados Correctamente!',
          'success'
        ),
        this.closeModal()
      }, err => console.log(err))


    this.datos = {
      nombre:"",
      apellido:"",
      telefono:"",
      correo:"",
      codigopostal:""
    }
    
  }
 
}


