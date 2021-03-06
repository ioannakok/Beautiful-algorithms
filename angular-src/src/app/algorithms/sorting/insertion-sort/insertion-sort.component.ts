import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js/src/Tween';
import { Algorithm } from '../../algorithm.model';
import { AlgorithmsService } from '../../algorithms.service';
import { OnInteract} from '../../interact';


@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css'],
  providers: [AlgorithmsService]
})

export class InsertionSortComponent implements OnInit, OnInteract {

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
  pseudo5 = null;
  
  // Java snippets
  java2 = null;
  java3 = null;
  java4 = null;
  java5 = null;
  java6 = null;
  java7 = null;
  java9 = null;
  
  // Python snippets
  python1 = null;
  python2 = null;
  python3 = null;
  python4 = null;
  python5 = null;
  python6 = null;
  python7 = null;
  
  // C++ snippets
  c3 = null;
  c4 = null;
  c5 = null;
  c6 = null;
  c7 = null;
  c8 = null;
  c10 = null;
  
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
    
    this.algorithm = this.algorithmsService.getAlgorithm(1);
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
        this.pseudo5 = document.getElementById('pseudo5');
        this.code.push(this.pseudo5);

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
        this.java7 = document.getElementById('java7');
        this.code.push(this.java7);
        this.java9 = document.getElementById('java9');
        this.code.push(this.java9);

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
        this.c8 = document.getElementById('c8');
        this.code.push(this.c8);
        this.c10 = document.getElementById('c10');
        this.code.push(this.c10);
        
}


/* Animate function. It updates all the animations */  
  animate() {
        window.requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        // If animation starts now, run bubbleSort once
        if(this.animation && !this.initAnim) {
          this.insertionSort();
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

    // Remove a bar from the scene
    removeBar(bar) {
            this.scene.remove(bar);
            bar.geometry.dispose();
            bar.material.dispose();
            bar = undefined;
    }

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

    // Function to show that we extract key and return it to the array
    moveKey(element, time, delay, z1, z2, movement) {

      var tween = new TWEEN.Tween({z: z1})
          .to({z: z2}, time)
          .delay(delay)
          .onUpdate(function() {
            if(element.position.z < z2)
              element.translateZ(movement);
            if(element.position.z > z2)
              element.translateZ(-movement);
          })
          .start();
    }


    // Insertion sort method
    insertionSort() {

      // Length of the array
      var n = this.bars.length;

      // Mark first element as sorted
      this.changeColour(this.bars[0], this.time, this.delay, 0x997d17);
      this.animateCode(this.pseudo0, this.time, this.delay);
      this.delay += this.time;
      
      for(var i = 1; i < n; i++) {

                var key = i 

                // Select first element of unsorted list as key
                this.changeColour(this.bars[key], this.time, this.delay, 0x7d1799);

                // Animate Java, Python, C++
                this.animateCode(this.java2, this.time, this.delay);
                this.animateCode(this.python1, this.time, this.delay);
                this.animateCode(this.c3, this.time, this.delay);
                this.animateCode(this.pseudo1, this.time, this.delay);

                
                this.delay += this.time;

                // Extract element from the list
                this.moveKey(this.bars[key], this.time, this.delay, 0, 12, 0.2);

                // Animate Java, Python, C++
                this.animateCode(this.java3, this.time, this.delay);
                this.animateCode(this.python2, this.time, this.delay);
                this.animateCode(this.c4, this.time, this.delay);
                this.animateCode(this.pseudo2, this.time, this.delay);
                
                this.delay += this.time;

                //Compare key with previous elements
                for(var j = i-1; j >= 0 ; j--) {
                    
                    // Animate Java, Python, C++
                    var time = this.time / 2;  
                    var delay = this.delay;

                    if(j == i-1) {
                      this.animateCode(this.java4, time, delay);
                      this.animateCode(this.python3, time, delay);
                      this.animateCode(this.c5, time, delay);
                      delay += time;
                      this.animateCode(this.java5, time, delay);
                      this.animateCode(this.python4, time, delay);
                      this.animateCode(this.c6, time, delay);
                      this.animateCode(this.pseudo3, this.time, this.delay);
                    
                    } else {
                      this.animateCode(this.java7, time, delay);
                      this.animateCode(this.python6, time, delay);
                      this.animateCode(this.c8, time, delay);
                      delay += time;
                      this.animateCode(this.java5, time, delay);
                      this.animateCode(this.python4, time, delay);
                      this.animateCode(this.c6, time, delay);
                      this.animateCode(this.pseudo3, this.time, this.delay);
                    }
                    

                    this.changeColour(this.bars[j], this.time, this.delay, 0x173399);
                    this.delay += this.time;

                    // Get height of elements compared
                    var curHeight = this.bars[key].geometry.parameters.height;
                    var prevHeight = this.bars[j].geometry.parameters.height;

                    // Get x position of elements compared
                    var curX = this.xCoords[key];
                    var prevX = this.xCoords[j];

                    // If the previous element is greater than the key
                    if(curHeight < prevHeight) {

                      // Swap elements
                      this.swap(this.bars[j], this.bars[key], prevX, curX, this.time, this.delay);

                      // Animate Java, Python, C++
                      this.animateCode(this.java6, this.time, this.delay);
                      this.animateCode(this.python5, this.time, this.delay);
                      this.animateCode(this.c7, this.time, this.delay);
                      this.animateCode(this.pseudo4, this.time, this.delay);

                      this.delay += this.time;

                      var temp = this.bars[key];
                      this.bars[key] = this.bars[j];
                      this.bars[j] = temp;

                      // Mark key as sorted
                      this.changeColour(this.bars[key], this.time, this.delay, 0x997d17);
                      this.delay += this.time;

                      key -= 1;

                      // Mark first element as sorted
                      if(key == 0) {
                        this.moveKey(this.bars[key], this.time, this.delay, 12, 0, 0.2);

                        // Animate Java, Python, C++
                        this.animateCode(this.java9, this.time, this.delay);
                        this.animateCode(this.python7, this.time, this.delay);
                        this.animateCode(this.c10, this.time, this.delay);
                        this.animateCode(this.pseudo5, this.time, this.delay);
                        this.delay += this.time;

                        this.changeColour(this.bars[j], this.time, this.delay, 0x997d17);
                        this.delay += this.time;

                        this.changeColour(this.bars[key], this.time, this.delay, 0x997d17);
                        this.delay += this.time; 
                      }
                    
                    } else {

                        // Otherwise, mark key and previous element as sorted
                        this.changeColour(this.bars[j], this.time, this.delay, 0x997d17);
                        this.delay += this.time;

                        this.moveKey(this.bars[key], this.time, this.delay, 12, 0, 0.2);

                        // Animate Java, Python, C++
                        this.animateCode(this.java9, this.time, this.delay);
                        this.animateCode(this.python7, this.time, this.delay);
                        this.animateCode(this.c10, this.time, this.delay);
                        this.delay += this.time;

                        this.changeColour(this.bars[key], this.time, this.delay, 0x997d17);
                        this.delay += this.time;  

                        break;
                    }
                }          
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


