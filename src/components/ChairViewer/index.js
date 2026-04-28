import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Bounds, Center } from '@react-three/drei';
import { furnitureItems, environmentPresets } from '../../data/FurnitureData.js';
import { ChevronUp } from 'lucide-react';

import ColorSelector from '../ColorSelector/index.js';
import EnvironmentSelector from '../EnvironmentSelector/index.js';
import FurnitureSelector from '../FurnitureSelector/index.js';
import ChairModel from '../ChairModel/index.js';
import SofaModel from '../SofaModel/index.js';
import FurnitureSetModel from '../FurnitureSetModel/index.js';
import NavBar from '../Navbar/index.js';

const ChairViewer = ({setViewMode}) => {
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureItems[0]);
  const [furnitureStates, setFurnitureStates] = useState(
    Object.fromEntries(
      furnitureItems.map(item => [
        item.type,
        {
          color: item.materials[0].color,
          environment: environmentPresets[0],
          ...(item.parts
          ? Object.fromEntries(
              item.parts.map(part => [part.id, part.colors[0].color])
            )
          : {})
        }
      ])
    )
  );
  const canvasRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const updateFurnitureState = (property, value) => {
    setFurnitureStates(prev => ({
      ...prev,
      [selectedFurniture.type]: {
        ...prev[selectedFurniture.type],
        [property]: value
      }
    }))
  }

  const selectedColor = furnitureStates[selectedFurniture.type].color
  const selectedEnvironment = furnitureStates[selectedFurniture.type].environment

  const FurnitureModel = () => {
    switch (selectedFurniture.type) {
      case 'chair':
        return (
            <ChairModel color={selectedColor} scale={0.08} />
        );

      case 'furniture-set':
        return (
          <FurnitureSetModel 
            color={selectedColor} 
            scale={0.05}
            partColors={{
              boisvert_chair: furnitureStates["furniture-set"].boisvert_chair,
              chair_JIMI: furnitureStates["furniture-set"].chair_JIMI,
              mykonos_chair: furnitureStates["furniture-set"].mykonos_chair,
              Myrick_Chair: furnitureStates["furniture-set"].Myrick_Chair,
              table_AGAMA: furnitureStates["furniture-set"].table_AGAMA,
              table_Crueso: furnitureStates["furniture-set"].table_Crueso,
            }}
          />
        );

      case 'sofa':
        return (
          <SofaModel color={selectedColor} scale={0.05} />
        );

      default:
        return null;
    }
  };

  return (
    <div className='flex w-full h-[100vh] relative'>
      <div className="md:basis-3/4 flex-1 bg-[#f7f6f5] p-5 border-r border-[#e9e7e1]">
        {/* navbar  */}
        <NavBar />

        {/* product canvas */}
        <div className="h-[calc(100vh-120px)] mt-6" ref={canvasRef}>
          <Canvas shadows camera={{ position: [4, 3, 6], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} />
            
              <Center>
                <FurnitureModel />
              </Center>
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={17}
              maxDistance={35}
              maxPolarAngle={Math.PI / 2.1}
              minPolarAngle={Math.PI / 4}
              enableDamping
              dampingFactor={0.08}
            />
            <Environment preset={selectedEnvironment.preset} />
          </Canvas>
        </div>
      </div>

      {/* customization panel */}
      <div className='md:basis-1/4 bg-[#fbfaf9] p-10 md:flex hidden flex-col gap-6 justify-start items-start h-screen overflow-y-auto scrollbar-hide'>

        <div className="text-start flex flex-col gap-1">
          <p className='text-[#44a195] uppercase text-xs'>Nordic Collection</p>
          <p className='text-2xl font-[500]'>{selectedFurniture.name}</p>
          <p className='text-2xl font-[500] py-2'>${selectedFurniture.price} <span className='text-[#44a195] text-xs'>15% OFF</span></p>
        </div>

        <div className="flex flex-col gap-6">
          <FurnitureSelector
            furnitureItems={furnitureItems}
            selectedFurniture={selectedFurniture}
            onSelect={setSelectedFurniture}
          />
          
          { selectedFurniture.type !== 'furniture-set' && (
            <div>
              <p className='font-medium text-start mb-2'>Color</p>
              <ColorSelector
                colors={selectedFurniture.materials?.map(material => material.color)}
                selectedColor={selectedColor}
                onColorChange={(color) => updateFurnitureState('color', color)}
              />
            </div>
          )}

          { selectedFurniture.type === 'furniture-set' && (
            <div>
              <p className='font-medium text-start mb-3'>Customize set</p>
              <div className="flex flex-col gap-4">
                {selectedFurniture.parts.map(part => (
                  <div key={part.id}>
                    <p className='text-sm mb-1 text-start'>{part.name}</p>
                    <ColorSelector
                      colors={part.colors.map(c => c.color)}
                      selectedColor={furnitureStates[selectedFurniture.type][part.id] || part.colors[0].color}
                      onColorChange={(color) => updateFurnitureState(part.id, color)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <EnvironmentSelector
            environments={environmentPresets}
            selectedEnvironment={selectedEnvironment}
            onSelect={(env) => updateFurnitureState('environment', env)}
          />

        </div>
        <div className="my-[30px] w-full">
          <button 
            onClick={() => setViewMode('ar')}
            className="bg-[#44a195] text-white w-full py-[12px] text-[16px] rounded-[20px] cursor-pointer flex gap-1 items-center justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11l3-3m0 0l-3-3m3 3H9" />
            </svg>
            View in Your Room
          </button>
        </div>
      </div>
      <div
        className={`
          fixed bottom-0 left-0 w-full bg-white md:hidden
          rounded-t-3xl shadow-lg border
          flex flex-col items-center
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-56px)]'}
        `}
        style={{ height: '85vh' }}
      >
        {/* handle custom bar */}
        <div
          className="w-full flex flex-col gap-2 items-center py-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="h-1 w-14 bg-[#d1d4d8] rounded-xl" />
          <ChevronUp
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
            color="gray"
          />
        </div>

        {/* panel content */}
        <div className="w-full px-6 py-4 overflow-y-auto">

          <div className="text-start flex flex-col gap-1">
          <p className='text-[#44a195] uppercase text-xs'>Nordic Collection</p>
          <p className='text-2xl font-[500]'>{selectedFurniture.name}</p>
          <p className='text-2xl font-[500] py-2'>${selectedFurniture.price} <span className='text-[#44a195] text-xs'>15% OFF</span></p>
        </div>

        <div className="flex flex-col gap-6">
          <FurnitureSelector
            furnitureItems={furnitureItems}
            selectedFurniture={selectedFurniture}
            onSelect={setSelectedFurniture}
          />
          
          { selectedFurniture.type !== 'furniture-set' && (
            <>
            <p className='mb-2 font-medium text-start'>Color</p>
            <ColorSelector
              colors={selectedFurniture.materials?.map(material => material.color)}
              selectedColor={selectedColor}
              onColorChange={(color) => updateFurnitureState('color', color)}
            />
            </>
          )}

          { selectedFurniture.type === 'furniture-set' && (
            <div className="flex flex-col gap-4">
              <p className='mb-2 font-medium text-start'>Customize set</p>
              <div className='flex flex-wrap gap-12'>
              {selectedFurniture.parts.map(part => (
                <div key={part.id}>
                  <p className='text-sm mb-1 text-start'>{part.name}</p>
                  <ColorSelector
                    colors={part.colors.map(c => c.color)}
                    selectedColor={furnitureStates[selectedFurniture.type][part.id] || part.colors[0].color}
                    onColorChange={(color) => updateFurnitureState(part.id, color)}
                  />
                </div>
              ))}
              </div>
            </div>
          )}

          <EnvironmentSelector
            environments={environmentPresets}
            selectedEnvironment={selectedEnvironment}
            onSelect={(env) => updateFurnitureState('environment', env)}
          />
          </div>
          <div className="my-[30px] w-full">
            <button 
              onClick={() => setViewMode('ar')}
              className="bg-[#44a195] text-white w-full py-[12px] text-[16px] rounded-[20px] cursor-pointer flex gap-1 items-center justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11l3-3m0 0l-3-3m3 3H9" />
              </svg>
              View in Your Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairViewer;