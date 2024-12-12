"use client";

import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame, extend } from "@react-three/fiber";
import { MathUtils, IcosahedronGeometry, Mesh, ShaderMaterial } from "three";

extend({ IcosahedronGeometry });

const Blob = () => {
  const mesh = useRef<Mesh | null>(null);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      (mesh.current.material as ShaderMaterial).uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      (mesh.current.material as ShaderMaterial).uniforms.u_intensity.value =
        MathUtils.lerp(
          (mesh.current.material as ShaderMaterial).uniforms.u_intensity.value,
          0.5,
          0.02
        );
    }
  });
  return (
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
