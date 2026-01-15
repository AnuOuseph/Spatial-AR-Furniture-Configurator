import React, { useState } from 'react';
import ChairViewer from './components/ChairViewer';
import ARView from './components/ARView';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('3d');
  const [isLoading, setIsLoading] = useState(true);

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
          <ChairViewer setViewMode={setViewMode}/>
        </>
      ) : (
        <ARView onExit={() => setViewMode('3d')} />
      )}
    </div>
  );
}

export default App;