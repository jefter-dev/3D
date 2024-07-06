'use client'

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Col } from 'react-bootstrap';

export const Element3D = ({ fileElement, scaleElement = 0.6, frontElement = 0, cameraLockElement, moveElement, backgroundColorElement, cameraHelperElement = false, rotateElement = false, colorLight = "#ffffff", intensityLight = 3 }) => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, controls;

        const init = async () => {
            // Criando a cena
            scene = new THREE.Scene();
            sceneRef.current = scene;

            // Criando e posicionando a câmera
            camera = new THREE.PerspectiveCamera(50, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
            camera.position.set(0, 0, 2); // Ajuste inicial da posição da câmera
            cameraRef.current = camera;

            // Criando o renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
            renderer.setClearColor(backgroundColorElement, 1);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            // Adicionando uma luz ambiente
            const ambientLight = new THREE.AmbientLight(0xffffff, 2);
            scene.add(ambientLight);

            // Adicionando uma luz direcional
            const directionalLight = new THREE.DirectionalLight(colorLight, intensityLight);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            scene.add(directionalLight);

            if (cameraHelperElement) {
                scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));
            }

            // Adicionando controles de órbita
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.rotateSpeed = 1;
            controls.enabled = moveElement;
            controls.enablePan = cameraLockElement;
            controls.autoRotate = true; // Desativando a rotação automática
            controlsRef.current = controls;

            // Carregar o modelo GLTF
            const loader = new GLTFLoader();
            loader.load(
                fileElement,
                (gltf) => {
                    const model = gltf.scene;
                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                        }
                    });
                    modelRef.current = model;

                    // Centralizar o modelo
                    const bbox = new THREE.Box3().setFromObject(model);
                    const center = bbox.getCenter(new THREE.Vector3());
                    const size = bbox.getSize(new THREE.Vector3());

                    model.position.x -= center.x;
                    model.position.y -= center.y;
                    model.position.z -= center.z;

                    scene.add(model);

                    // Ajustar a posição da câmera para que o modelo fique centralizado e visível
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const fov = camera.fov * (Math.PI / 180);
                    let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));

                    cameraZ *= scaleElement;
                    camera.position.z = cameraZ;

                    const minZ = bbox.min.z;
                    const cameraToFarEdge = (minZ < 0) ? -minZ + cameraZ : cameraZ - minZ;

                    camera.far = cameraToFarEdge * 3;
                    camera.updateProjectionMatrix();
                },
                undefined,
                (error) => {
                    console.error('Erro ao carregar o modelo GLTF', error);
                }
            );

            // Função de animação
            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                controls.update();
            };

            animate();
        };

        init();

        // Atualiza o tamanho do renderer quando a janela é redimensionada
        const handleResize = () => {
            camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [backgroundColorElement, cameraHelperElement, cameraLockElement, colorLight, fileElement, frontElement, intensityLight, moveElement, rotateElement, scaleElement]);

    return <div ref={containerRef} className="card-3d" />
    
};
