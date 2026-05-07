import { furnitureModelPaths } from '../../data/FurnitureData.js'

const ARView = ({ onExit, selectedFurniture }) => {
  const modelPath = furnitureModelPaths[selectedFurniture.type]
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  return (
    <div className="bg-white flex flex-col items-center justify-center w-full h-screen gap-2">
      {!isMobile && (
        <p className="text-md text-gray-700 tracking-[0.03em] mt-1">Open this on your phone to place furniture in your room</p>
      )}
      {isMobile && (
        <p className="text-md text-gray-700 tracking-[0.03em] mb-2">Point your camera at a flat surface {selectedFurniture.type}</p>
      )}
      <model-viewer
        src={modelPath}
        ar
        ar-placement="floor" 
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        field-of-view="45deg"
        min-field-of-view="20deg"
        max-field-of-view="60deg"
        camera-orbit="0deg 75deg 30m"
        min-camera-orbit="auto auto 5m"
        max-camera-orbit="auto auto 95m"
        style={{ width: '100%', height: '60vh', backgroundColor: 'white' }}
      >
        {/* hide default loading bar */}
        <style>{`
          model-viewer::part(default-progress-bar) {
            display: none;
          }
        `}</style>
        <button slot="ar-button" className="bg-[#44a195] text-white text-sm py-2 px-4 rounded-xl cursor-pointer">View in Your Room</button>
      </model-viewer>

      {/* Bottom instruction */}
      <div className="px-6 py-4 bg-white border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400">
          Move your phone slowly to detect the floor, then tap to place
        </p>
        <p className="text-xs text-gray-400 mt-1">
          AR preview shown in default finish
        </p>
      </div>
      <button 
        className="bg-black text-white text-sm py-2 px-4 rounded-xl cursor-pointer flex items-center " 
        onClick={onExit}
      >
        ← Back to 3D View
      </button>
    </div>
  );
};

export default ARView;