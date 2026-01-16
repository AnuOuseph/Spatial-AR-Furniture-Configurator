import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { furnitureItems, environmentPresets } from '../../data/FurnitureData.js';
import ColorSelector from '../ColorSelector/index.js';
import EnvironmentSelector from '../EnvironmentSelector/index.js';
import FurnitureSelector from '../FurnitureSelector/index.js';
import MeasurementTool from '../MeasurementTool/index.js';
import SaveLoad from '../SaveLoad/index.js';
import { div } from 'three/tsl';
import { Box, ChevronUp, Dot } from 'lucide-react';

const ChairViewer = ({setViewMode}) => {
  const [selectedFurniture, setSelectedFurniture] = useState(furnitureItems[0]);
  const [selectedColor, setSelectedColor] = useState(furnitureItems[0].materials[0].color);
  const [selectedEnvironment, setSelectedEnvironment] = useState(environmentPresets[0]);
  const canvasRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [isMeasuring, setIsMeasuring] = useState(false);

  const FurnitureModel = () => {
    switch (selectedFurniture.type) {
      case 'chair':
        return (
          <group>
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[2, 0.2, 2]} />
              <meshStandardMaterial color={selectedColor} roughness={0.8} />
            </mesh>
            <mesh position={[0, 1.2, -0.9]}>
              <boxGeometry args={[2, 1.4, 0.2]} />
              <meshStandardMaterial color={selectedColor} roughness={0.8} />
            </mesh>
            <mesh position={[-0.8, 0.1, -0.8]}>
              <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.8, 0.1, -0.8]}>
              <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[-0.8, 0.1, 0.8]}>
              <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.8, 0.1, 0.8]}>
              <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );

      case 'table':
        return (
          <group>
            <mesh position={[0, 0.8, 0]}>
              <boxGeometry args={[2.5, 0.1, 1.5]} />
              <meshStandardMaterial color={selectedColor} roughness={0.7} />
            </mesh>
            <mesh position={[-1, 0.4, -0.5]}>
              <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} />
            </mesh>
            <mesh position={[1, 0.4, -0.5]}>
              <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} />
            </mesh>
            <mesh position={[-1, 0.4, 0.5]}>
              <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} />
            </mesh>
            <mesh position={[1, 0.4, 0.5]}>
              <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} />
            </mesh>
          </group>
        );

      case 'sofa':
        return (
          <group>
            <mesh position={[0, 0.6, 0]}>
              <boxGeometry args={[3, 0.6, 1.2]} />
              <meshStandardMaterial color={selectedColor} roughness={0.9} />
            </mesh>
            <mesh position={[0, 1.2, -0.5]}>
              <boxGeometry args={[3, 1.2, 0.2]} />
              <meshStandardMaterial color={selectedColor} roughness={0.9} />
            </mesh>
            <mesh position={[-1.3, 0.3, 0]}>
              <boxGeometry args={[0.4, 0.6, 1.2]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} />
            </mesh>
            <mesh position={[1.3, 0.3, 0]}>
              <boxGeometry args={[0.4, 0.6, 1.2]} />
              <meshStandardMaterial color="#6d4c41" metalness={0.8} />
            </mesh>
          </group>
        );

      default:
        return null;
    }
  };

  return (
    <div className='flex w-full h-[100vh] relative'>
      <div className="md:basis-3/4 flex-1 bg-[#f7f6f5] p-5 border-r border-[#e9e7e1]">
      {/* navbar  */}
        <div className='nav flex justify-between'>
          <div className='flex gap-2 items-center'>
            <div className='rounded-full flex items-center justify-center w-10 h-10 border'>
              <Box size={'18px'}/>
            </div>
            <div className='flex flex-col items-start'>
              <p className='text-black font-[600]'>Spatial</p>
              <p className='text-[#788091] text-[12px]'>Furniture AR</p>
            </div>
          </div>
          <div className='flex text-[#788091] text-xs items-center'>
            <p>Drag to rotate</p>
            <Dot/>
            <p>Scroll to zoom</p>
          </div>
        </div>

        {/* product canvas */}
        <div className="h-[80vh] mt-10" ref={canvasRef}>
          <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} />
            
            <FurnitureModel />
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={15}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 4}
              enableDamping
              dampingFactor={0.08}
            />
            <Environment preset={selectedEnvironment.preset} />
          </Canvas>
        </div>
      </div>
      <div className='md:basis-1/4 bg-[#fbfaf9] p-10 md:flex hidden flex-col gap-6 justify-center items-start'>

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
          
          <ColorSelector
            colors={selectedFurniture.materials?.map(material => material.color)}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />

          <EnvironmentSelector
            environments={environmentPresets}
            selectedEnvironment={selectedEnvironment}
            onSelect={setSelectedEnvironment}
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
          
          <ColorSelector
            colors={selectedFurniture.materials?.map(material => material.color)}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />

          <EnvironmentSelector
            environments={environmentPresets}
            selectedEnvironment={selectedEnvironment}
            onSelect={setSelectedEnvironment}
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