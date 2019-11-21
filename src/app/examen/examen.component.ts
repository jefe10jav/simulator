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

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 01:00:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("clock").innerHTML = hours + "h:"
        + minutes + "m:" + seconds + "s";

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
      }
    }, 1000);
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
