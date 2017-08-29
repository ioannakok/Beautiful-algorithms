import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';


@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent {

	@ViewChild('rendererContainer') rendererContainer: ElementRef;	

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth / 2.5, event.target.innerHeight / 2.5)
	}

	// Properties
    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;

    // Time and delay parameters for tweens
    time = 1000;
    delay = 0;

    // Arrays for elements and their coordinates
    bars = [];
    xCoords = [];
    
    // Boolean variables to control animation
    animation = false;
    initAnim = false;
    paused = false;
    pauseStart = null;
    tweens = [];
    button = null;

    // Pseudocode snippets
    

    // Java snippets
    java3 = null;
    java4 = null;
    java5 = null;
    java6 = null;
    java7 = null;
    java8 = null;
    java9 = null;
    java10 = null;

    // Python snippets
    python2 = null;
    python3 = null;
    python4 = null;
    python5 = null;
    python6 = null;
    python7 = null;
    
    // C++ snippets
    c3 = null;
    c5 = null;
    c6 = null;
    c8 = null;
    c9 = null;
    c11 = null;
    c12 = null;
    c13 = null;
    
    // Array for all the snippets
    code = [];

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
    this.createBars(20);      

  }


   ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        /* Initialise all elements and push them in the code array */

        // Pseudocode elements
        
        // Java elements
        this.java3 = document.getElementById('java3');
        this.code.push(this.java3);
        this.java4 = document.getElementById('java4');
        this.code.push(this.java4);
        this.java5 = document.getElementById('java5');
        this.code.push(this.java5);
        this.java6 = document.getElementById('java6');
        this.code.push(this.java6);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        this.java8 = document.getElementById('java8');
        this.code.push(this.java8);
        this.java9 = document.getElementById('java9');
        this.code.push(this.java9);
        this.java10 = document.getElementById('java10');
        this.code.push(this.java10);
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
        this.python3 = document.getElementById('python3');
        this.code.push(this.python3);
        this.python4 = document.getElementById('python4');
        this.code.push(this.python4);
        this.python5 = document.getElementById('python5');
        this.code.push(this.python5);
        this.python6 = document.getElementById('python6');
        this.code.push(this.python6);
        this.python7 = document.getElementById('python7');
        this.code.push(this.python7);
        
        // C++ elements
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c5 = document.getElementById('c5');
        this.code.push(this.c5);
        this.c6 = document.getElementById('c6');
        this.code.push(this.c6);
        this.c8 = document.getElementById('c8');
        this.code.push(this.c8);
        this.c9 = document.getElementById('c9');
        this.code.push(this.c9);
        this.c11 = document.getElementById('c11');
        this.code.push(this.c11);
        this.c12 = document.getElementById('c12');
        this.code.push(this.c12);
        this.c13 = document.getElementById('c13');
        this.code.push(this.c13);     

}

