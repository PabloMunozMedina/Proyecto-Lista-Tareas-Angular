import { Component, OnInit } from '@angular/core';
import { ListaNotasService } from '../lista-notas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  lista : ListaNotasService;

  constructor(listaServicio : ListaNotasService) { 

    this.lista = listaServicio;
  }

  ngOnInit(): void {
    if(localStorage['listaTareas']){
      this.lista.tareas = JSON.parse(localStorage['listaTareas']);
    }
  }

}
