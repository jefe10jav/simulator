import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { ExamenComponent } from './examen/examen.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'panel/:data', component: PanelComponent },
  { path: 'examen/:data', component: ExamenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
