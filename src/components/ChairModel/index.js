import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function ChairModel({ color = "#8B5A2B", texturePath="/textures/chair/japanese_sycamore_diff_1k.jpg",  ...props }) {
  const { scene } = useGLTF("/models/chair.glb");
  const texture = useTexture(texturePath);

  useEffect(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    texture.colorSpace = THREE.SRGBColorSpace;

    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      if (child.material.name === "phong1SG") {
        child.material = child.material.clone();
        child.material.map = texture;
        child.material.color = new THREE.Color(color);
        child.material.roughness = 0.75;
        child.material.metalness = 0.0;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, color, texture]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/chair.glb");