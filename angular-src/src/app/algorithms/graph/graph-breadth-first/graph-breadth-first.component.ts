import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';
import { Graph } from '../graph';
import { Vertex } from '../graph';
import { Algorithm } from '../../algorithm.model';
import { AlgorithmsService } from '../../algorithms.service';
import { OnInteract} from '../../interact';

@Component({
  selector: 'app-graph-breadth-first',
  templateUrl: './graph-breadth-first.component.html',
  styleUrls: ['./graph-breadth-first.component.css'],
  providers: [AlgorithmsService]
})
export class GraphBreadthFirstComponent implements OnInit, OnInteract {

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

    // Pseudocode
    pseudo0 = null;
    pseudo1 = null;
    pseudo2 = null;
    pseudo3 = null;
    pseudo4 = null;
    pseudo5 = null;
    pseudo6 = null;
    pseudo7 = null;
    pseudo8 = null;
    pseudo9 = null;
    pseudo10 = null;
    pseudo11 = null;

    // Java
    java1 = null;
    java2 = null;
    java4 = null;
    java6 = null;
    java7 = null;
    java8 = null;
    java10 = null;
    java11 = null;
    java12 = null;
    java14 = null;
    java16 = null;
    java17 = null;

    // Python
    python1 = null;
    python2 = null;
    python3 = null;
    python4 = null;
    python5 = null;
    python6 = null;
    python7 = null;
    python8 = null;
    python9 = null;
    python10 = null;
    python11 = null;
    python12 = null;

    // C++
    c2 = null;
    c3 = null;
    c5 = null;
    c7 = null;
    c8 = null;
    c9 = null;
    c11 = null;
    c12 = null;
    c13 = null;
    c14 = null;
    c16 = null;
    c18 = null;
    c19 = null;



