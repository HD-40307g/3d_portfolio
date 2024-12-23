import React, { useRef, useEffect } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// 3D Model from: https://sketchfab.com/
export const Bird = () => {
    const birdRef = useRef();

    // Load the 3D model and animations from provided GLTF file
    const { scene, animations } = useGLTF(birdScene);

    // Get access to the animations for the bird
    const { actions } = useAnimations(animations, birdRef);

    // Play the 'Take 001' animation when the component mounts
    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird reached a certain endpoint relative to the camera
        if(birdRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the bird 180 degrees on the y-axis
            birdRef.current.rotation.y = Math.PI;
        } else if(birdRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the rotation
            birdRef.current.rotation.y = 0;
        }
        
        // Update the X and Z position based on the bird's direction
        if(birdRef.current.rotation.y === 0) {
            // Moving forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // Moving backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
            //Use primitive element to render the bird scene
            <primitive object={scene} />
        </mesh>
    );
};
