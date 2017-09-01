import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

@Component({
  selector: 'app-linked-list-delete-at-index',
  templateUrl: './linked-list-delete-at-index.component.html',
  styleUrls: ['./linked-list-delete-at-index.component.css']
})
export class LinkedListDeleteAtIndexComponent {

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
    lines = [];
    xCoords = [];
    head = null;
    tail = null;
    pointer = null
    
    // Boolean variables to control animation
    animation = false;
    initAnim = false;
    paused = false;
    pauseStart = null;
    tweens = [];
    button = null;

    // Pseudocode snippets
    pseudo1 = null;
    pseudo2 = null;
    pseudo3 = null;

    // Java snippets
    java2 = null;
    java4 = null;
    java5 = null;
    java7 = null;

    // Python snippets
    python2 = null;
    python4 = null;
    python5 = null;
    python7 = null;
    
    // C++ snippets
    c3 = null;
    c4 = null;
    c6 = null;
    c7 = null;
    c10 = null;
    
    // Array for all the snippets
    code = [];

  constructor() { 

  	// Add camera
  	this.scene = new THREE.Scene();

  	// Position the camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 32;
    this.camera.lookAt(this.scene.position);

    // Add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0x323232);
    this.scene.add(ambientLight);

    // Add spotlight for the shadows
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-100, 40, 60);
    this.scene.add(spotLight);

    // Create bars
    this.createBoxes(5);  

    // Create head pointer
    this.head = this.getHead();
    this.scene.add(this.head); 

    // Create tail pointer
    this.tail = this.getTail();
    this.scene.add(this.tail); 
}

ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        /* Initialise all elements and push them in the code array */

        // Pseudocode elements
        this.pseudo1 = document.getElementById('pseudo1');
        this.code.push(this.pseudo1);
        this.pseudo2 = document.getElementById('pseudo2');
        this.code.push(this.pseudo2);
        this.pseudo3 = document.getElementById('pseudo3');
        this.code.push(this.pseudo3);

        // Java elements
        this.java2 = document.getElementById('java2');
        this.code.push(this.java2);
        this.java4 = document.getElementById('java4');
        this.code.push(this.java4);
        this.java5 = document.getElementById('java5');
        this.code.push(this.java5);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
        this.python4 = document.getElementById('python4');
        this.code.push(this.python4);
        this.python5 = document.getElementById('python5');
        this.code.push(this.python5);
        this.python7 = document.getElementById('python7');
        this.code.push(this.python7);
        
        // C++ elements
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c4 = document.getElementById('c4');
        this.code.push(this.c4);
        this.c6 = document.getElementById('c6');
        this.code.push(this.c6);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);
        this.c10 = document.getElementById('c10');
        this.code.push(this.c10);
}

