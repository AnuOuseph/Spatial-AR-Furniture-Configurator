
const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="">
      <p className='mb-2 font-medium text-start'>Color</p>
      <div className="flex items-center justify-start gap-4">
        {colors && colors.map((color) => (
          <div className={`border-2 w-12 h-12 flex items-center justify-center rounded-full ${selectedColor === color ? 'border-[#44a195]' : 'border-transparent'}`} >
          <button
            key={color}
            className={`w-10 h-10 flex items-center justify-center rounded-full`}
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
            aria-label={`Select color ${color}`}
          >
            <svg
              className={`w-4 h-4 ${
                selectedColor === color  
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

export default ColorSelector;