import { Component } from '@angular/core'; //Decolador

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs903';
  grupo = "IDG903";

  alumno1 = 
  {
    matricula: 123,
    nombre: "Citlalli",
    fechaNacimiento: new Date("2002/06/24"), //se formatea con pipes en el HTML
    pago:123.55
  }
}
