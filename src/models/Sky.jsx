import React from 'react';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

// 3D Model from https://sketchfab.com/
export const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    // 'delta' represents the time in seconds since the last frame
    useFrame((_, delta) => {
        if(isRotating) {
            skyRef.current.rotation.y += 0.25 * delta;
        }
    });

    return (
        <mesh ref={skyRef}>
            // Use primitive element to directly embed a complex 3D sky scene
            <primitive object={sky.scene} />
        </mesh>
    );
};
