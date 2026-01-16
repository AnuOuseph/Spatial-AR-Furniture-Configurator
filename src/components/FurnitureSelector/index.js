
const FurnitureSelector = ({ furnitureItems, selectedFurniture, onSelect }) => {
  return (
    <div>
      <p className="mb-2 font-medium text-start">Choose Furniture</p>

      <div className="grid grid-cols-3 gap-3">
        {furnitureItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            className={`cursor-pointer py-4 px-2 rounded-xl border 
              ${selectedFurniture?.id === item.id ? 'border-[#44a195] bg-[#e3f1f0]' : 'border-[#e9e7e1] bg-white'}
            `}
          >
            <div className="flex items-center justify-center text-2xl">
              {item.type === 'chair' && '💺' }
              {item.type === 'table' && '🪑'}
              {item.type === 'sofa' && '🛋️'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureSelector;