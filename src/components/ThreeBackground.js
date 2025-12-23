import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

const SHAPE_COUNT = 8; // Reduced for performance

const FloatingShape = ({ position, color, scale, rotation }) => {
    return (
        <mesh position={position} scale={scale} rotation={rotation}>
            <icosahedronGeometry args={[1, 0]} />
            <meshLambertMaterial // Cheaper lighting calculation
                color={color}
                transparent={false}
                opacity={1}
            />
        </mesh>
    );
};

const FloatingShapesGroup = ({ theme }) => {
    const groupRef = useRef();

    // Generate random shapes
    const shapes = useMemo(() => {
        const temp = [];
        const isDark = theme === 'dark';

        const palette = isDark
            ? ['#4f46e5', '#818cf8', '#c084fc', '#3b82f6'] // Indigo/Violet/Blue
            : ['#f472b6', '#a78bfa', '#2dd4bf', '#60a5fa']; // Vibrant Pastels (Pink, Violet, Teal, Blue)

        for (let i = 0; i < SHAPE_COUNT; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10 - 5
                ],
                scale: Math.random() * 0.5 + 0.2,
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                color: palette[Math.floor(Math.random() * palette.length)],
            });
        }
        return temp;
    }, [theme]);

    const scrollRef = useRef(0);
    const lerpedScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            const time = state.clock.getElapsedTime();
            const targetY = scrollRef.current;

            // FRAME-RATE INDEPENDENT DAMPING
            // Lambda: 5 -> 8 (Snappier response, less "floaty" lag)
            lerpedScroll.current = THREE.MathUtils.damp(lerpedScroll.current, targetY, 8, delta);

            // Continuous auto-rotation
            const autoRotate = time * 0.1;

            // Scroll influence
            const scrollRotate = lerpedScroll.current * 0.001;

            groupRef.current.rotation.y = autoRotate + scrollRotate;
            groupRef.current.rotation.x = (Math.sin(time * 0.2) * 0.1) + (lerpedScroll.current * 0.0005);
        }
    });

    return (
        <group ref={groupRef}>
            {shapes.map((shape, i) => (
                <FloatingShape key={i} {...shape} />
            ))}
        </group>
    );
};

const ThreeBackground = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.log("ThreeBackground mounted");
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const bgStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
    };

    return (
        <div style={bgStyle} className="transition-opacity duration-1000 ease-in-out">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                dpr={[1, 1.5]} // Balance: Sharp enough, but fast rendering
                performance={{ min: 0.5 }}
            >
                <ambientLight intensity={theme === 'dark' ? 0.2 : 0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color={theme === 'dark' ? "purple" : "white"} />

                <FloatingShapesGroup theme={theme} />

                <fog attach="fog" args={[theme === 'dark' ? '#0a0a0a' : '#f8fafc', 5, 25]} />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
