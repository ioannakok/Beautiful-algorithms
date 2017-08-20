import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';


@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent {


	@ViewChild('rendererContainer') rendererContainer: ElementRef;

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
	}

    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;

    // Time and delay parameters for tweens
    time = 500;
    delay = 0;

    // Arrays for elements and their coordinates
    bars = [];
    xCoords = [];
    current = null;

    // Boolean variables to control animation
    animation = false;
    initAnim = false;
    paused = false;
    pauseStart = null;
    tweens = [];
    

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

    // Create bars
    this.createBars(15);      
}


  onPlay() {

    // If the animation has been paused
    if(this.paused && this.animation) {

        // Restart all tweens
        for(var i = 0; i < this.tweens.length; i ++) {
            this.tweens[i].play();
        }

        // Animation is not paused anymore
        this.paused = false;


    } else {

        // Start animation
        this.animation = true;
    }
}
    
    onStop() {
        // Stop all tweens
        TWEEN.removeAll();
    }

    onRestart() {
        
        // Remove all bars from the scene
        for(var i=0; i < this.bars.length; i++) {
            this.removeBar(this.bars[i]);
        }
        
        // Empty the array of bars
        this.bars = [];
        this.xCoords = [];

        // Create new set of bars
        this.createBars(15);

        // Initialise again all the variables
        this.initAnim = false;
        this.animation = false;
        this.time = 500;
        this.delay = 0;
        this.paused = false;
        
        // Remove all tweens
        TWEEN.removeAll();
    }

    onPause() {
        
        if(this.paused)
            return;
        
        // Get all the active tweens
        this.tweens = TWEEN.getAll();
        
        // Stop all the active tweens
        for(var i = 0; i < this.tweens.length; i ++) {
            this.tweens[i].pause();
        }

        this.paused = true;        
    }


  ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();          
}


  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {
            this.bubbleSort();
            this.initAnim = true;
        }

        // If animation is on progress, update all tweens
        if(this.animation)
            TWEEN.update();  
    }

    // Sweaps elements
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


    // Remove a bar from the scene
    removeBar(bar) {
            this.scene.remove(bar);
            bar.geometry.dispose();
            bar.material.dispose();
            bar = undefined;
    }


    // Create bars and add them to the scene
    createBars(num) {

        var dist = 0;
        var x = -55;

        // Create num bars
        for(var i = 0; i < num; i++) {
            var bar = this.getBar(x, dist);
            dist += 5;
            this.bars.push(bar);
            this.xCoords.push(bar.position.x);
            this.scene.add(bar);
        }
    }

    // Bubble sort method
    bubbleSort() {

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

                    // Swap elements
                    this.swap(current, next, curX, nextX, this.time, this.delay);
                    this.delay += this.time;

                    // Change position in the array of elements
                    this.bars[j] = next;
                    this.bars[j+1] = current;    
                }

                // Turn elements that have been compared to green again
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
}
