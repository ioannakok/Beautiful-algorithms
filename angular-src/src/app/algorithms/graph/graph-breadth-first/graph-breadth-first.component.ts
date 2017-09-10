import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';
import { Graph } from '../graph'
import { Vertex } from '../graph'

@Component({
  selector: 'app-graph-breadth-first',
  templateUrl: './graph-breadth-first.component.html',
  styleUrls: ['./graph-breadth-first.component.css']
})
export class GraphBreadthFirstComponent {

	@ViewChild('rendererContainer') rendererContainer: ElementRef;

	@HostListener('window:resize', ['$event'])
		onWindowResize(event) {
    	this.renderer.setSize(event.target.innerWidth / 2.5, event.target.innerHeight / 2.5)
	}

    // Properties
    renderer = new THREE.WebGLRenderer();
    scene = null;
    camera = null;

    // Control time and delay of animation
    time = 1000;
    delay = 0;

    // Tree and nodes
    graph = new Graph();
    vertices = [];
    edges = [];

    // Boolean variables to control animation
    animation = false;
    initAnim = false;
    paused = false;
    pauseStart = null;
    tweens = [];
    button = null;
    finished = false;

    // Code snippets
    code = [];

    // Java
    java2 = null;
    java3 = null;
    java4 = null;
    java5 = null;
    java6 = null;

    // Python
    python2 = null;
    python3 = null;
    python4 = null;
    python5 = null;

    // C++
    c3 = null;
    c4 = null;
    c5 = null;
    c6 = null;
    c7 = null;



  constructor() { 

  		// Add camera
  	this.scene = new THREE.Scene();

  	// Position the camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 70;
    this.camera.lookAt(this.scene.position);

    // Add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0x323232);
    this.scene.add(ambientLight);

    // Add spotlight for the shadows
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-100, 40, 60);
    this.scene.add(spotLight);