/* Animate function. It updates all the animations */  
  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {
            this.selectionSort();
            this.initAnim = true;
        }

        // If animation is on progress, update all tweens
        if(this.animation)
            TWEEN.update();  
    }


    /* Control functions */ 

    onPlay() {

    // If the animation has been paused
    if(this.paused && this.animation) {

        // Restart all tweens
        for(var i = 0; i < this.tweens.length; i ++) {
            this.tweens[i].play();
        }

        // Animation is not paused anymore
        this.paused = false;

    // Otherwise, start animation
    } else {
        this.animation = true;
    }
}
    // I don't think we need this function
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
        this.createBars(20);

        // Initialise again all the variables
        this.initAnim = false;
        this.animation = false;
        this.time = 1000;
        this.delay = 0;
        this.paused = false;

        // Clear code animation
        for(var i=0; i < this.code.length; i++) {
            this.code[i].style.color = 'black';
            this.code[i].style.backgroundColor = '#ffffff';
        }

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


    /* Functions for 3D animation */

    // Swaps elements
    swap(element1, element2, x1, x2, time, delay) {

        var tween = new TWEEN.Tween({x: x1})
                .to({x: x2}, time)
                .delay(delay)
                .onUpdate(function() {
                    if(element1.position.x < x2)
                        element1.translateX(5);
                })
                .start();

            var tween1 = new TWEEN.Tween({x: x2})
                .to({x: x1}, time)
                .delay(delay)
                .onUpdate(function() {
                    if(element2.position.x > x1)    
                        element2.translateX(-5);        
                })
                .start();
    }

    
    // Change colour of an element
    changeColour(element, time, delay, hex) {

        var tween = new TWEEN.Tween(element.material.color)
            .to({hex: hex}, time)
            .delay(delay)
            .onUpdate(function() {
                element.material.color.setHex(hex);
            })
            .start();
    }

    // Create one bar
    getBar(x, dist) {
        var geometry = new THREE.BoxGeometry(4, ((Math.random() * 50) + 5), 4);
        var material = new THREE.MeshPhongMaterial({color: 0x3abc1a});
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


    // Selection sort
    selectionSort() {

    	var n = this.bars.length;
    	var minimum;

    	for(var i=0; i < n - 1; i++) {

    		// Minimum of unsorted array
            minimum = i;
            this.changeColour(this.bars[i], this.time, this.delay, 0x7d1799);

            // Animate Java, Python, C++
            var time = this.time / 2;
            var delay = this.delay;
            this.animateCode(this.java3, this.time, this.delay);
            this.animateCode(this.java4, this.time, this.delay);
            this.animateCode(this.python2, this.time, this.delay);
            this.animateCode(this.python3, this.time, this.delay);
            this.animateCode(this.c3, this.time, this.delay);
            this.animateCode(this.c5, this.time, this.delay);

            this.delay += this.time;

            for(var j=i+1; j < n; j++) {
                this.changeColour(this.bars[j], this.time, this.delay, 0x1a3abc);

                // Animate Java, Python, C++
                this.animateCode(this.java5, this.time, this.delay);
            	this.animateCode(this.java6, this.time, this.delay);
            	this.animateCode(this.python4, this.time, this.delay);
            	this.animateCode(this.python5, this.time, this.delay);
            	this.animateCode(this.c6, this.time, this.delay);
            	this.animateCode(this.c8, this.time, this.delay);
            	
                this.delay += this.time;

                var minHeight = this.bars[minimum].geometry.parameters.height;
                var jHeight = this.bars[j].geometry.parameters.height;

                if(jHeight < minHeight) {

                    this.changeColour(this.bars[minimum], this.time, this.delay, 0x3abc1a);
                    this.delay += this.time;

                    minimum = j;

                    // Animate Java, Python, C++
                    this.animateCode(this.java7, this.time, this.delay);
                    this.animateCode(this.python6, this.time, this.delay);
                    this.animateCode(this.c9, this.time, this.delay);

                    this.changeColour(this.bars[j], this.time, this.delay, 0x7d1799);

                    this.delay += this.time;
                } else {
                    this.changeColour(this.bars[j], this.time, this.delay, 0x3abc1a);
                    this.delay += this.time;   
                }
            }  

            var minimumX = this.xCoords[minimum]; 
            var iX = this.xCoords[i];
          	
          	// Swap the minimum with the first element of the array
            this.swap(this.bars[i], this.bars[minimum], iX, minimumX, this.time, this.delay);

            // Animate Java, Python, C++
            this.animateCode(this.java8, this.time, this.delay);
            this.animateCode(this.java9, this.time, this.delay);
            this.animateCode(this.java10, this.time, this.delay);
            this.animateCode(this.python7, this.time, this.delay);
            this.animateCode(this.c11, this.time, this.delay);
            this.animateCode(this.c12, this.time, this.delay);
            this.animateCode(this.c13, this.time, this.delay);

            this.delay += this.time;

            var temp = this.bars[i];
            this.bars[i] = this.bars[minimum];
            this.bars[minimum] = temp; 

            this.changeColour(this.bars[i], this.time, this.delay, 0xbc9c1a);
            this.delay += this.time;

            this.changeColour(this.bars[i+1], this.time, this.delay, 0xbc9c1a);
            this.delay += this.time;    

        }

    }


 	/* Function for code animation */
  animateCode(element, time, delay) {

    var t0 = new TWEEN.Tween({color: 'black', backgroundColor: '#ffffff'})
            .to({color: 'white', backgroundColor: '#000000'}, time)
            .delay(delay)
            .onUpdate(function() {
                element.style.color = 'white';
                element.style.backgroundColor = '#000000';
            });
            
    var t1 = new TWEEN.Tween({color: 'white', backgroundColor: '#000000'})
            .to({color: 'black', backgroundColor: '#000000'}, time)
            .onUpdate(function() {
                element.style.color = 'black';
                element.style.backgroundColor = '#ffffff';
            });
            
    t0.chain(t1);
    t0.start();   
  }

  

}
