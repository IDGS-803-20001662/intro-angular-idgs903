import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component'; //Se importa el modulo y se declara para incluirlo en el html
import { ievnComponent } from './utl/ievn.component';
import { IricComponent } from './utl/iric/iric.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { MenuComponent } from './utl/menu/menu.component';
import { AlumnosFilterPipe } from './utl/alumnos-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IricComponent,
    SumaComponent,
    MenuComponent,
    AlumnosFilterPipe,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Para agregar el uso de formularios
    BrowserAnimationsModule, 
    OperasModule, // se importa el module de Operas para reconocerlo
    ReactiveFormsModule,
    AppRoutingModule //Para gestionar las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
