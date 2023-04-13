import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatTableDataSource } from '@angular/material/table';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'carlos',
      apellido: 'fernan',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'brian',
      apellido: 'vecino',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'ruben',
      apellido: 'sanchez',
      fecha_registro: new Date()
    },
  ];


  displayedColumns: string[] = ['id', 'nombreCompleto','fecha_registro'];
  dataSource: any;

  constructor(private matDialog: MatDialog) {}

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }

}
