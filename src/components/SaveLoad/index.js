import React from 'react';

const SaveLoad = ({ configuration }) => {
  const handleSave = () => {
    const configData = JSON.stringify(configuration, null, 2);
    const blob = new Blob([configData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'furniture-configuration.json';
    a.click();
    
    URL.revokeObjectURL(url);
    alert('Configuration saved successfully!');
  };

  const handleLoad = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const config = JSON.parse(e.target.result);
          alert('Configuration loaded! Would apply settings in real implementation.');
        } catch (error) {
          alert('Error loading configuration file.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="save-load">
      <h3>Save & Load</h3>
      <div className="save-load-buttons">
        <button className="save-button" onClick={handleSave}>
          💾 Save Configuration
        </button>
        <label className="load-button">
          📂 Load Configuration
          <input type="file" accept=".json" onChange={handleLoad} hidden />
        </label>
      </div>
    </div>
  );
};

export default SaveLoad;