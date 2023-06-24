import { Component } from '@angular/core'; //Importación necesaria para los decoradores

@Component({
    selector: 'app-grupo', //alias para referenciar el componente
    template:'<h1>Hola grupos IDGS</h1>' //TEMPLATE -> html personalizado, TEMPLATEURL -> plantilla de html
})
export class idgsComponent { //export para ser usada en otros lados
    constructor(){}
}