    this.createGraph();
    

  }

  	 ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

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
        this.c6 = document.getElementById('c6');
        this.code.push(this.c6);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);
      }


    /* Animate function. It updates all the animations */  
  	animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // Start animation
        if(this.animation && !this.initAnim) {            
            
            this.breadthFirst();

            for(var i=0; i < this.edges.length; i++) {
                this.changeColour(this.edges[i], this.time, 20000, 0xffff00);
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

        for(var i=0; i < this.vertices.length; i++) {
            this.removeVertex(this.vertices[i]);
        }
        
        // Clear graph and vertices array
        this.vertices = [];
        this.graph = null;
        
        // Create graph
        this.graph = new Graph();
        this.createGraph();
         
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


    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandom(min, max) {
        return Math.random() * (max - min) + min;

    }

    // Creates the graph
    createGraph() {

    // Create vertices and add them in the graph and the vertices array
        for(var i=0; i <15; i++) {
            var vertex = new Vertex(2.5);
            this.graph.addVertex(vertex);
            this.vertices.push(vertex);
    } 
        
        // Add the vertices in the scene
        this.placeVertex(this.vertices[0], -30, 20);
        this.placeVertex(this.vertices[1], 20, 0);
        this.placeVertex(this.vertices[2], 10, -20);
        this.placeVertex(this.vertices[3], -20, -5);
        this.placeVertex(this.vertices[4], 40, 7);
        this.placeVertex(this.vertices[5], -40, -15);
        this.placeVertex(this.vertices[6], 35, -12);
        this.placeVertex(this.vertices[7], 30, 20);
        this.placeVertex(this.vertices[8], -45, 17);
        this.placeVertex(this.vertices[9], 0, 14);
        this.placeVertex(this.vertices[10], 5, 0);
        this.placeVertex(this.vertices[11], -10, -17);
        this.placeVertex(this.vertices[12], 45, -20);
        this.placeVertex(this.vertices[13], -50, 0);
        this.placeVertex(this.vertices[14], 50, 20);

        // Create edges between vertices and add them in the scene
        this.vertices[0].addEdge(this.vertices[8]);
        this.placeEdge(this.vertices[0], this.vertices[8], 102 * Math.PI / 180);
        
        this.vertices[0].addEdge(this.vertices[3]);
        this.placeEdge(this.vertices[0], this.vertices[3], 22 * Math.PI / 180);

        this.vertices[0].addEdge(this.vertices[9]);
        this.placeEdge(this.vertices[0], this.vertices[9], 80 * Math.PI / 180);

        this.vertices[8].addEdge(this.vertices[3]);
        this.placeEdge(this.vertices[8], this.vertices[3], 45 * Math.PI / 180);

        this.vertices[8].addEdge(this.vertices[13]);
        this.placeEdge(this.vertices[8], this.vertices[13], -15 * Math.PI / 180);   

        this.vertices[13].addEdge(this.vertices[5]);
        this.placeEdge(this.vertices[13], this.vertices[5], 32 * Math.PI / 180); 

        this.vertices[5].addEdge(this.vertices[11]);
        this.placeEdge(this.vertices[5], this.vertices[11], 86 * Math.PI / 180); 

        this.vertices[3].addEdge(this.vertices[11]);
        this.placeEdge(this.vertices[3], this.vertices[11], 38 * Math.PI / 180);     

        this.vertices[3].addEdge(this.vertices[10]);
        this.placeEdge(this.vertices[3], this.vertices[10], 100 * Math.PI / 180);

        this.vertices[9].addEdge(this.vertices[10]);
        this.placeEdge(this.vertices[9], this.vertices[10], 20 * Math.PI / 180);

        this.vertices[9].addEdge(this.vertices[7]);
        this.placeEdge(this.vertices[9], this.vertices[7], 100 * Math.PI / 180);

        this.vertices[10].addEdge(this.vertices[1]);
        this.placeEdge(this.vertices[10], this.vertices[1], Math.PI / 2);

        this.vertices[7].addEdge(this.vertices[1]);
        this.placeEdge(this.vertices[7], this.vertices[1], -25 * Math.PI / 180);

        this.vertices[1].addEdge(this.vertices[2]);
        this.placeEdge(this.vertices[1], this.vertices[2], -25 * Math.PI / 180);

        this.vertices[7].addEdge(this.vertices[14]);
        this.placeEdge(this.vertices[7], this.vertices[14], Math.PI / 2);

        this.vertices[1].addEdge(this.vertices[4]);
        this.placeEdge(this.vertices[1], this.vertices[4], 110 * Math.PI / 180);

        this.vertices[14].addEdge(this.vertices[12]);
        this.placeEdge(this.vertices[14], this.vertices[12], -6 * Math.PI / 180);

        this.vertices[4].addEdge(this.vertices[6]);
        this.placeEdge(this.vertices[4], this.vertices[6], -12 * Math.PI / 180);

        this.vertices[4].addEdge(this.vertices[12]);
        this.placeEdge(this.vertices[4], this.vertices[12], 7 * Math.PI / 180);

        this.vertices[12].addEdge(this.vertices[2]);
        this.placeEdge(this.vertices[12], this.vertices[2], Math.PI / 2);

    }

    // Adds a vertex in the scene
    placeVertex(vertex, x, y) {

        vertex.sphere.position.x = x;
        vertex.sphere.position.y = y;

        this.scene.add(vertex.sphere);
    }

    // Adds an edge in the scene
    placeEdge(vertex1, vertex2, rotation) {

        var x = (vertex1.sphere.position.x + vertex2.sphere.position.x) / 2;
        var y = (vertex1.sphere.position.y + vertex2.sphere.position.y) / 2;
        
        var x1 = vertex1.sphere.position.x + vertex1.radius * Math.cos(Math.PI / 4);
        var y1 = vertex1.sphere.position.y + vertex1.radius * Math.sin(Math.PI / 4);

        var x2 = vertex2.sphere.position.x + vertex2.radius * Math.cos(Math.PI / 4);
        var y2 = vertex2.sphere.position.y + vertex2.radius * Math.sin(Math.PI / 4);

        var height = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        var edge = this.getCylinder(height, x, y, rotation);
        this.edges.push(edge);

        this.scene.add(edge);

    }

    // Removes a vertex from the scene
    removeVertex(vertex) {
        
        this.scene.remove(vertex.sphere);
        vertex.sphere.geometry.dispose();
        vertex.sphere.material.dispose();
        vertex = undefined;
    }

    /* Functions for 3D animation */

    // Implements breadth first traversal
    // GC05 - Algorithmics module
    breadthFirst() {

        // Create a queue
        var queue = [];

        // For all the vertices
        for(var i=0; i < this.vertices.length; i++) {
            if(!this.vertices[i].visited) {

                // Mark as visited
                this.vertices[i].visited = true;
                
                // Enqueue vertex
                queue.push(this.vertices[i]);

                // While queue is not empty
                while(queue.length !=0) {

                    // Deque the first element
                    var v = queue.shift();

                    // Show its value
                    this.changeColour(v.sphere, this.time, this.delay, 0x1a3abc);
                    this.resize(v.sphere, this.time, this.delay);
                    this.delay += this.time;

                    // Add its edges in the queue
                    for(var j=0; j < v.edges.length; j++) {
                        if(!v.edges[j].visited) {
                            queue.push(v.edges[j]);

                            // Shows that an element has been added in the queue but not traversed yet
                            this.changeColour(v.edges[j].sphere, this.time, this.delay, 0xe600e6);
                            this.delay += this.time;

                            v.edges[j].visited = true;     
                        }
                    }
                }
            }
        }

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
	
	// Creates the edges of the graph
        getCylinder(height, x, y, rotation) {

            var material = new THREE.MeshPhongMaterial({color: 0x3abc1a});
            var geometry = new THREE.CylinderGeometry(0.5, 0.5, height);
        
            var cylinder = new THREE.Mesh( geometry, material );

            cylinder.position.x = x;
            cylinder.position.y = y;
            cylinder.rotation.z = rotation;
        
            return cylinder;
        }


	// Resize an element. It is called when a vertex is visited
	    resize(element, time, delay) {

    	var tween = new TWEEN.Tween(element.scale)
    		.to({x: 2, y: 2, z: 2}, time)
    		.easing(TWEEN.Easing.Quadratic.In)
    		.delay(delay)
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



