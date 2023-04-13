import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { NombreCompletoPipe } from './nombre-completo.pipe';



@NgModule({
  declarations:[NombreCompletoPipe ],
  imports: [
    CommonModule
  ],
  exports:[
    NombreCompletoPipe
  ]
})
export class PipesModule { }
