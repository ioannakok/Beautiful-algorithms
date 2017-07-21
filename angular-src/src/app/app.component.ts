import { Component } from '@angular/core';
import { Algorithm } from './algorithm';

import { AlgoService } from './algo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlgoService]
})

export class AppComponent implements OnInit {
  title = 'BEAUTIFUL ALGORITHMS';

  algorithms: Algorithm[];

  constructor(private algoService: AlgoService) { }

  getAlgos(): void {
  	this.algoService.getAlgos().then(algorithms => this.algorithms = algorithms);
  }

  ngOnInit(): void {
  	this.getAlgos();
  }
}


