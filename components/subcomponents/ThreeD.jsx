"use client"
import { useEffect } from 'react';
import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function ThreeJSComponent() {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xD0BFFF);

    // Create a camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 25);
    camera.lookAt(scene.position);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Create controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;

    // Create lights
    const ambientLight = new THREE.AmbientLight('red', 0.5);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight('red', 3);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Define the surface function
    function surface(u, v, target) {
      const n = 10; // larger values make sharper square
      const t = 1.5; // larger values make more twists

      u *= 2 * Math.PI;
      v *= 2 * Math.PI;

      const r = (Math.cos(v) ** n + Math.sin(v) ** n) ** (-1 / n);
      const x = (4 + r * Math.cos(v + t * u)) * Math.cos(u);
      const y = (4 + r * Math.cos(v + t * u)) * Math.sin(u);
      const z = r * Math.sin(v + t * u);

      target.set(x, y, z);
    }

    // Create geometry
    const geometry = new ParametricGeometry(surface, 100, 100);

    const object = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
    scene.add(object);

    // Animation loop using requestAnimationFrame
    function animationLoop(t) {
      object.rotation.z = t / 2700;

      controls.update();
      light.position.copy(camera.position);
      renderer.render(scene, camera);

      requestAnimationFrame(animationLoop);
    }

    // Start the animation loop
    animationLoop(0);

    // Cleanup function
    return () => {
      // Remove the renderer's DOM element on unmount
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}
