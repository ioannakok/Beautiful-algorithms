import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

@Component({
  selector: 'app-queue-rear',
  templateUrl: './queue-rear.component.html',
  styleUrls: ['./queue-rear.component.css']
})
export class QueueRearComponent {
	
	@ViewChild('rendererContainer') rendererContainer: ElementRef;

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
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
    java4 = null;

    // Python snippets
    python2 = null;

    // C++ snippets
    c2 = null;
    c7 = null;
    
    // Array for all the snippets
    code = [];

  constructor() { 

  	// Add camera
	  	this.scene = new THREE.Scene();

	  	// Position the camera
	    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	    this.camera.position.x = 20;
	    this.camera.position.y = 0;
	    this.camera.position.z = 30;
	    this.camera.lookAt(this.scene.position);

	    // Add subtle ambient lighting
	    const ambientLight = new THREE.AmbientLight(0x323232);
	    this.scene.add(ambientLight);

	    // Add spotlight for the shadows
	    const spotLight = new THREE.SpotLight(0xffffff);
	    spotLight.position.set(-100, 40, 60);
	    this.scene.add(spotLight);

	    // Create bars
	    this.createBars(8);
  }


  ngAfterViewInit() {
        this.renderer.setSize(500, 200);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        /* Initialise all elements and push them in the code array */

        // Pseudocode elements
        
        // Java elements
        this.java2 = document.getElementById('java2');
        this.code.push(this.java2);
        this.java4 = document.getElementById('java4');
        this.code.push(this.java4);
        
        // Python elements
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
        
        // C++ elements
        this.c2 = document.getElementById('c2');
        this.code.push(this.c2);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);  
	}

	/* Animate function. It updates all the animations */  
  	animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run it once
        if(this.animation && !this.initAnim) {

        	// Animate code
        	this.animateCode(this.java2, this.time, this.delay);
        	this.animateCode(this.c2, this.time, this.delay);

        	this.delay += this.time;

        	// Call the rear method
        	this.rear(this.bars[0], this.time, this.delay);
        	
        	// Animate code
        	this.animateCode(this.java4, this.time, this.delay);
        	this.animateCode(this.c7, this.time, this.delay);
        	this.animateCode(this.python2, this.time, this.delay);

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

    /* Functions for 3D animation */

    // Create a box
    getBox(x, y, z, colour) {

        var geometry = new THREE.BoxGeometry(6, 6, 6);
        var material = new THREE.MeshPhongMaterial({color: colour});
        var cube = new THREE.Mesh(geometry, material);

        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;

        return cube;    
    }

    // Remove a bar from the scene
    removeBar(bar) {
            this.scene.remove(bar);
            bar.geometry.dispose();
            bar.material.dispose();
            bar = undefined;
    }


    // Create bars
    createBars(num) {

    	// Display the bars
        var dist = 6;
        var x = -30;
        
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
                case 7: 
                	colour = 0x00ff80;
                	break;
                
            } 

            var bar = this.getBox(x, 0, 0, colour);
            this.scene.add(bar);
            this.bars.push(bar);
            x += dist;
        }
    }

    // Return the element at the front of the queue
    rear(element, time, delay) {

    	var tween = new TWEEN.Tween(element.scale)
    		.to({x: 2, y: 2, z: 2}, time)
    		.delay(delay)
    		.easing(TWEEN.Easing.Quadratic.In)
    		.onComplete(function() {
    			tweenBack.start();
    		})
    		.start();

    	var tweenBack = new TWEEN.Tween(element.scale)
    		.to({x: 1, y: 1, z: 1}, time)
    		.easing(TWEEN.Easing.Quadratic.In);
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
