import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  usuario = "";
  contrasena = "";

  iniciarSesion(){
    console.log(this.usuario);
    
    if(this.usuario == "simulatorTest" && this.contrasena=="general123"){
      this.router.navigate(['/panel/', JSON.stringify(this.dataService.Examenes) ])
    }else{
      alert("Usuario o contraseña incorrectos");
    }
    
  }

}
