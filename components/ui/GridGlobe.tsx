"use client";
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Dynamically import Globe component
const Globe = dynamic(() => import('./Globe').then((mod) => mod.Globe), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading Globe...</div>
});

const GridGlobe = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full flex items-center justify-center">Loading Globe...</div>;
  }

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#FFFFFF",
    directionalLeftLight: "#FFFFFF",
    directionalTopLight: "#FFFFFF",
    pointLight: "#FFFFFF"
  };

  const data = [
    {
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 40.7128,
      endLng: -74.0060,
      arcAlt: 0.3,
      order: 1,
      color: "#4CAF50"
    },
    {
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.2,
      order: 2,
      color: "#2196F3"
    }
  ];

  return (
    <div className="w-full h-full">
      <Globe globeConfig={globeConfig} data={data} />
    </div>
  );
};

export default GridGlobe;
