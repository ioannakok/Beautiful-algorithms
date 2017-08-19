

import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';




@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {



	@ViewChild('rendererContainer') rendererContainer: ElementRef;

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
	}

    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;
    time = 500;
    delay = 0;
    bar = null;
    bars = [];
    xCoords = [];
    current = null;
    animation = true;
    
    

  constructor() { 

  	// Add camera
  	this.scene = new THREE.Scene();

  	// Position the camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.x = -30;
    this.camera.position.y = 2;
    this.camera.position.z = 80;
    this.camera.lookAt(this.scene.position);

    // Add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0x323232);
    this.scene.add(ambientLight);

    // Add spotlight for the shadows
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-100, 40, 60);
    this.scene.add(spotLight);

    //this.bar = this.getBar(0, 0);
    //this.scene.add(this.bar);

    var dist = 0;
    var x = -55;

    // Create 20 bars
    for(var i = 0; i < 20; i++) {
        var bar = this.getBar(x, dist);
        dist += 5;
        this.bars.push(bar);
        this.xCoords.push(bar.position.x);
        this.scene.add(bar);
    }

    // Print for debugging
    this.bars.forEach(function(bar) {
        console.log(bar);
    })

    

       
  }

  ngOnInit() {

        


  }

  ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 1.8, window.innerHeight / 1.8);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        var n = this.bars.length;
        var last = this.bars.length - 1;

        for(var i=0; i < n; i++) {

            for(var j=0; j < n-i -1; j++) {

                var current = this.bars[j];
                var next = this.bars[j+1];

                // Change colour to show comparison
                this.changeColour(current, this.time, this.delay, 1, 0, 0.502);
                this.changeColour(next, this.time, this.delay, 1, 0, 0.502);

                this.delay += this.time;

                // Get the height of the elements compared
                var curHeight = current.geometry.parameters.height;
                var nextHeight = next.geometry.parameters.height;

                // Get x position of elements compared
                var curX = this.xCoords[j];
                var nextX = this.xCoords[j+1];

                if(curHeight > nextHeight) {

                    this.swap(current, next, curX, nextX, this.time, this.delay);
                    this.delay += this.time;

                    this.bars[j] = next;
                    this.bars[j+1] = current;    
                    
                }

                // Turn elements compared to green again
                this.changeColour(current, this.time, this.delay, 0, 1, 0);
                this.changeColour(next, this.time, this.delay, 0, 1, 0);

                // Change colour to blue when sorted
                if(j == last - 1) {
                    this.changeColour(this.bars[last], this.time, this.delay, 0, 0, 1);
                    last -= 1;
                    this.delay += this.time;
                }

                // Change colour of the first element to blue when finished
                if(j == 0 && last == 0) {
                    this.changeColour(this.bars[0], this.time, this.delay, 0, 0, 1);
                }   
            }
        }
    }


  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
        TWEEN.update();  

    }

    swap(element1, element2, x1, x2, time, delay) {

        var tween = new TWEEN.Tween({x: x1})
                .to({x: x2}, time)
                .delay(delay)
                .easing(TWEEN.Easing.Quartic.In)
                .onUpdate(function() {
                    if(element1.position.x < x2)
                        element1.translateX(0.2);
                })
                .start();

            var tween1 = new TWEEN.Tween({x: x2})
                .to({x: x1}, time)
                .delay(delay)
                .easing(TWEEN.Easing.Quartic.In)
                .onUpdate(function() {
                    if(element2.position.x > x1)    
                        element2.translateX(-0.2);
                })
                .start();
    }

    
    // Change colour of an element
    changeColour(element, time, delay, r, g, b) {

        var tween = new TWEEN.Tween(element.material.color)
            .to({r: r, g: g, b: b}, time)
            .delay(delay)
            .start();
    }

    // Move an element
    

    

    // Create one bar
    getBar(x, dist) {

        var geometry = new THREE.BoxGeometry(4, ((Math.random() * 50) + 5), 4);
        var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = x + dist;
            cube.position.y = 0;
            cube.position.z = 0;

        return cube;    
    }

}
