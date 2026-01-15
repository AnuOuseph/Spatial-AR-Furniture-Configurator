
const EnvironmentSelector = ({ environments, selectedEnvironment, onSelect }) => {
  return (
    <div className="">
      <p className='mb-2 font-medium text-start'>Preview Environment</p>
      <div className="flex gap-4">
        {/* TreePine, Building, Sunset */}
        {environments.map((env) => (
          <button
            key={env.name}
            className={`border border-[#e9e7e1] py-2 px-4 rounded-xl text-xs text-[#788091] ${selectedEnvironment.name === env.name ? 'border-[#44a195] bg-[#e3f1f0] text-black' : ''}`}
            onClick={() => onSelect(env)}
          >
            {env.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentSelector;