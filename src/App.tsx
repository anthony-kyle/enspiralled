import Enspiralled from './Enspiralled'
import './App.css'
import { useWindowSize } from './hooks/useWindowSize'
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [childCount, setChildCount] = useState(4);
  const [radius, setRadius] = useState(256);
  const [scale, setScale] = useState(5);

  const { width, height } = useWindowSize()
  return (
    <>
      {show && (
        <Enspiralled width={width} height={height} radius={radius} childCount={childCount} scale={scale / 10} />
      )}
      <div className="app-controls">
        <button onClick={() => {
          setShow(false);
          setTimeout(() => {
            setShow(true);
          }, 50);
        }}>
          Reset
        </button>
        <button onClick={() => {
          setShowControls(!showControls);
        }}>
          {showControls ? "Hide Controls" : "Show Controls"}
        </button>
        {showControls && <div>
          <label>Number of children: {childCount}</label>
          <input type="range" min="1" max="10" value={childCount} onChange={(e) => setChildCount(parseInt(e.target.value))} />
          <label>Base Radius: {radius}px</label>
          <input type="range" min="1" max="1000" value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} />
          <label>Scale: {scale}%</label>
          <input type="range" min="1" max="10" value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} />
        </div>}
      </div>
    </>
  )
}

export default App
