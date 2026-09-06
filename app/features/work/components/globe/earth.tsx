import { Sphere, useTexture } from '@react-three/drei';

export const Earth = () => {
  const colorMap = useTexture('/8k_earth_daymap.jpg');
  return (
    <Sphere {...{ args: [2, 64, 64] }}>
      <meshStandardMaterial
        {...{
          map: colorMap,
          metalness: 0.1,
          roughness: 0.7,
        }}
      />
    </Sphere>
  );
};
