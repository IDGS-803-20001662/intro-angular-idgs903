import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./utl/iric/iric.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";

const routes:Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'IRIC', component: IricComponent},
    {path: 'Formulario', component: AlumnoReactiveComponent},
    /*{path: '**', component: PageNotFoundComponent},*/

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}