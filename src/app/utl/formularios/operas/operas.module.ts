import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports:[
    OperasBasComponent //necesita exportarse para que funcione con otros componentes y sea reconocido en todo el proyecto
  ]
})
export class OperasModule { }
