import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

@Component({
  selector: 'app-stack-push',
  templateUrl: './stack-push.component.html',
  styleUrls: ['./stack-push.component.css']
})
export class StackPushComponent {

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
    time = 2000;
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
    java2 = null;
    java6 = null;
    java7 = null;
    java8 = null;
    
    // Python snippets
    python2 = null;

    // C++ snippets
    c2 = null;
    c6 = null;
    c7 = null;
    c8 = null;
    

    // Array for all the snippets
    code = [];

  	constructor() { 

  		// Add camera
	  	this.scene = new THREE.Scene();

	  	// Position the camera
	    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	    this.camera.position.x = -30;
	    this.camera.position.y = 0;
	    this.camera.position.z = 40;
	    this.camera.lookAt(this.scene.position);

	    // Add subtle ambient lighting
	    const ambientLight = new THREE.AmbientLight(0x323232);
	    this.scene.add(ambientLight);

	    // Add spotlight for the shadows
	    const spotLight = new THREE.SpotLight(0xffffff);
	    spotLight.position.set(-100, 40, 60);
	    this.scene.add(spotLight);

	    // Create bars
	    this.createBars(7);
  	}


  	ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        /* Initialise all elements and push them in the code array */

        // Pseudocode elements
        

        // Java elements
        this.java2 = document.getElementById('java2');
        this.code.push(this.java2);
        this.java6 = document.getElementById('java6');
        this.code.push(this.java6);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        this.java8 = document.getElementById('java8');
        this.code.push(this.java8);
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);

        // C++ elements
		this.c2 = document.getElementById('c2');
        this.code.push(this.c2);
        this.c6 = document.getElementById('c6');
        this.code.push(this.c6);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);
        this.c8 = document.getElementById('c8');
        this.code.push(this.c8);        
	}

	/* Animate function. It updates all the animations */  
  	animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {

        	 // Create an element to push into the stack
        	var bar = this.getBox(-65, -10, 0, 0x00ff80);
        	this.scene.add(bar);
        	this.bars.push(bar);
        	
        	this.push(bar, 9, this.time, this.delay);

        	// Animate Java, Python, C++
        	var time = this.time * 3 ;
        	var pythonDelay = time - this.time;

        	this.animateCode(this.python2, this.time, pythonDelay);

        	// Time for Java and C++
        	time = this.time;
        	var delay = 0;

        	this.animateCode(this.java2, time, delay);
        	this.animateCode(this.c2, time, delay);
        	delay += time;

        	this.animateCode(this.java6, time, delay);
        	this.animateCode(this.c6, time, delay);
        	delay += time;

        	this.animateCode(this.java7, time, delay);
        	this.animateCode(this.c7, time, delay);
        	delay += time;

        	this.animateCode(this.java8, time, delay);
        	this.animateCode(this.c8, time, delay);
        	delay += time;

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

        // Create new set of bars
        this.createBars(7);

        // Initialise again all the variables
        this.initAnim = false;
        this.animation = false;
        this.time = 2000;
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
        this.time = 4000;
    }

    onNormal() {
        this.time = 2000;
    }

    onFast() {
        this.time = 1000;
    }

    /* Functions for 3D animation */

    getBox(x, y, z, colour) {

        var geometry = new THREE.BoxGeometry(25, 3, 8);
        var material = new THREE.MeshPhongMaterial({color: colour});
        var cube = new THREE.Mesh(geometry, material);

        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;

        return cube;    
    }

    // Create bars
    createBars(num) {

    	// Display the bars
        var dist = 3;
        var y = -12;
        
        // Create elements that are in the stack
        for(var i = 0; i < num; i++) {

            var colour;

            switch(i) {
                case 0: 
                    colour = 0x0000ff;
                    break;
                case 1:
                    colour = 0xff0000;
                    break;
                case 2:
                    colour = 0x00ff00;
                    break;
                case 3:
                    colour = 0xff00ff;
                    break;
                case 4:
                    colour = 0xffff00;
                    break;
                case 5: 
                    colour = 0x00ffff;
                    break;
                case 6: 
                    colour = 0xff8000;
                    break;
                
            } 

            var bar = this.getBox(0, y, 0, colour);
            this.scene.add(bar);
            this.bars.push(bar);
            y += dist;
        }
    }

    // Remove a bar from the scene
    removeBar(bar) {
            this.scene.remove(bar);
            bar.geometry.dispose();
            bar.material.dispose();
            bar = undefined;
    }

    push(element, y, time, delay) {

    	// Takes the element to the target position by rotating it around the z axis
        var tween1 = new TWEEN.Tween(element.position)
            .to({x: 0, y: 13, z: 20}, this.time)
            .delay(this.delay)
            .easing(TWEEN.Easing.Elastic.InOut)
            .onUpdate(function() {
                element.rotation.z -= 0.1;
            })
            .onComplete(function() {
            	element.rotation.z = 0;
            });
            
            // Pushes the element back and stops rotation    
        var tween2 = new TWEEN.Tween(element.position)
            .to({z: 0}, time)
            .easing(TWEEN.Easing.Elastic.InOut);
            
            // Pushes the element into the stack
        var tween3 = new TWEEN.Tween(element.position)
            .to({y: y}, time)
            .easing(TWEEN.Easing.Elastic.InOut);
            
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween1.start();  
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
