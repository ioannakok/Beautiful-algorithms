import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';
import { Node } from '../bst';
import { Tree } from '../bst';
import { Algorithm } from '../../algorithm.model';
import { AlgorithmsService } from '../../algorithms.service';
import { OnInteract} from '../../interact';


@Component({
  selector: 'app-bstlevelorder-traversal',
  templateUrl: './bstlevelorder-traversal.component.html',
  styleUrls: ['./bstlevelorder-traversal.component.css'],
  providers: [AlgorithmsService]
})
export class BSTLevelorderTraversalComponent implements OnInit, OnInteract{

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
    tree = null;
    nodes = [2.5, 1.5, 3.5, 4, 3, 1.4, 2, 1.1, 1.45, 1.8, 2.2, 2.7, 3.2, 3.7, 4.5];
    branches = [];

    // Boolean variables to control animation
    animation = false;
    initAnim = false;
    paused = false;
    pauseStart = null;
    tweens = [];
    button = null;

    // Code snippets
    code = [];

    //Pseudocode
    pseudo0 = null;
    pseudo1 = null;
    pseudo3 = null;
    pseudo4 = null;
    pseudo5 = null;
    pseudo6 = null;
    pseudo7 = null;
    pseudo8 = null;
    pseudo9 = null;

    // Java
    java1 = null;
    java2 = null;
    java3 = null;
    java4 = null;
    java7 = null;
    java8 = null;
    java9 = null;
    java10 = null;
    java11 = null;
    java12 = null;
    java13 = null;

    // Python
    python1 = null;
    python2 = null;
    python3 = null;
    python5 = null;
    python6 = null;
    python7 = null;
    python8 = null;
    python9 = null;
    python10 = null;
    python11 = null;

    // C++
    c1 = null;
    c2 = null;
    c3 = null;
    c4 = null;
    c7 = null;
    c8 = null;
    c9 = null;
    c10 = null;
    c11 = null;
    c12 = null;
    c13 = null;

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

    // Create tree
	this.createTree();

  	}

