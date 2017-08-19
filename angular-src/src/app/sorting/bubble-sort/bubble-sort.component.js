// Global variables
    var bars = [];
    var xCoords = [];
    var camera, renderer;
    var time = 100;
    var delay = 0;

    // once everything is loaded, we run our Three.js stuff.
    function init() {

        var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // position and point the camera to the center of the scene
        camera.position.x = -30;
        camera.position.y = 2;
        camera.position.z = 80;
        camera.lookAt(scene.position);

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x323232);
        scene.add(ambientLight);

        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-100, 40, 60);

        scene.add(spotLight);

        // create a render and set the size
        renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0x000000, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // add the output of the renderer to the html element
        document.getElementById("WebGL").appendChild(renderer.domElement);

        // Display the bars
        var dist = 0;
        var x = -20;
        
        // Create 20 bars
        for(var i = 0; i < 20; i++) {
            var bar = getBar(x, dist);
            dist += 3;
            bars.push(bar);
            xCoords.push(bar.position.x);
            scene.add(bar);
        }

    
        // Useful variables
        var n = bars.length;
        var last = bars.length - 1;
        
        for(var i = 0; i < n - 1; i++) {

            for(var j = 0; j < n-i-1; j++) {

                // Change colour when compare
                changeColour(bars[j], time, delay, 0xff0080);
                changeColour(bars[j+1], time, delay, 0xff0080);
                delay += time;

                // Change position if current is greater than the next one
            if(bars[j].geometry.parameters.height > bars[j+1].geometry.parameters.height && bars[j+1]) {

                var x1 = xCoords[j];
                var x2 = xCoords[j+1];

                swap(bars[j], bars[j+1], x1, x2, time, delay);
                delay += time;

                var temp = bars[j];
                bars[j] = bars[j+1];
                bars[j+1] = temp;

                // Turn them back to green
                changeColour(bars[j], time, delay, 0x00ff00);
                changeColour(bars[j+1], time, delay, 0x00ff00);
                
                // Increment delay
                delay += time;

            } else {

                // Turn them back to green
                changeColour(bars[j], time, delay, 0x00ff00);
                changeColour(bars[j+1], time, delay, 0x00ff00);
                
                // Increment delay
                delay += time;
                
            }  

            // 
            if(j == last - 1) {
                changeColour(bars[last], time, delay, 0x0000ff);
                last -= 1;
                delay += time;
            }

            if(j == 0 && last == 0) {
                changeColour(bars[0], time, delay, 0x0000ff);
            }

            }   

        }


        // Call the render function
        render();

        function render() {

                stats.update();
                
              TWEEN.update();
            
            requestAnimationFrame( render );

            renderer.render(scene,camera);
        }


        function initStats() {

            var stats = new Stats();

            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.getElementById("Stats").appendChild(stats.domElement);

            return stats;
        }
    }
    
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Change colour to show comparison
    function changeColour(element, time, delay, hex) {

        var tween = new TWEEN.Tween(element.material.color)
            .to({hex: hex}, time)
            .delay(delay)
            .onUpdate(function() {
                element.material.color.setHex(hex);
            })
            .start();
    }

    // Swap elements
    function swap(element1, element2, x1, x2, time, delay) {

        var tween = new TWEEN.Tween({x: x1})
            .to({x: x2}, time)
            .delay(delay)
            .onUpdate(function() {
                element1.position.x = this.x;
            })
            .easing(TWEEN.Easing.Quartic.In)
            .onStart(function() {
                new TWEEN.Tween({x: x2})
                    .to({x: x1}, time)
                    .onUpdate(function() {
                        element2.position.x = this.x
                    })
                    .easing(TWEEN.Easing.Quartic.In)
                    .start();
            })
            .start();
    }
    

    // Create one bar
    function getBar(x, dist) {

        var geometry = new THREE.BoxGeometry(2, ((Math.random() * 60) + 5), 2);
        var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);

            cube.position.x = x + dist;
            cube.position.y = -5;
            cube.position.z = 0;

        return cube;    
    }

    window.onload = init;

    // listen to the resize events
    window.addEventListener('resize', onResize, false);