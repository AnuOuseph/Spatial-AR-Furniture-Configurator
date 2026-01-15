import React from 'react';

const MeasurementTool = ({ isMeasuring, onToggle }) => {
  return (
    <div className="measurement-tool">
      <h3>Measurement Tools</h3>
      <button
        className={`measure-button ${isMeasuring ? 'active' : ''}`}
        onClick={onToggle}
      >
        📏 {isMeasuring ? 'Measuring...' : 'Enable Measurements'}
      </button>
      {isMeasuring && (
        <div className="measurement-info">
          <p>Click and drag to measure dimensions</p>
          <div className="measurement-example">
            <span>Width: 2.5m</span>
            <span>Height: 0.8m</span>
            <span>Depth: 1.2m</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeasurementTool;