import Circle from "./Circle";

export interface EnspiralledProps {
  width: number;
  height: number;
  radius: number;
  childCount: number;
  scale: number;
}

export default function Enspiralled({
  width,
  height,
  radius,
  childCount,
  scale,
}: EnspiralledProps) {
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height}>
      <Circle
        centerX={centerX}
        centerY={centerY}
        radius={radius}
        childCount={childCount}
        scale={scale}
      />
    </svg>
  );
}
