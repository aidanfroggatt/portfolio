import * as THREE from 'three';
import { TransportMode } from './data';

export const latLongToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

export const getArcPoints = (
  start: THREE.Vector3,
  end: THREE.Vector3,
  radius: number,
  mode: TransportMode = 'flight'
) => {
  const distance = start.distanceTo(end);
  const mid = start.clone().lerp(end, 0.5);

  // Flights arc high into the sky. Ground transport hugs the Earth's surface.
  const arcHeight = mode === 'flight' ? radius + distance * 0.4 : radius + 0.015; // Just slightly above the surface to prevent z-fighting clipping

  mid.normalize().multiplyScalar(arcHeight);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);

  // Return more points for surface routes to ensure they curve smoothly around the sphere
  return curve.getPoints(mode === 'flight' ? 32 : 64);
};
