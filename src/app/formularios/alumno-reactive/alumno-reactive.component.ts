import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!:FormGroup;
  mat!:number;
  nombre!:string;
  edad!:number;
  correo!:string;
  pago!:number;
  foto!:string;
  calif!:number;

  constructor(private readonly fb: FormBuilder)
  {
    this.alumnoForm = this.initForm();
  }

  onSubmit():void
  {
    console.log('Form-> ', this.alumnoForm.value)
    this.obtenerValores();
  }
  
  obtenerValores():void
  {
    this.mat = this.alumnoForm.get('matricula')?.value;
    this.nombre = this.alumnoForm.get('nombre')?.value;
    this.edad = this.alumnoForm.get('edad')?.value;
    this.correo = this.alumnoForm.get('correo')?.value;
    this.pago = this.alumnoForm.get('pago')?.value;
    this.foto = this.alumnoForm.get('foto')?.value;
    this.calif = this.alumnoForm.get('calif')?.value;
    console.log('Matricula -> ', this.mat);
    console.log('Nombre -> ', this.nombre);

  }

  initForm():FormGroup
  {
    return this.fb.group
    ({
      matricula:['', [Validators.required]],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      edad:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      correo:[''],
      pago:[''],
      foto:[''],
      calif:['']
    })
  }

}
