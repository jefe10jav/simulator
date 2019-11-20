import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  public examenes = null;
  public examen = null;
  public finalizarButton: boolean = false;


  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.examenes = dataService.Examenes;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.examenes = JSON.parse(params.data);
      this.examen = this.examenes.realizando[0];
    });

    document.body.requestFullscreen();
  }


  siguiente() {
    if (this.examen.preguntas[this.examen.preguntaActual].ru == this.examen.preguntas[this.examen.preguntaActual].rc) {
      this.examen.puntaje += 2;
    }
    this.examen.progreso += 25;

    if (this.examen.preguntaActual + 1 == 4) {
      this.finalizarButton = true;
    }

    this.examen.preguntaActual++;
    this.examenes.realizando[0] = this.examen;
    this.router.navigate(['/examen', JSON.stringify(this.examenes)])
  }

  finalizar() {
    if (this.examen.preguntas[this.examen.preguntaActual].ru == this.examen.preguntas[this.examen.preguntaActual].rc) {
      this.examen.puntaje += 2;
    }
    this.examen.progreso += 25;
  }

  cerrar() {
    window.document.exitFullscreen();
    this.examen.finalizado = new Date();
    this.examenes.realizando = [];
    this.examenes.realizados.push(this.examen);
    this.router.navigate(['/panel/', JSON.stringify(this.examenes)])
  }

}
