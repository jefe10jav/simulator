import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Examenes = {
    porRealizar:[
      {
        nombre: 'Geografía 1',
        descripcion: 'Conceptos básicos de la unidad 1',
      },
      {
        nombre: 'Formación cívica 1',
        descripcion: 'Conceptos básicos de la unidad 1',
      },
      {
        nombre: 'Lectura y redacción 1',
        descripcion: 'Conceptos básicos de la unidad 1',
      }
    ],
    realizando: [
      {
        nombre: 'Historia 1',
        descripcion: 'Conceptos básicos de la unidad 1',
        preguntas:[
          {
            pregunta: "1. ¿Qué se celebra el 20 de Noviembre?",
            r1: "Independencia de México",
            r2: "Revolución Mexicana",
            r3: "Guerra de los pasteles",
            rc: "Revolución Mexicana",
            ru: ""
          },
          {
            pregunta: "2. ¿En que año se inicio la independencia de México?",
            r1: "1810",
            r2: "1910",
            r3: "1521",
            rc: "1810",
            ru: ""
          },
          {
            pregunta: "3. ¿Con que otro nombre se le conoce a Miguel Hidalgo?",
            r1: "El revolucionario",
            r2: "El soberano",
            r3: "El padre de la patria",
            rc: "El padre de la patria",
            ru: ""
          },
          {
            pregunta: "4. ¿En dónde se encuentran las pirámides del Sol y la Luna?",
            r1: "Palenque",
            r2: "Chichén Itzá",
            r3: "Teotihuacan",
            rc: "Teotihuacan",
            ru: ""
          },
          {
            pregunta: "5. ¿Cultura que se desarrolló en la ciudad de Palenque?",
            r1: "Maya",
            r2: "Mexica",
            r3: "Olmeca",
            rc: "Maya",
            ru: ""
          }
        ],
        puntaje:0,
        progreso:0,
        preguntaActual: 0,
        finalizado: ""
      }
    ],
    realizados:[

    ]
  }
  
  constructor() { }
}
