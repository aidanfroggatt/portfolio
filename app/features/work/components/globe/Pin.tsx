import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Destination } from './data';
import { latLongToVector3 } from './utils';

export const Pin = ({
  destination,
  index,
  tripId,
  activeTripId,
  onClick,
}: {
  destination: Destination;
  index: number;
  tripId: string;
  activeTripId: string | null;
  onClick: () => void;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const position = useMemo(
    () => latLongToVector3(destination.lat, destination.lng, 2),
    [destination]
  );

  const quaternion = useMemo(() => {
    const normal = position.clone().normalize();
    return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
  }, [position]);

  const isGloballyFiltering = activeTripId !== null;
  const isPartOfActiveTrip = activeTripId === tripId;
  const highlight = hovered || isPartOfActiveTrip;

  const stickHeight = 0.08;
  const stickRadius = 0.003;
  const headRadius = highlight ? 0.035 : 0.02;

  useFrame(({ camera }) => {
    if (groupRef.current) {
      const scale = camera.position.length() / 8;
      groupRef.current.scale.setScalar(Math.max(scale, 0.4));
    }
  });

  return (
    <group {...{ position, quaternion }} ref={groupRef}>
      <group
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'auto';
          setHovered(false);
        }}
      >
        {/* The Vertical Stick */}
        <mesh {...{ position: [0, stickHeight / 2, 0] }}>
          <cylinderGeometry {...{ args: [stickRadius, stickRadius, stickHeight, 8] }} />
          <meshBasicMaterial
            {...{
              color: highlight ? '#ffffff' : '#aaaaaa',
              transparent: true,
              opacity: isGloballyFiltering && !isPartOfActiveTrip ? 0.15 : 0.8,
            }}
          />
        </mesh>

        {/* The Head */}
        <mesh {...{ position: [0, stickHeight, 0] }}>
          <sphereGeometry {...{ args: [headRadius, 16, 16] }} />
          <meshBasicMaterial
            {...{
              color: highlight ? '#f2f2f2' : '#aaaaaa',
              transparent: true,
              opacity: isGloballyFiltering && !isPartOfActiveTrip ? 0.15 : 1,
            }}
          />
        </mesh>

        {/* The Number IN the node */}
        {isPartOfActiveTrip && (
          <Html center {...{ position: [0, stickHeight, 0] }} className="pointer-events-none z-10">
            <span
              className="text-[11px] font-extrabold text-custom-dark select-none"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {index + 1}
            </span>
          </Html>
        )}
      </group>

      {/* Info Tooltip */}
      {hovered && (
        <Html
          center
          {...{ position: [0, stickHeight + 0.06, 0] }}
          className="pointer-events-none z-50"
        >
          <div className="bg-custom-dark-alt text-custom-light p-3 rounded-xl shadow-[var(--shadow-card)] text-sm w-max border border-border pointer-events-none">
            <div className="mb-2">
              <strong className="text-base font-semibold">{destination.name}</strong>
              <span className="text-custom-light/60 text-xs ml-2">{destination.timeSpent}</span>
            </div>
            <p className="text-custom-light/80 italic mb-3">{destination.note}</p>
            <div className="flex gap-2 flex-wrap">
              {destination.activities.map((act) => (
                <span
                  key={act}
                  className="bg-custom-dark border border-border px-2 py-0.5 rounded-md text-xs"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};
