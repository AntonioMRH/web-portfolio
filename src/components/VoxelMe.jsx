import { Canvas } from '@react-three/fiber'
import { useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useState } from 'react'
import { useEffect } from 'react'
import { MoonLoader } from 'react-spinners'

function Model() {
    const gltf = useLoader(GLTFLoader, './me-voxel.gltf')
    const meshRef = useRef(null)
    let mixer
    if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene)
        gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip)
            action.play()
        })
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })

    useFrame(() => {
        if (!meshRef.current) {
            return
        }

        meshRef.current.rotation.y += 0.002
    })

    return (
        <>
            <mesh ref={meshRef}>
                <primitive object={gltf.scene} scale={4} position={[0, -6, 0]} />
            </mesh>
        </>
    )
}

export default function VoxelMe() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [loading])

    return (
        <>
            {loading ? (
                <MoonLoader size={40} color="#805AD5" />
            ) : (
                <Canvas>
                    <PerspectiveCamera makeDefault fov={75} position={[0, 8, 14]} />
                    <Suspense fallback={null}>
                        <Model />
                        <OrbitControls />
                    </Suspense>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[0, 8, 8]} />
                </Canvas>
            )}
        </>
    )
}
