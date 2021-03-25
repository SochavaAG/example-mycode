(function ($) {
  $(function () {

    var container;
    var scene, camera, light, renderer;
    var geometry, cube, mesh, material;
    var mouse, center;
    var stats;
    var video, texture;

    function init() {
      container = document.createElement('div');
      document.body.appendChild(container);

      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      // container.appendChild(stats.domElement);

      scene = new THREE.Scene();
      center = new THREE.Vector3();
      center.z = - 1000;

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(0, 0, 500);
      scene.add(camera);

      video = document.createElement('video');
      video.addEventListener('loadedmetadata', function (event) {

        texture = new THREE.Texture(video);

        var width = 640, height = 480;
        var nearClipping = 850, farClipping = 4000;

        geometry = new THREE.Geometry();

        for (var i = 0, l = width * height; i < l; i++) {
          var position = new THREE.Vector3();
          position.x = (i % width);
          position.y = Math.floor(i / width);
          geometry.vertices.push(new THREE.Vertex(position));
        }

        material = new THREE.ShaderMaterial({
          uniforms: {
            "map": {type: "t", value: 0, texture: texture},
            "width": {type: "f", value: width},
            "height": {type: "f", value: height},
            "nearClipping": {type: "f", value: nearClipping},
            "farClipping": {type: "f", value: farClipping}
          },
          vertexShader: document.getElementById('vs').textContent,
          fragmentShader: document.getElementById('fs').textContent,
          depthWrite: false
        });

        mesh = new THREE['ParticleSystem'](geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        scene.add( mesh );

        setInterval(function () {
          if (video.readyState === video.HAVE_ENOUGH_DATA) {
            texture.needsUpdate = true;
          }
        }, 1000 / 30);

      }, false );
      video.loop = true;
      video.src = '/assets/kinect/kinect.webm';
      video.play();

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      mouse = new THREE.Vector3(0, 0, 1);
      projector = new THREE.Projector();
      ray = new THREE.Ray(camera.position);

      document.addEventListener('mousemove', onDocumentMouseMove, false);
    }

    function onDocumentMouseMove( event ) {
      mouse.x = (event.clientX - window.innerWidth / 2) * 8;
      mouse.y = (event.clientY - window.innerHeight / 2) * 8;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
      stats.update();
    }

    function render() {
      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (- mouse.y - camera.position.y) * 0.05;
      camera.lookAt(center);

      renderer.render(scene, camera);
    }

    if (Detector.webgl) {
      init();
      animate();
    } else {
      document.body.appendChild(Detector.getWebGLErrorMessage());
    }

  });
})(jQuery);