import { useState, useEffect } from "react";
import { PerspectiveCamera } from "three";

export function useCamera() {
  const [camera, setCamera] = useState<PerspectiveCamera | null>(null);

  function cameraRef(el: PerspectiveCamera | null) {
    if (!el || camera !== null) return;
    console.log('testState');
    setCamera(el);
  }

  useEffect(() => {
    if (!camera) return;

    camera.rotation.x = (Math.PI * -35) / 180;
  }, [camera]);

  return cameraRef;
}
