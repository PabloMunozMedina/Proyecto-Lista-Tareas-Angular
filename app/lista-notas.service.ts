import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaNotasService {
  tareas = new Array();
  constructor() { }

  nuevanota(tareaNueva:any){
    this.tareas.push(tareaNueva);
    this.actualizarListaLocal();
  };

  actualizarListaLocal()
  {
    localStorage.setItem('listaTareas',JSON.stringify(this.tareas));
  };

  ordenarPrioridad(){
    this.tareas = this.tareas.sort( (a, b) => {
      if (a.prioridad < b.prioridad) {
        return -1;
      } else if (a.prioridad > b.prioridad) {
        return 1;
      } else {
        return 0;
      }
    });
    this.actualizarListaLocal();
  }

  desPrioridad(index:any){
    if(this.tareas[index].prioridad < 3){
      this.tareas[index].prioridad++;
    }
    this.ordenarPrioridad();
  }

  aumPrioridad(index:any){
    if(this.tareas[index].prioridad > 1){
      this.tareas[index].prioridad--;
    }
    this.ordenarPrioridad();
  }

  borrar_tarea(index:any){
    this.tareas.splice(index, 1);
    this.actualizarListaLocal();
  }

  borrar_tareas_completadas(){
    this.tareas = JSON.parse(localStorage['listaTareas']);

      let completadas = new Array;
      this.tareas.forEach(tarea => {
          if (!tarea.estado) {
              completadas.push(tarea);
          }
      });
      this.tareas = completadas;
      this.actualizarListaLocal();

  }

  mostrarCompletadas() { // Muestra solo las tareas que tengan estado == true (completadas)
    this.tareas = JSON.parse(localStorage['listaTareas']);

    let completadas = new Array;
    this.tareas.forEach(tarea => {
        if (tarea.estado) {
            completadas.push(tarea);
        }
        this.tareas = completadas;
    });

  }

  mostrarNoCompletadas() { // Muestra solo las tareas que tenas esta == false(no completadas)
    this.tareas = JSON.parse(localStorage['listaTareas']);

      let noCompletadas = new Array;
      this.tareas.forEach(tarea => {
          if (!tarea.estado) {
              noCompletadas.push(tarea);
          }
          this.tareas = noCompletadas;
      });
  }

  marcarCompletado(index:any){
    this.tareas[index].estado = !this.tareas[index].estado;
    this.actualizarListaLocal()
  }

  mostrarTodas() {
    this.tareas = JSON.parse(localStorage['listaTareas']);
  }
  
  num_incompletados(){
    return this.tareas.filter(tarea => !tarea.estado).length;
  }
}
