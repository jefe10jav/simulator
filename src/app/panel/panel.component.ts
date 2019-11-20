import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public examenes=null;

  constructor(private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.examenes = JSON.parse(params.data);
    });
  }

  iniciarExamen(){
    this.router.navigate(['/examen', JSON.stringify(this.examenes)])
  }

}
