import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import * as THREE from 'three';

import { AlgoService } from './algo.service';
import { Algorithm } from './algorithm';

@Component({
  selector: 'algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.css']
})

export class AlgorithmDetailComponent implements OnInit {
    
    @ViewChild('rendererContainer') rendererContainer: ElementRef;

    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;
    mesh = null;
  
    @Input() algorithm: Algorithm;
  

  	constructor(
  		private algoService: AlgoService,
  		private route: ActivatedRoute,
  		private location: Location
    ) { 

       this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;

        const geometry = new THREE.BoxGeometry(200, 200, 200);
        const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        this.mesh = new THREE.Mesh(geometry, material);

        this.scene.add(this.mesh);

    }

    ngAfterViewInit() {
        this.renderer.setSize(1000, 400);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(() => this.animate());
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }

  	ngOnInit(): void {
  		this.route.paramMap
    	.switchMap((params: ParamMap) => this.algoService.getAlgo(params.get('url')))
    	.subscribe(algorithm => this.algorithm = algorithm);

	}

	

}
