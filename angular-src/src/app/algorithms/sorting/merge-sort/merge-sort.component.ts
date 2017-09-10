import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent {

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

    // Arrays for elements and their properties
    spheres = [];
    yCoords = [];
    xCoords = [];
    radii = [];
    colours = [];
    
    // Boolean variables to control animation
    animation = false;
    initAnim = false;
    paused = false;
    pauseStart = null;
    tweens = [];
    button = null;

    // Pseudocode snippets
    

    // Java snippets
    

    // Python snippets
    

    // C++ snippets
    

    // Array for all the snippets
    code = [];

  	constructor() { 

  		// Add camera
  		this.scene = new THREE.Scene();

  		// Position the camera
    	this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	    this.camera.position.x = 0;
	    this.camera.position.y = 50;
	    this.camera.position.z = 60;
	    this.camera.lookAt(this.scene.position);

	    // Add subtle ambient lighting
	    const ambientLight = new THREE.AmbientLight(0x323232);
	    this.scene.add(ambientLight);

	    // Add spotlight for the shadows
	    const spotLight = new THREE.SpotLight(0xffffff);
	    spotLight.position.set(-100, 40, 60);
	    this.scene.add(spotLight);

	    // Create bars
	    //this.createBars(8);  

	    //var radius = ((Math.random() * 5) + 1);
	    //var x = -50;
	    //var dist = 0;
	    //var colour = 0x0000ff;

	    //var sphere = this.getSphere(radius, x, dist, colour);
	    //this.scene.add(sphere);

	    this.createSpheres();
  	}

  	ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

        /* Initialise all elements and push them in the code array */

        // Pseudocode elements
        
        // Java elements
        
        // Python elements
        

        // C++ elements
        
}

	/* Animate function. It updates all the animations */  
  	animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {
            
        	

            this.mergeSort(this.spheres, 0.3);

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
        
        // Remove all spheres from the scene
        for(var i=0; i < this.spheres.length; i++) {
            this.removeBar(this.spheres[i]);
        }
        
        // Empty the array of spheres
        this.spheres = [];
        this.xCoords = [];

        // Create new set of spheres
        //this.createBars(20);

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


    // Function to create on sphere
    getSphere(radius, x, dist, colour) {

    	var geometry = new THREE.SphereGeometry(radius, 24, 24);
        var material = new THREE.MeshPhongMaterial({color: colour});
        var sphere = new THREE.Mesh(geometry, material);

        sphere.position.x = x + dist;
        sphere.position.y = 20;
        sphere.position.z = 0;

        return sphere;    
    }

    // Function that creates 8 spheres and adds them to the scene
    createSpheres() {

    	var x = -45;
    	var dist = 0;

    	// Create 8 spheres
    	for(var i = 0; i < 8; i++) {

            var radius = ((Math.random() * 5) + 1);
            
            // Distance relative to sphere size
            if(i > 0) {
                dist = this.radii[i-1] + radius + 2;
            }

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

            var sphere = this.getSphere(radius, x, dist, colour);
            x += dist; 

            this.spheres.push(sphere);
            this.xCoords.push(sphere.position.x);
            this.yCoords.push(sphere.position.y);
            this.radii.push(radius);
            this.colours.push(colour);
            this.scene.add(sphere);
        }

    }

    // Function that moves a sphere
    move(sphere, x1, x2, xDir, y1, y2, yDir, time, delay) {

        var tween = new TWEEN.Tween({x: x1, y: y1})
            .to({x: x2, y: y2}, time)
            .delay(delay)
            .onUpdate(function() {
            	if(sphere.position.y > y2) {
            		sphere.translateX(xDir);
                	sphere.translateY(yDir);
            	}
                
            })
            .start();
    }

    
    // It sorts the array
    mergeSort(array, dir) {

    	var n = array.length;

    	if(n < 2)
    		return;


    	var middle = n / 2;
    	var left = [];
    	var right = [];

    	for(var i=0; i < middle; i++) {

    		left.push(array[i]);

    		var x1 = this.xCoords[i];
    		var x2 = x1 + this.radii[i-1] + this.radii[i] + 9;

    		var xDir = 0;
    		xDir = -dir;
    		var yDir = -0.25;

    		this.xCoords[i] = x2;
    			
    		var y1 = this.yCoords[i];
    		var y2 = y1 - 15;
    		this.yCoords[i] = y2;

    		this.move(array[i], x1, x2, xDir, y1, y2, yDir, this.time, this.delay);
    	}

    	for(var i=middle; i < n; i++) {
    		
    		right.push(array[i]);

    		var x1 = this.xCoords[i];
    		var x2 = x1 + this.radii[i-1] + this.radii[i] + 9;

    		var xDir = 0;
    		xDir = dir;
    		var yDir = -0.25;

    		this.xCoords[i] = x2;
    			
    		var y1 = this.yCoords[i];
    		var y2 = y1 - 15;
    		this.yCoords[i] = y2;

    		this.move(array[i], x1, x2, xDir, y1, y2, yDir, this.time, this.delay);
    	}

    		this.delay += this.time;

    		this.mergeSort(left, dir - 0.1);
    		this.mergeSort(right, dir - 0.1);  

    		this.merge(left, right, array);	

    }

    // Merges two sorted arrays
    merge(left, right, array) {

    	var nL = left.length;
    	var nR = right.length;
    	var i = 0;
    	var j = 0;
    	var k = 0;

    	while(i < nL && j < nR) {

    		this.changeColour(left[i], this.time, this.delay, 0x0000ff);
    		this.changeColour(right[j], this.time, this.delay, 0x0000ff);
    		this.delay += this.time;

    		console.log(left[i]);
    		console.log(right[j]);

    		if(left[i].geometry.parameters.radius <= right[j].geometry.parameters.radius) {
    			

    			array[k] = left[i];

    			var x1 = array[k].position.x;
    			var x2 = x1 + 5;
    			var xDir = 0.2;
    			var y1 = array[k].position.y;
    			var y2 = y1 + 10;
    			var yDir = 0.2
    			this.move(array[k], x1, x2, xDir, y1, y2, yDir, this.time, this.delay);




    			i += 1;
    		} else {
    			array[k] = right[j];
    			j += 1;
    		}

    		k += 1;
    	}


    } 


    // Remove a bar from the scene
    removeBar(bar) {
            this.scene.remove(bar);
            bar.geometry.dispose();
            bar.material.dispose();
            bar = undefined;
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
