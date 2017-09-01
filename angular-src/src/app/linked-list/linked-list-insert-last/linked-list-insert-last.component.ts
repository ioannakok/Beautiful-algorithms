import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

@Component({
  selector: 'app-linked-list-insert-last',
  templateUrl: './linked-list-insert-last.component.html',
  styleUrls: ['./linked-list-insert-last.component.css']
})
export class LinkedListInsertLastComponent {

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
    java3 = null;
    java6 = null;
    java7 = null;
    java8 = null;

    // Python snippets
    python2 = null
    python3 = null;
    python6 = null;
    python7 = null;
    python8 = null;
    
    // C++ snippets
    c3 = null;
    c4 = null;
    c5 = null;
    c8 = null;
    c9 = null;
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
    this.createBoxes(4);  

    // Create head pointer
    this.head = this.getHead();
    this.scene.add(this.head); 

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
        this.java3 = document.getElementById('java3');
        this.code.push(this.java3);
        this.java6 = document.getElementById('java6');
        this.code.push(this.java6);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        this.java8 = document.getElementById('java8');
        this.code.push(this.java8);
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
        this.python3 = document.getElementById('python3');
        this.code.push(this.python3);
        this.python6 = document.getElementById('python6');
        this.code.push(this.python6);
        this.python7 = document.getElementById('python7');
        this.code.push(this.python7);
        this.python8 = document.getElementById('python8');
        this.code.push(this.python8);
        
        // C++ elements
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c4 = document.getElementById('c4');
        this.code.push(this.c4);
        this.c5 = document.getElementById('c5');
        this.code.push(this.c5);
        this.c8 = document.getElementById('c8');
        this.code.push(this.c8);
        this.c9 = document.getElementById('c9');
        this.code.push(this.c9);
        this.c10 = document.getElementById('c10');
        this.code.push(this.c10);
}

/* Animate function. It updates all the animations */  
  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {

        	// Create element and pointer to be inserted at the end of the linked list
		    var box = this.getBox(-65, 10);
		    this.scene.add(box);
		    this.bars.unshift(box);
            
            // Create pointer
            this.pointer = this.getPointer(-65, 10);  
            this.scene.add(this.pointer);

            // Insert element and pointer to the scene
            this.insert(box, 20, 0, this.time, this.delay);
            this.insert(this.pointer, 25, 0, this.time, this.delay);
            
            this.animateCode(this.java2, this.time, this.delay);
            this.animateCode(this.python2, this.time, this.delay);
            this.animateCode(this.c3, this.time, this.delay);
            this.animateCode(this.c4, this.time, this.delay);

            this.delay += this.time;

            this.animateCode(this.java6, this.time, this.delay);
            this.animateCode(this.python6, this.time, this.delay);
            this.animateCode(this.c8, this.time, this.delay);

            this.delay += this.time;

            this.animateCode(this.java7, this.time, this.delay);
            this.animateCode(this.python7, this.time, this.delay);
            this.animateCode(this.c9, this.time, this.delay);

            this.shift(box, 20, 15, this.time, this.delay);
            this.shift(this.pointer, 25, 18, this.time, this.delay);

            this.delay += this.time;

            this.animateCode(this.java8, this.time, this.delay);
            this.animateCode(this.python8, this.time, this.delay);
            this.animateCode(this.c10, this.time, this.delay);

            var tween = new TWEEN.Tween(this.tail.position)
                .to({x: 15}, this.time)
                .delay(this.delay)
                .start();   

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
            this.remove(this.bars[i]);
        }

        // Remove head and pointer
        this.remove(this.tail);
        this.remove(this.pointer);
        
        // Empty the array of bars
        this.bars = [];
        this.xCoords = [];

        // Create new set of boxes and head
        this.createBoxes(4);
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

    // Create one pointer
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

            cube.position.x = -25;
            cube.position.y = 8;
            cube.position.z = 0;

        return cube;
    }

    // Create tail
    getTail() {

        var geometry = new THREE.BoxGeometry(0.5, 8, 0.5);
        var material = new THREE.MeshPhongMaterial({color: 0x33a617});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = 5;
            cube.position.y = 8;
            cube.position.z = 0;

        return cube;
    }

    // Create boxes
    createBoxes(num) {

        var dist = 10;
        var x = -28;
        
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
            this.scene.add(pointer);
        }

    }

    // Function that inserts element at the beginning of the linked list
    insert(element, x, y, time, delay) {

        var position = {x: -65, y: 10, rotation: 0};

        var tween = new TWEEN.Tween(element.position)
            .to({x: x, y: y}, time)
            .delay(delay)
            .easing(TWEEN.Easing.Elastic.InOut)
            .onUpdate(function() {   
                element.rotation.z -= 0.1;   
            })
            .onComplete(function() {
            	element.rotation.z = 0;
            })
            .start();
            
    }

    shift(element, x1, x2, time, delay) {

    	var tween = new TWEEN.Tween({x: x1})
    		.to({x: x2}, time)
    		.delay(delay)
    		.easing(TWEEN.Easing.Elastic.InOut)
    		.onUpdate(function() {
    			if(element.position.x < x2)
    				element.translateX(0.1);
    			if(element.position.x > x2)
    				element.translateX(-0.1);
    		})
    		.start();
    }

    shiftPointer(line, x1, x2, inc, time, delay) {

        var tween = new TWEEN.Tween({x1: x1, x2: x2})
            .to({x1: x1 + inc, x2: x2 + inc}, time)
            .delay(delay )
            .onUpdate(function() {
                line.geometry.vertices[0].x = x1 + inc;
                line.geometry.vertices[1].x = x2 + inc;
                line.geometry.verticesNeedUpdate = true;
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
