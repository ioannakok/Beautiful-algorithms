import { Component, ViewChild, ElementRef, HostListener, OnInit} from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';
import { Algorithm } from '../../algorithm.model';
import { AlgorithmsService } from '../../algorithms.service';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css'],
  providers: [AlgorithmsService] 
})
export class QuickSortComponent implements OnInit {

  	@ViewChild('rendererContainer') rendererContainer: ElementRef;

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth / 2.5, event.target.innerHeight / 2.5)
	}

	// Properties
    algorithm: Algorithm;

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
    pseudo3 = null;
    pseudo4 = null;
    
    // Java snippets
    java1 = null;
    java2 = null;
    java3 = null;
    java4 = null;
    java5 = null;
    java6 = null;
    java7 = null;
    java8 = null;
    java11 = null;
    java12 = null;
    java13 = null;
    java14 = null;
    java17 = null;
    java18 = null;
    java19 = null;
    java20 = null;
    
    // Python snippets
    python1 = null;
    python2 = null;
    python3 = null;
    python4 = null;
    python5 = null;
    python6 = null;
    python7 = null;
    python8 = null;
    python10 = null;
    python11 = null;
    python12 = null;
    python13 = null;
    
    // C++ snippets
    c1 = null;
    c2 = null;
    c3 = null;
    c4 = null;
    c5 = null;
    c6 = null;
    c9 = null;
    c10 = null;
    c12 = null;
    c13 = null;
    c14 = null;
    c15 = null;  

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
    this.algorithm = this.algorithmsService.getAlgorithm(3);
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
        this.pseudo3 = document.getElementById('pseudo3');
        this.code.push(this.pseudo3);
        this.pseudo4 = document.getElementById('pseudo4');
        this.code.push(this.pseudo4);


        // Java elements
        this.java1 = document.getElementById('java1');
        this.code.push(this.java1);
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
        this.java8 = document.getElementById('java8');
        this.code.push(this.java8);
        this.java11 = document.getElementById('java11');
        this.code.push(this.java11);
        this.java12 = document.getElementById('java12');
        this.code.push(this.java12);
        this.java13 = document.getElementById('java13');
        this.code.push(this.java13);
        this.java14 = document.getElementById('java14');
        this.code.push(this.java14);
        this.java17 = document.getElementById('java17');
        this.code.push(this.java17);
        this.java18 = document.getElementById('java18');
        this.code.push(this.java18);
        this.java19 = document.getElementById('java19');
        this.code.push(this.java19);
        this.java20 = document.getElementById('java20');
        this.code.push(this.java20);
        
        
        // Python elements
        this.python1 = document.getElementById('python1');
        this.code.push(this.python1);
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
        this.python8 = document.getElementById('python8');
        this.code.push(this.python8);
        this.python10 = document.getElementById('python10');
        this.code.push(this.python10);
        this.python11 = document.getElementById('python11');
        this.code.push(this.python11);
        this.python12 = document.getElementById('python12');
        this.code.push(this.python12);
        this.python13 = document.getElementById('python13');
        this.code.push(this.python13);
        
        // C++ elements
        this.c1 = document.getElementById('c1');
        this.code.push(this.c1);
        this.c2 = document.getElementById('c2');
        this.code.push(this.c2);
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c4 = document.getElementById('c4');
        this.code.push(this.c4);
        this.c5 = document.getElementById('c5');
        this.code.push(this.c5);
        this.c6 = document.getElementById('c6');
        this.code.push(this.c6);
        this.c9 = document.getElementById('c9');
        this.code.push(this.c9);
        this.c10 = document.getElementById('c10');
        this.code.push(this.c10);
        this.c12 = document.getElementById('c12');
        this.code.push(this.c12);
        this.c13 = document.getElementById('c13');
        this.code.push(this.c13);
        this.c14 = document.getElementById('c14');
        this.code.push(this.c14);
        this.c15 = document.getElementById('c15');
        this.code.push(this.c15);
        
	}


	/* Animate function. It updates all the animations */  
  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {
            this.quickSort(this.bars, 0, 19);
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

    /* It takes the last element as pivot and partitions the array.
        All elements smaller than the pivot are placed on the left,
        all elements larger than the pivot are placed on the right.
        In the end, pivot is placed between smaller and larger elements.
    */
    partition(array, start, end) {

        var pivot = array[end]; 
        var pIndex = start;

        // Animate Java, Python, C++
        this.animateCode(this.java17, this.time, this.delay);
        this.animateCode(this.java18, this.time, this.delay);
        this.animateCode(this.python10, this.time, this.delay);
        this.animateCode(this.python11, this.time, this.delay);
        this.animateCode(this.c12, this.time, this.delay);
        this.animateCode(this.c13, this.time, this.delay);
        this.delay += this.time;

        this.animateCode(this.java1, this.time, this.delay);
        this.animateCode(this.python1, this.time, this.delay);
        this.animateCode(this.c1, this.time, this.delay);
        this.animateCode(this.pseudo0, this.time, this.delay);

        // Show pivot
        this.changeColour(pivot, this.time, this.delay, 0xbc9c1a);
        this.delay += this.time;

        for(var i = start; i < end; i++) {

            // Animate Java, Python, C++
            this.animateCode(this.java3, this.time, this.delay);
            this.animateCode(this.java4, this.time, this.delay);
            this.animateCode(this.python3, this.time, this.delay);
            this.animateCode(this.python4, this.time, this.delay);
            this.animateCode(this.c3, this.time, this.delay);
            this.animateCode(this.c4, this.time, this.delay);
            this.animateCode(this.pseudo1, this.time, this.delay);
            this.animateCode(this.pseudo2, this.time, this.delay);

            // Show element compared with pivot
            this.changeColour(array[i], this.time, this.delay, 0x9c1abc);
            this.delay += this.time;

            // If current element is smaller or equal than the pivot
            if(array[i].geometry.parameters.height <= pivot.geometry.parameters.height) {

                // Animate Java, Python, C++
                this.animateCode(this.java5, this.time, this.delay);
                this.animateCode(this.java6, this.time, this.delay);
                this.animateCode(this.java7, this.time, this.delay);
                this.animateCode(this.java8, this.time, this.delay);
                this.animateCode(this.python5, this.time, this.delay);
                this.animateCode(this.python6, this.time, this.delay);
                this.animateCode(this.c5, this.time, this.delay);
                this.animateCode(this.c6, this.time, this.delay);
                this.animateCode(this.pseudo3, this.time, this.delay);
                
                // Swap elements
                this.swap(array[pIndex], array[i], this.xCoords[pIndex], this.xCoords[i], this.time, this.delay);
                this.delay += this.time;

                // Change colour of current element to green
                this.changeColour(array[i], this.time, this.delay, 0x3abc1a);
                this.delay += this.time;

                var temp = array[i];
                array[i] = array[pIndex];
                array[pIndex] = temp;

                pIndex++; 
            }

            // Change colour of current element to green
            this.changeColour(array[i], this.time, this.delay, 0x3abc1a);
            this.delay += this.time;
        }

        // Animate Java, Python, C++
        this.animateCode(this.java11, this.time, this.delay);
        this.animateCode(this.java12, this.time, this.delay);
        this.animateCode(this.java13, this.time, this.delay);
        this.animateCode(this.python7, this.time, this.delay);
        this.animateCode(this.c9, this.time, this.delay);
        this.animateCode(this.pseudo4, this.time, this.delay);
        
        // Place pivot in the right position
        this.swap(array[pIndex], array[end], this.xCoords[pIndex], this.xCoords[end], this.time, this.delay);
        this.delay += this.time;

        var temp = array[pIndex];
        array[pIndex] = array[end];
        array[end] = temp;

        // Turn pivot to green again
        this.changeColour(array[pIndex], this.time, this.delay, 0x3abc1a);
        this.delay += this.time;

        // Animate Java, Python, C++
        this.animateCode(this.java14, this.time, this.delay);
        this.animateCode(this.python8, this.time, this.delay);
        this.animateCode(this.c10, this.time, this.delay);
        this.delay += this.time;

        return pIndex;
    }


    // Quick sort method
    quickSort(array, start, end) {

        if(start < end) {

            // Partitioning index
            var pIndex = this.partition(array, start, end);

            // Recursively sort elements before and after pIndex 
            // and animate Java, Python, C++
            this.animateCode(this.java19, this.time, this.delay);
            this.animateCode(this.python12, this.time, this.delay);
            this.animateCode(this.c14, this.time, this.delay);
            this.delay += this.time;
            this.quickSort(array, start, pIndex - 1);
            
            this.animateCode(this.java20, this.time, this.delay);
            this.animateCode(this.python13, this.time, this.delay);
            this.animateCode(this.c15, this.time, this.delay);
            this.delay += this.time;
            this.quickSort(array, pIndex + 1, end);
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