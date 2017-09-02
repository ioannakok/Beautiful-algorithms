import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

@Component({
  selector: 'app-linked-list-insert-at-index',
  templateUrl: './linked-list-insert-at-index.component.html',
  styleUrls: ['./linked-list-insert-at-index.component.css']
})
export class LinkedListInsertAtIndexComponent {

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
    pointer = null;
    box = null;
    
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
    java6 = null;
    java7 = null;

    // Python snippets
    python2 = null
    python4 = null;
    python5 = null;
    python6 = null;
    python7 = null;
    
    // C++ snippets
    c3 = null;
    c4 = null;
    c5 = null;
    c6 = null;
    c9 = null;
    c10 = null;
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
        this.java6 = document.getElementById('java6');
        this.code.push(this.java6);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
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

        // Start animation
        if(this.animation && !this.initAnim) {

            // Set nodepointer to head and enter the while loop
        	for(var i = 0; i < this.bars.length - 1; i++) {
        		
                if(i == 0) {
                    // Animate code
                    this.animateCode(this.java2, this.time, this.delay);
                    this.animateCode(this.python2, this.time, this.delay);
                    this.animateCode(this.c3, this.time, this.delay);
                } else {

                    // Animate code
                    this.animateCode(this.java4, this.time, this.delay);
                    this.animateCode(this.java5, this.time, this.delay);
                    this.animateCode(this.python4, this.time, this.delay);
                    this.animateCode(this.python5, this.time, this.delay);
                    this.animateCode(this.c5, this.time, this.delay);
                    this.animateCode(this.c6, this.time, this.delay);
                }

                this.changeColour(this.bars[i], this.time, this.delay, 0x1733a6);
        		this.delay += this.time;

        	}

            // Exit while loop
        	// Create and add to the scene element to be inserted at the end of the linked list
		    
            // Animate code
            this.animateCode(this.java7, this.time * 4, this.delay);
            this.animateCode(this.python7, this.time * 4, this.delay);
            this.animateCode(this.c9, this.time * 4, this.delay);
            this.animateCode(this.c10, this.time * 4, this.delay);
            this.animateCode(this.c11, this.time * 4, this.delay);
            this.animateCode(this.c12, this.time * 4, this.delay);
            this.animateCode(this.c13, this.time * 4, this.delay);

            this.box = this.getBox(-65, 10);
		    this.scene.add(this.box);
		    this.bars.unshift(this.box);

            // Create pointer
            this.pointer = this.getPointer(-65, 10);  
            this.scene.add(this.pointer);

            // Insert element and pointer to the scene
            var tween = new TWEEN.Tween(this.box.position)
                .to({x: 5, y: 10}, this.time)
                .delay(this.delay)
                .easing(TWEEN.Easing.Elastic.InOut)
                .start();

            var tween1 = new TWEEN.Tween(this.pointer.position)
                .to({x: 10, y: 10})
                .delay(this.delay)
                .easing(TWEEN.Easing.Elastic.InOut)
                .start();

            // Rotate element and link pointer to the next element
            var tween2 = new TWEEN.Tween(this.box.rotation)
                .to({z: - Math.PI / 2})
                .easing(TWEEN.Easing.Elastic.InOut);

            var tween3 = new TWEEN.Tween(this.pointer.position)
                .to({x: 5, y: 5})
                .easing(TWEEN.Easing.Elastic.InOut);
                

            var tween4 = new TWEEN.Tween(this.pointer.rotation)
                .to({z: - Math.PI / 2})
                .easing(TWEEN.Easing.Elastic.InOut);
                
                
            tween.chain(tween2);
            tween1.chain(tween3, tween4);

            this.delay += this.time * 2;

            // Shift element and next elements on the right
            var lastelement = this.bars[this.bars.length - 1];
            var lastpointer = this.lines[this.lines.length - 1];

            var tween5 = new TWEEN.Tween(lastelement.position)
                .to({x: lastelement.position.x + 10}, this.time)
                .delay(this.delay)
                .start();

            var tween6 = new TWEEN.Tween(lastpointer.position)
                .to({x: lastpointer.position.x + 10}, this.time)
                .delay(this.delay)
                .start();

            var tween7 = new TWEEN.Tween(this.box.position)
                .to({x: lastpointer.position.x + 7}, this.time)
                
            
            var tween8 = new TWEEN.Tween(this.pointer.position)
                .to({x: lastpointer.position.x + 7}, this.time)
                
            tween3.chain(tween7, tween8);

            // Rotate element and pointer to the right position
            var tween9 = new TWEEN.Tween(this.box.rotation)
                .to({z: 0})
                
            var tween10 = new TWEEN.Tween(this.box.position)
                .to({x: 5, y: 0})
            
            var tween11 = new TWEEN.Tween(this.pointer.position)
                .to({x: 10, y: 0})
                   
            var tween12 = new TWEEN.Tween(this.pointer.rotation)
                .to({z: 0})
                
            tween7.chain(tween9, tween10, tween11, tween12);   

            this.delay += this.time * 3;
            for(var i = 0; i < this.bars.length - 1; i++) {

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

        // Remove new element and pointer
        this.remove(this.box);
        this.remove(this.pointer);
        
        // Empty the array of bars
        this.bars = [];
        this.lines = [];
        this.xCoords = [];

        // Create new set of boxes
        this.createBoxes(4);
        

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
            this.lines.push(pointer);
            this.scene.add(pointer);
        }

    }

    // Function that inserts element at the beginning of the linked list
    insert(element, x, y, time, delay) {

        var tween = new TWEEN.Tween(element.position)
            .to({x: x, y: y}, time)
            .delay(delay)
            .easing(TWEEN.Easing.Elastic.InOut)
            .onComplete(function() {
            	element.rotation.z = - Math.PI / 2;
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