  constructor(private algorithmsService: AlgorithmsService) { 

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

  ngOnInit() {
    
    this.algorithm = this.algorithmsService.getAlgorithm(21);
  }

  	 ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
        this.renderer.setClearColor(0xffffff);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();  

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
        this.pseudo5 = document.getElementById('pseudo5');
        this.code.push(this.pseudo5);
        this.pseudo6 = document.getElementById('pseudo6');
        this.code.push(this.pseudo6);
        this.pseudo7 = document.getElementById('pseudo7');
        this.code.push(this.pseudo7);
        this.pseudo8 = document.getElementById('pseudo8');
        this.code.push(this.pseudo8);
        this.pseudo9 = document.getElementById('pseudo9');
        this.code.push(this.pseudo9);
        this.pseudo10 = document.getElementById('pseudo10');
        this.code.push(this.pseudo10);
        this.pseudo11 = document.getElementById('pseudo11');
        this.code.push(this.pseudo11);


        // Java elements
        this.java1 = document.getElementById('java1');
        this.code.push(this.java1);
        this.java2 = document.getElementById('java2');
        this.code.push(this.java2);
        this.java4 = document.getElementById('java4');
        this.code.push(this.java4);
        this.java6 = document.getElementById('java6');
        this.code.push(this.java6);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        this.java8 = document.getElementById('java8');
        this.code.push(this.java8);
        this.java10 = document.getElementById('java10');
        this.code.push(this.java10);
        this.java11 = document.getElementById('java11');
        this.code.push(this.java11);
        this.java12 = document.getElementById('java12');
        this.code.push(this.java12);
        this.java14 = document.getElementById('java14');
        this.code.push(this.java14);
        this.java16 = document.getElementById('java16');
        this.code.push(this.java16);
        this.java17 = document.getElementById('java17');
        this.code.push(this.java17);
        

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
        this.python9 = document.getElementById('python9');
        this.code.push(this.python9);
        this.python10 = document.getElementById('python10');
        this.code.push(this.python10);
        this.python11 = document.getElementById('python11');
        this.code.push(this.python11);
        this.python12 = document.getElementById('python12');
        this.code.push(this.python12);

        // C++ elements
        this.c2 = document.getElementById('c2');
        this.code.push(this.c2);
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c5 = document.getElementById('c5');
        this.code.push(this.c5);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);
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
        this.c14 = document.getElementById('c14');
        this.code.push(this.c14);
        this.c16 = document.getElementById('c16');
        this.code.push(this.c16);
        this.c18 = document.getElementById('c18');
        this.code.push(this.c18);
        this.c19 = document.getElementById('c19');
        this.code.push(this.c19);
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
    // Modification fromGC05 - Algorithmics module
    breadthFirst() {

        // Create a queue
        var queue = [];
        this.animateCode(this.java1, this.time, this.delay);
        this.animateCode(this.python1, this.time, this.delay);
        this.animateCode(this.c2, this.time, this.delay);
        this.animateCode(this.pseudo0, this.time, this.delay);
        this.delay += this.time;

        // For all the vertices
        for(var i=0; i < this.vertices.length; i++) {

            this.animateCode(this.java2, this.time, this.delay);
            this.animateCode(this.python2, this.time, this.delay);
            this.animateCode(this.c3, this.time, this.delay);
            this.animateCode(this.pseudo1, this.time, this.delay);
            this.delay += this.time;

            this.animateCode(this.java4, this.time, this.delay);
            this.animateCode(this.python3, this.time, this.delay);
            this.animateCode(this.c5, this.time, this.delay);
            this.animateCode(this.pseudo2, this.time, this.delay);
            this.delay += this.time;

            if(!this.vertices[i].visited) {
                
                // Mark as visited
                this.vertices[i].visited = true;
                this.animateCode(this.java6, this.time, this.delay);
                this.animateCode(this.python4, this.time, this.delay);
                this.animateCode(this.c7, this.time, this.delay);
                this.animateCode(this.pseudo3, this.time, this.delay);
                this.delay += this.time;
                
                // Enqueue vertex
                queue.push(this.vertices[i]);
                this.animateCode(this.java7, this.time, this.delay);
                this.animateCode(this.python5, this.time, this.delay);
                this.animateCode(this.c8, this.time, this.delay);
                this.animateCode(this.pseudo4, this.time, this.delay);
                this.delay += this.time;

                this.animateCode(this.java8, this.time, this.delay);
                this.animateCode(this.python6, this.time, this.delay);
                this.animateCode(this.c9, this.time, this.delay);
                this.animateCode(this.pseudo5, this.time, this.delay);
                this.delay += this.time;

                // While queue is not empty
                while(queue.length !=0) {

                    // Deque the first element
                    var v = queue.shift();
                    this.animateCode(this.java10, this.time, this.delay);
                    this.animateCode(this.python7, this.time, this.delay);
                    this.animateCode(this.c11, this.time, this.delay);
                    this.animateCode(this.c12, this.time, this.delay);
                    this.animateCode(this.pseudo6, this.time, this.delay);
                    this.delay += this.time;
                    

                    // Show its value
                    this.changeColour(v.sphere, this.time, this.delay, 0x1a3abc);
                    this.resize(v.sphere, this.time, this.delay);
                    this.animateCode(this.java11, this.time, this.delay);
                    this.animateCode(this.python8, this.time, this.delay);
                    this.animateCode(this.c13, this.time, this.delay);
                    this.animateCode(this.pseudo7, this.time, this.delay);
                    
                    this.delay += this.time;

                    this.animateCode(this.java12, this.time, this.delay);
                    this.animateCode(this.python9, this.time, this.delay);
                    this.animateCode(this.c14, this.time, this.delay);
                    this.animateCode(this.pseudo8, this.time, this.delay);
                    this.delay += this.time;

                    // Add its edges in the queue
                    for(var j=0; j < v.edges.length; j++) {

                        this.animateCode(this.java14, this.time, this.delay);
                        this.animateCode(this.python10, this.time, this.delay);
                        this.animateCode(this.c16, this.time, this.delay);
                        this.animateCode(this.pseudo9, this.time, this.delay);
                        this.delay += this.time;

                        if(!v.edges[j].visited) {

                            this.animateCode(this.java16, this.time, this.delay);
                            this.animateCode(this.python11, this.time, this.delay);
                            this.animateCode(this.c18, this.time, this.delay);
                            this.animateCode(this.pseudo10, this.time, this.delay);
                    
                            queue.push(v.edges[j]);

                            // Shows that an element has been added in the queue but not traversed yet
                            this.changeColour(v.edges[j].sphere, this.time, this.delay, 0xe600e6);
                            this.delay += this.time;

                            this.animateCode(this.java17, this.time, this.delay);
                            this.animateCode(this.python12, this.time, this.delay);
                            this.animateCode(this.c19, this.time, this.delay);
                            this.animateCode(this.pseudo11, this.time, this.delay);
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



