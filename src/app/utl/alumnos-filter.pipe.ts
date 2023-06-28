import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnos } from './alumnos';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  //vamos a ingresar un string y vamos a regresar un arreglo de alumnos
  //FUNCIÓN DE FILTRADO, SI EXISTE UNA COINCIDENCIA RETORNA LOS FILTRADOS, SI NO, NO TRAE NADA
  transform(value: IAlumnos[], args: string): IAlumnos[] {
    let filter:string = args? args.toLocaleLowerCase():'';
    return filter? value.filter((alumno:IAlumnos) =>
    alumno.nombre.toLocaleLowerCase().indexOf(filter) !=-1):value
  }

}
