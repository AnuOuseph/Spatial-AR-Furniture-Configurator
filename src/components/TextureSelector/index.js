
const TextureSelector = ({ textures, selectedTexture, onTextureChange }) => {
  return (
    <div className="">
      <div className="flex items-center justify-start gap-4">
        {textures && textures.map((texture) => (
          <div className={`w-12 h-12 flex items-center justify-center border rounded-full ${selectedTexture === texture ? 'border-[#44a195]' : 'border-gray-300'}`} >
          <button
            key={texture}
            className={`w-10 h-10 flex items-center justify-center rounded-full`}
            style={{ backgroundImage: `url(${texture.path})` }}
            onClick={() => onTextureChange(texture)}
            aria-label={`Select texture ${texture.name}`}
          >
            <svg
              className={`w-4 h-4 ${
                selectedTexture === texture  
                  ? 'text-[#f5f5f5]' 
                  : 'text-transparent'
              }`} 
              fill="none"  
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextureSelector;