import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AlgoService } from './algo.service';
import { Algorithm } from './algorithm';

@Component({
  selector: 'algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.css']
})

export class AlgorithmDetailComponent implements OnInit {
  
    @Input() algorithm: Algorithm;
  

  	constructor(
  		private algoService: AlgoService,
  		private route: ActivatedRoute,
  		private location: Location
    ) { }

  	ngOnInit(): void {
  		this.route.paramMap
    	.switchMap((params: ParamMap) => this.algoService.getAlgo(+params.get('id')))
    	.subscribe(algorithm => this.algorithm = algorithm);

	}

	

}
