import { useState, useEffect } from "react";

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, "0")}`;

type CircleProps = {
    centerX: number;
    centerY: number;
    radius: number;
    scale: number;
    childCount?: number;
}

function Circle({
    centerX = 128,
    centerY = 128,
    radius = 256,
    scale = 0.5,
    childCount = 4,
}: CircleProps) {
    const [color] = useState(() => randomHexColor());
    const [opacity, setOpacity] = useState(0);
    const [hasChildren, setHasChildren] = useState(false);

    const handleMouseOver = () => {
        setHasChildren(true);
    }

    const offset = radius * scale * 2;

    useEffect(() => {
        const t = setTimeout(() => setOpacity(0.7), 0);
        return () => clearTimeout(t);
    }, []);

    const childCircles = hasChildren
        ? Array.from({ length: childCount }, (_, i) => {
              const angle = (2 * Math.PI * i) / childCount - Math.PI / 2;
              return (
                  <Circle
                      key={i}
                      centerX={centerX + offset * Math.cos(angle)}
                      centerY={centerY + offset * Math.sin(angle)}
                      radius={radius * scale}
                      scale={scale}
                      childCount={childCount}
                  />
              );
          })
        : null;

    return (
        <>
            <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                onMouseOver={handleMouseOver}
                style={{ fill: color, opacity }}
            />
            {childCircles}
        </>
    );
}

export default Circle;
