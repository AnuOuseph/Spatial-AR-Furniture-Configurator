import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function FurnitureSetModel({ color = "#8B5A2B", ...props }) {
  const { scene } = useGLTF("/models/furniture_set.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      if (child.isMesh) {
        console.log("Mesh:", child.name);
        console.log("Material:", child.material?.name);
      }

    //   if (child.material.name === "Elm_sofa") {
    //     child.material = child.material.clone();

    //     child.material.color = new THREE.Color(color);
    //     child.material.roughness = 0.9;   // softer fabric look
    //     child.material.metalness = 0.0;

    //     child.material.needsUpdate = true;
    //   }
    });
  }, [scene, color]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/furniture_set.glb");