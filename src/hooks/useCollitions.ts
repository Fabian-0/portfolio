import React, { useEffect, useState } from "react";
import { Box3, Box3Helper, Vector3 } from "three";

export interface IBoxData {
  position: Vector3;
  size: Vector3;
  name: string;
}
export function useCollitions(points: IBoxData[] = []) {
  const [boxes, setBoxes] = useState<Array<Box3Helper>>([]);

  useEffect(() => {
    const boxes = points.map((data) => {
      const newBox = new Box3Helper(
        new Box3().setFromCenterAndSize(data.position, data.size)
      );
      newBox.name = data.name;
      return newBox;
    });

    setBoxes(boxes);
    console.log(boxes, 'useCollitions hook');
  }, []);

  return boxes;
}
