import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';
import { Algorithm } from '../../algorithm.model';
import { AlgorithmsService } from '../../algorithms.service';
import { OnInteract} from '../../interact';


@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css'],
  providers: [AlgorithmsService] 
})
export class BubbleSortComponent implements OnInit, OnInteract {


	@ViewChild('rendererContainer') rendererContainer: ElementRef;

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth / 2.5, event.target.innerHeight / 2.5)
	}

    // Properties
    algorithm: Algorithm;

    // Animation
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
    pseudo0 = null;
    pseudo1 = null;
    pseudo2 = null;

    // Java snippets
    java2 = null;
    java3 = null;
    java4 = null;
    java5 = null;
    java6 = null;
    java7 = null;

    // Python snippets
    python2 = null;
    python3 = null;
    python4 = null;
    python5 = null;

    // C++ snippets
    c3 = null;
    c4 = null;
    c5 = null;
    c7 = null;
    c8 = null;
    c9 = null;

    // Array for all the snippets
    code = [];

  constructor(private algorithmsService: AlgorithmsService) { 

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
    
  ngOnInit() {
    this.algorithm = this.algorithmsService.getAlgorithm(0);
  }  

  ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        /* Initialise all elements and push them in the code array */

        // Pseudocode elements
        this.pseudo0 = document.getElementById('pseudo0');
        this.code.push(this.pseudo0);
        this.pseudo1 = document.getElementById('pseudo1');
        this.code.push(this.pseudo1);
        this.pseudo2 = document.getElementById('pseudo2');
        this.code.push(this.pseudo2);

        // Java elements
        this.java2 = document.getElementById('java2');
        this.code.push(this.java2);
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
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
        this.python3 = document.getElementById('python3');
        this.code.push(this.python3);
        this.python4 = document.getElementById('python4');
        this.code.push(this.python4);
        this.python5 = document.getElementById('python5');
        this.code.push(this.python5);

        // C++ elements
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c4 = document.getElementById('c4');
        this.code.push(this.c4);
        this.c5 = document.getElementById('c5');
        this.code.push(this.c5);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);
        this.c8 = document.getElementById('c8');
        this.code.push(this.c8);
        this.c9 = document.getElementById('c9');   
        this.code.push(this.c9);

}

    
  /* Animate function. It updates all the animations */  
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

    /* Functions to control the speed */
    onSlow() {
        this.time = 2000;
    }

    onNormal() {
        this.time = 1000;
    }

    onFast() {
        this.time = 500;
    }

    /* Functions for 3D animation */

    // Swaps elements
    swap(element1, element2, x1, x2, time, delay) {

        var tween = new TWEEN.Tween({x: x1})
                .to({x: x2}, time)
                .delay(delay)
                .onUpdate(function() {
                    if(element1.position.x < x2)
                        element1.translateX(0.2);
                })
                .start();

            var tween1 = new TWEEN.Tween({x: x2})
                .to({x: x1}, time)
                .delay(delay)
                .onUpdate(function() {
                    if(element2.position.x > x1)    
                        element2.translateX(-0.2);        
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

    // Bubble sort method
    bubbleSort() {

        var n = this.bars.length;
        var last = this.bars.length - 1;

        for(var i=0; i < n; i++) {

            for(var j=0; j < n-i -1; j++) {
                
                var current = this.bars[j];
                var next = this.bars[j+1];

                // Change colour to show comparison
                this.changeColour(current, this.time, this.delay, 0x7d1799);
                this.changeColour(next, this.time, this.delay, 0x7d1799);

                // Animate pseudocode
                this.animateCode(this.pseudo0, this.time, this.delay);
                this.animateCode(this.pseudo1, this.time, this.delay);
                
                // Animate Java, Python and C++ code
                // If we're at the beginning of the array
                // animate the first loop, otherwise only the second one
                if(j == 0) {
                    
                    var time = this.time / 3;
                    var delay = this.delay;

                    this.animateCode(this.java2, time, delay);
                    this.animateCode(this.python2, time, delay);
                    this.animateCode(this.c3, time, delay);
                    delay += time;
                    this.animateCode(this.java3, time, delay);
                    this.animateCode(this.python3, time, delay);
                    this.animateCode(this.c4, time, delay);
                    delay += time;
                    this.animateCode(this.java4, time, delay);
                    this.animateCode(this.python4, time, delay);
                    this.animateCode(this.c5, time, delay);

                } else {

                    var time = this.time / 2;
                    var delay = this.delay;

                    this.animateCode(this.java3, time, delay);
                    this.animateCode(this.python3, time, delay);
                    this.animateCode(this.c4, time, delay);
                    delay += time;
                    this.animateCode(this.java4, time, delay);
                    this.animateCode(this.python4, time, delay);
                    this.animateCode(this.c5, time, delay);
                }
                
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

                    // Animate pseudocode
                    this.animateCode(this.pseudo2, this.time, this.delay);

                    // Animate Java, Python and C++ code
                    this.animateCode(this.java5, this.time, this.delay);
                    this.animateCode(this.java6, this.time, this.delay);
                    this.animateCode(this.java7, this.time, this.delay);
                    this.animateCode(this.python5, this.time, this.delay);
                    this.animateCode(this.c7, this.time, this.delay);
                    this.animateCode(this.c8, this.time, this.delay);
                    this.animateCode(this.c9, this.time, this.delay);

                    this.delay += this.time;

                    // Change position in the array of elements
                    this.bars[j] = next;
                    this.bars[j+1] = current; 
     
                }

                // Turn elements that have been compared to green again
                this.changeColour(current, this.time, this.delay, 0x3abc1a);
                this.changeColour(next, this.time, this.delay, 0x3abc1a);

                // Change colour to blue when sorted
                if(j == last - 1) {
                    this.changeColour(this.bars[last], this.time, this.delay, 0xbc9c1a);
                    last -= 1;
                    this.delay += this.time;
                }

                // Change colour of the first element to blue when finished
                if(j == 0 && last == 0) {
                    this.changeColour(this.bars[0], this.time, this.delay, 0xbc9c1a);
                }   
            }
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
