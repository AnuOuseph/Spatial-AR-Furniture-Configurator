import './index.css';

const ARView = ({ onExit }) => {
  return (
    <div className="ar-view">
      <div className="ar-header">
        <h2>AR Experience</h2>
        <p>Point your camera at a flat surface to place the chair</p>
      </div>
      
      <div className="ar-preview">
        <div className="ar-placeholder">
          <div className="ar-chair-preview">
            <div className="chair-3d"></div>
          </div>
          <p>👆 Move your phone to place the chair in your room</p>
        </div>
      </div>
      
      <div className="ar-controls">
        <button className="exit-button" onClick={onExit}>
          ← Back to 3D View
        </button>
        <button className="ar-action-button">
          📸 Capture
        </button>
      </div>
    </div>
  );
};

export default ARView;