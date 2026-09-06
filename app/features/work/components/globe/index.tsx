import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useState, useSyncExternalStore } from 'react';
import * as THREE from 'three';
import { myTrips, Trip } from './data';
import { Earth } from './earth';
import { Pin } from './Pin';
import { TripPath } from './TripPath';
import { TripSidebar } from './TripSidebar';
import { latLongToVector3 } from './utils';

const CameraRig = ({ activeTrip }: { activeTrip?: Trip }) => {
  const { camera } = useThree();

  useFrame((_, delta) => {
    let target = new THREE.Vector3(0, 0, 7);

    if (activeTrip) {
      const center = new THREE.Vector3();
      activeTrip.destinations.forEach((d) => {
        center.add(latLongToVector3(d.lat, d.lng, 2));
      });
      center.divideScalar(activeTrip.destinations.length);
      center.normalize().multiplyScalar(4.5);
      target = center;
    }

    // Smoothly interpolate camera position every frame without setState in effects
    if (camera.position.distanceTo(target) > 0.01) {
      camera.position.lerp(target, delta * 3);
    }
  });

  return null;
};

const emptySubscribe = () => () => {};
const useHydrated = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

export default function Globe() {
  const isHydrated = useHydrated();
  const [activeTripId, setActiveTripId] = useState<string | null>(null);

  if (!isHydrated) {
    return (
      <div className="h-96 w-full bg-custom-dark-alt animate-pulse rounded-xl border border-border" />
    );
  }

  const activeTrip = myTrips.find((t) => t.id === activeTripId);

  return (
    <div className="relative h-96 w-full rounded-xl overflow-hidden border border-border bg-custom-dark-alt flex flex-col">
      {/* Top Filter Bar */}
      <div className="absolute top-4 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="flex gap-2 overflow-x-auto bg-custom-dark-alt/80 backdrop-blur-md p-2 rounded-2xl border border-border pointer-events-auto max-w-[90%] custom-scrollbar">
          <button
            onClick={() => setActiveTripId(null)}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${!activeTripId ? 'bg-custom-light text-custom-dark' : 'hover:bg-border text-custom-light'}`}
          >
            All Destinations
          </button>
          {myTrips.map((trip) => (
            <button
              key={trip.id}
              onClick={() => setActiveTripId(trip.id)}
              className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${activeTripId === trip.id ? 'bg-custom-light text-custom-dark' : 'hover:bg-border text-custom-light'}`}
            >
              {trip.name}
            </button>
          ))}
        </div>
      </div>

      {activeTrip && <TripSidebar trip={activeTrip} onClose={() => setActiveTripId(null)} />}

      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight {...{ intensity: 0.5 }} />
        <directionalLight {...{ position: [10, 10, 10], intensity: 1 }} />

        <CameraRig activeTrip={activeTrip} />

        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        {myTrips.map((trip) =>
          trip.destinations.map((dest, index) => (
            <Pin
              key={dest.id}
              destination={dest}
              index={index}
              tripId={trip.id}
              activeTripId={activeTripId}
              onClick={() => setActiveTripId(trip.id)}
            />
          ))
        )}

        {activeTrip && <TripPath destinations={activeTrip.destinations} />}

        <OrbitControls
          enablePan={false}
          enableZoom={!!activeTripId}
          minDistance={2.5}
          maxDistance={8}
          autoRotate={!activeTripId}
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