/* Animate function. It updates all the animations */  
  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // Run animation
        if(this.animation && !this.initAnim) {

        	for(var i=0; i < 3; i++) {

                if(i == 0) {

                    // Set nodePointer to headList. Animate code
                    this.animateCode(this.java2, this.time, this.delay);
                    this.animateCode(this.python2, this.time, this.delay);
                    this.animateCode(this.c3, this.time, this.delay);
                    this.animateCode(this.c4, this.time, this.delay);
                } else {

                    // Enter the while loop. Animate code
                    this.animateCode(this.java4, this.time, this.delay);
                    this.animateCode(this.java5, this.time, this.delay);
                    this.animateCode(this.python4, this.time, this.delay);
                    this.animateCode(this.python5, this.time, this.delay);
                    this.animateCode(this.c6, this.time, this.delay);
                    this.animateCode(this.c7, this.time, this.delay);
                }
        		
                this.changeColour(this.bars[i], this.time, this.delay, 0x1733a6);
        		this.delay += this.time;
        	}

            // Delete element
        	var nextElement = this.bars[3];
        	var nextPointer = this.lines[3];
        	var previousPointer = this.lines[2];

            this.animateCode(this.java7, this.time * 2, this.delay);
            this.animateCode(this.python7, this.time * 2, this.delay);
            this.animateCode(this.c10, this.time * 2, this.delay);

        	var tween1 = new TWEEN.Tween(nextElement.position)
        		.to({y: 40}, this.time)
        		.delay(this.delay)
        		.start();

        	var tween2 = new TWEEN.Tween(nextPointer.position)
        		.to({y: 40}, this.time)
        		.delay(this.delay)
        		.start();


        	this.delay += this.time;

            // Shift all elements next to the new one to the left
        	this.shift(this.bars[this.bars.length - 1], this.bars[this.bars.length - 1].position.x, 
        	this.bars[this.bars.length - 1].position.x - 10, this.time, this.delay);

        	this.shift(this.lines[this.lines.length - 1], this.lines[this.lines.length - 1].position.x, 
        	this.bars[this.lines.length - 1].position.x - 6, this.time, this.delay);

        	this.shift(this.tail, this.tail.position.x, this.tail.position.x - 10, this.time, this.delay);
        	this.delay += this.time;

            for(var i = 0; i < 3; i++) {
                this.changeColour(this.bars[i], this.time, this.delay, 0xa61733);
            }

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
            this.remove(this.bars[i]);
        }

        for(var i=0; i < this.lines.length; i++) {
            this.remove(this.lines[i]);
        }

        // Remove head and pointer
        this.remove(this.head);
        this.remove(this.tail);
        
        // Empty the array of bars
        this.bars = [];
        this.lines = [];
        this.xCoords = [];

        // Create new set of boxes, head and tail
        this.createBoxes(5);
        this.head = this.getHead();
        this.scene.add(this.head);  
    	this.tail = this.getTail();
    	this.scene.add(this.tail); 

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
    getBox(x, y) {
        var geometry = new THREE.BoxGeometry(6, 5, 2);
        var material = new THREE.MeshPhongMaterial({color: 0xa61733});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = x + 3;
            cube.position.y = y;
            cube.position.z = 0;

        return cube;    
    }

    // Create one bar
    getPointer(x, y) {
        var geometry = new THREE.BoxGeometry(8, 0.5, 0.5);
        var material = new THREE.MeshPhongMaterial({color: 0x33a617});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = x + 3;
            cube.position.y = y;
            cube.position.z = 0;

        return cube;    
    }

    // Create head
    getHead() {

        var geometry = new THREE.BoxGeometry(0.5, 8, 0.5);
        var material = new THREE.MeshPhongMaterial({color: 0x33a617});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = -22;
            cube.position.y = 8;
            cube.position.z = 0;

        return cube;
    }

    // Create tail
    getTail() {

        var geometry = new THREE.BoxGeometry(0.5, 8, 0.5);
        var material = new THREE.MeshPhongMaterial({color: 0x33a617});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = 18;
            cube.position.y = 8;
            cube.position.z = 0;

        return cube;
    }


    

    // Create boxes
    createBoxes(num) {

    	var dist = 10;
        var x = -25;
        
        // Create num boxes
        for(var i = 0; i < num; i++) {
            var bar = this.getBox(x, 0);
            var x1 = x + 3;

            x += dist;
            var x2 = x1 + 7;

            this.bars.push(bar);
            this.xCoords.push(bar.position.x);
            this.scene.add(bar);

            // Create pointer
            var pointer = this.getPointer(x1, 0);
            this.lines.push(pointer);
            this.scene.add(pointer);
        }

    }

 
    shift(element, x1, x2, time, delay) {

    	var tween = new TWEEN.Tween({x: x1})
    		.to({x: x2}, time)
    		.delay(delay)
    		.onUpdate(function() {
    			if(element.position.x < x2)
    				element.translateX(0.2);
                if(element.position.x > x2)
                    element.translateX(-0.5);
    		})
    		.start();
    }


    // Remove a bar from the scene
    remove(element) {
            this.scene.remove(element);
            element.geometry.dispose();
            element.material.dispose();
            element = undefined;
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
