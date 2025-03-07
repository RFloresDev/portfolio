import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl], (loader) => {
		loader.colorSpace = THREE.SRGBColorSpace;
	});

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.75} />
			<directionalLight position={[0, 0, 0.5]} intensity={2} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#090f66"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading={true}
					metalness={0.2}
					roughness={0.4}
					alphaTest={0.5}
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1.05}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{
				preserveDrawingBuffer: true,
				outputColorSpace: "srgb", // Forzar espacio de color sRGB
				toneMapping: THREE.NoToneMapping, // Desactivar tone mapping global
			}}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
