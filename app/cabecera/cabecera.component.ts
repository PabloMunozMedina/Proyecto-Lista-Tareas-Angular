import { Component, OnInit } from '@angular/core';
import { ListaNotasService } from '../lista-notas.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  nombre = "";
  descripcion = "";
  lista: ListaNotasService;

  constructor(lista: ListaNotasService) { 
    this.lista = lista;

  };
  anadir(){
    let tarea = {
      nombre: this.nombre ,
      descripcion: this.descripcion,
      fecha: new Date().toLocaleString(),
      prioridad: 1,
      estado: false,
    };

    this.lista.nuevanota(tarea);
  }

  ngOnInit(): void {

  }

}
