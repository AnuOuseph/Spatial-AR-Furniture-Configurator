const ARView = ({ onExit }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2">
      <p className="text-md">Point your camera at a flat surface</p>
      <model-viewer
        src="/models/chair.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        orientation="0deg 0deg 0deg"
        camera-orbit="0deg 75deg 2.5m"
        min-camera-orbit="auto auto 1m"
        max-camera-orbit="auto auto 10m"
        style={{ width: '100%', height: '500px' }}
      >
        <button slot="ar-button">View in Your Room</button>
      </model-viewer>
      <button 
        className="bg-black text-white text-sm py-2 px-4 rounded-xl cursor-pointer" 
        onClick={onExit}
      >
        ← Back to 3D View
      </button>
    </div>
  );
};

export default ARView;