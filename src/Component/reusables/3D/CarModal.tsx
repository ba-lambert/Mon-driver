// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import UGBL from './../../../assets/Mustang_GT'
//
// const CarModel = () => {
//   const { nodes, materials } = useGLTF('../../../');
//
//   return (
//     <mesh geometry={nodes.Car.geometry} material={materials.body}>
//       {/* Add more mesh or material configurations as needed */}
//     </mesh>
//   );
// };
//
// const BackgroundAnimation = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} />
//       <OrbitControls />
//       <CarModel />
//     </Canvas>
//   );
// };
//
// export default BackgroundAnimation;
