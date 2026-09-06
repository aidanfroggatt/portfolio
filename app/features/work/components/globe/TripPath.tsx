import { Line } from '@react-three/drei';
import { useMemo } from 'react';
import { Destination } from './data';
import { getArcPoints, latLongToVector3 } from './utils';

export const TripPath = ({ destinations }: { destinations: Destination[] }) => {
  const segments = useMemo(() => {
    const lines = [];
    for (let i = 0; i < destinations.length - 1; i++) {
      const start = latLongToVector3(destinations[i].lat, destinations[i].lng, 2);
      const end = latLongToVector3(destinations[i + 1].lat, destinations[i + 1].lng, 2);
      const mode = destinations[i].transportToNext || 'flight';

      lines.push({
        points: getArcPoints(start, end, 2, mode),
        mode,
      });
    }
    return lines;
  }, [destinations]);

  return (
    <group>
      {segments.map((segment, idx) => (
        <Line
          key={idx}
          points={segment.points}
          // Highlight ground routes differently than flights if desired, using theme variable
          color="#f2f2f2"
          lineWidth={segment.mode === 'flight' ? 1.5 : 2.5}
          // Flights are dashed, ground transport is solid
          dashed={segment.mode === 'flight'}
          dashScale={50}
          dashSize={0.5}
          dashOffset={0}
          transparent
          opacity={segment.mode === 'flight' ? 0.5 : 0.8}
        />
      ))}
    </group>
  );
};
