import React, { useRef, useEffect } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useGLTF, useAnimations } from '@react-three/drei';

// 3D Model from: https://sketchfab.com/
export const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();

    // Load 3D model and its animations
    const { scene, animations } = useGLTF(planeScene);

    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, ref);

    // useEffect to control the plane's animation based on isRotating prop
    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [isRotating, actions]);

    return (
        <mesh {...props} ref={ref}>
            //Use primitive element to render the bird scene
            <primitive object={scene} />
        </mesh>
    )
};