ngOnInit() {
    
    this.algorithm = this.algorithmsService.getAlgorithm(20);
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

        // Java elements
        this.java1 = document.getElementById('java1');
        this.code.push(this.java1);
        this.java2 = document.getElementById('java2');
        this.code.push(this.java2);
        this.java3 = document.getElementById('java3');
        this.code.push(this.java3);
        this.java4 = document.getElementById('java4');
        this.code.push(this.java4);
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        this.java8 = document.getElementById('java8');
        this.code.push(this.java8);
        this.java9 = document.getElementById('java9');
        this.code.push(this.java9);
        this.java10 = document.getElementById('java10');
        this.code.push(this.java10);
        this.java11 = document.getElementById('java11');
        this.code.push(this.java11);
        this.java12 = document.getElementById('java12');
        this.code.push(this.java12);
        this.java13 = document.getElementById('java13');
        this.code.push(this.java13);
        
        // Python elements
        this.python1 = document.getElementById('python1');
        this.code.push(this.python1);
        this.python2 = document.getElementById('python2');
        this.code.push(this.python2);
        this.python3 = document.getElementById('python3');
        this.code.push(this.python3);
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

        // C++ elements
        this.c1 = document.getElementById('c1');
        this.code.push(this.c1);
        this.c2 = document.getElementById('c2');
        this.code.push(this.c2);
        this.c3 = document.getElementById('c3');
        this.code.push(this.c3);
        this.c4 = document.getElementById('c4');
        this.code.push(this.c4);
        this.c7 = document.getElementById('c7');
        this.code.push(this.c7);
        this.c8 = document.getElementById('c8');
        this.code.push(this.c8);
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

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {
            this.levelOrderTraversal();

            for(var i=0; i < this.branches.length; i++) {
                this.changeColour(this.branches[i], 2000, 40000, 0x3abc1a);
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
        
        // Remove all nodes from the scene
        for(var i=0; i < this.nodes.length; i++) {
           this.removeNode(this.nodes[i]);
        }
        
        this.tree = null;

        // Create new tree
        this.createTree();

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
    
    // Creates atree and displays it
    createTree() {

    	this.tree = new Tree();
    	for(var i=0; i < this.nodes.length; i++) {
			this.tree.insert(this.nodes[i], 0x34bc13);
			var node = this.tree.retrieve(this.nodes[i]);

            if(node.branch)
                this.branches.push(node.branch);

			this.scene.add(node.sphere);
			this.scene.add(node.branch);
		}

    }

    // Removes a node from the scene
    removeNode(node) {
    	var n = this.tree.retrieve(node);
    	this.scene.remove(n.sphere);
    	n.sphere.geometry.dispose();
        n.sphere.material.dispose();
        n = undefined;
    }
	

    // Implementation of level order traversal
    // http://www.geeksforgeeks.org/level-order-tree-traversal/
    levelOrderTraversal() {

    	var h = 4;
    	var root = this.tree.retrieve(2.5);

        // Animate code
        this.animateCode(this.java3, this.time, this.delay);
        this.animateCode(this.python2, this.time, this.delay);
        this.animateCode(this.c3, this.time, this.delay);
        this.animateCode(this.pseudo0, this.time, this.delay);
        this.delay += this.time;

    	for(var i = 1; i <= h; i++) {

          // Animate code
          this.animateCode(this.python3, this.time, this.delay);
          this.animateCode(this.c4, this.time, this.delay);
          this.animateCode(this.java4, this.time, this.delay);
          this.animateCode(this.pseudo1, this.time, this.delay);
          this.delay += this.time;
      	  this.givenLevel(root, i);

    	}
    }
      
        givenLevel(node: Node, level: number) {

            // Animate code
            this.animateCode(this.java7, this.time, this.delay);
            this.animateCode(this.python5, this.time, this.delay);
            this.animateCode(this.c7, this.time, this.delay);
            this.animateCode(this.pseudo3, this.time, this.delay);
            this.delay += this.time;

            if(node == null) {

                // Animate code
                this.animateCode(this.java8, this.time, this.delay);
                this.animateCode(this.python6, this.time, this.delay);
                this.animateCode(this.c8, this.time, this.delay);
                this.animateCode(this.pseudo4, this.time, this.delay);
                this.delay += this.time;
                return;
            }
            
            // Animate code
            this.animateCode(this.java9, this.time, this.delay);
            this.animateCode(this.python7, this.time, this.delay);
            this.animateCode(this.c9, this.time, this.delay);
            this.animateCode(this.pseudo5, this.time, this.delay);
            this.delay += this.time;

            if(level == 1) {
                
                // Animate code and the node visited
                this.animateCode(this.java10, this.time, this.delay);
                this.animateCode(this.python8, this.time, this.delay);
                this.animateCode(this.c10, this.time, this.delay);
                this.animateCode(this.pseudo6, this.time, this.delay);

                this.changeColour(node.sphere, this.time, this.delay, 0x9c1abc);
                this.resize(node.sphere, this.time, this.delay);
                this.delay += this.time;
                
                // Animate code
                this.animateCode(this.java11, this.time, this.delay);
                this.animateCode(this.python9, this.time, this.delay);
                this.animateCode(this.c11, this.time, this.delay);
                this.delay += this.time;

            } else if(level > 1) {
                
                // Animate code
                this.animateCode(this.java12, this.time, this.delay);
                this.animateCode(this.python10, this.time, this.delay);
                this.animateCode(this.c12, this.time, this.delay);
                this.animateCode(this.pseudo8, this.time, this.delay);
                this.delay += this.time;

                // Recur left
                this.givenLevel(node.left, level - 1);

                // Animate code
                this.animateCode(this.java13, this.time, this.delay);
                this.animateCode(this.python11, this.time, this.delay);
                this.animateCode(this.c13, this.time, this.delay);
                this.animateCode(this.pseudo9, this.time, this.delay);
                this.delay += this.time;

                // Recur left
                this.givenLevel(node.right, level - 1);
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

        // Resize an element. It is called when a node is visited
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



