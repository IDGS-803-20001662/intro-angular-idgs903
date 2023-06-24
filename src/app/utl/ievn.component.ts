import { Component } from '@angular/core'; //Importación necesaria para los decoradores

@Component({
    selector: 'app-ievn', //alias para referenciar el componente
    template:'<h1>Saludo desde IEVN</h1>',
    styleUrls: ['../app.component.css']
})
export class ievnComponent { //export para ser usada en otros lados
    constructor(){}
}