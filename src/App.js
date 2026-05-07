import React, { useState } from 'react';
import ChairViewer from './components/ChairViewer';
import ARView from './components/ARView';
import LoadingScreen from './components/LoadingScreen';
import './App.css';
import { furnitureItems } from './data/FurnitureData.js';

function App() {
  const [viewMode, setViewMode] = useState('3d');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureItems[0]);

  // Simulate loading completion
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="text-center min-h-[100vh] bg-white text-black ">
      {viewMode === '3d' ? (
        <>
          <ChairViewer setViewMode={setViewMode} selectedFurniture={selectedFurniture} setSelectedFurniture={setSelectedFurniture} />
        </>
      ) : (
        <ARView onExit={() => setViewMode('3d')} selectedFurniture={selectedFurniture}/>
      )}
    </div>
  );
}

export default App;