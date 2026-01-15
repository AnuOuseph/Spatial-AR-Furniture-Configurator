import './index.css';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white flex justify-center items-center z-[1000]">
      <div className="text-center text-black">
        <div className="loading-spinner w-[50px] h-[50px] border-[4px] border-[gray-200] border-t-[4px] border-t-black rounded-[50%]"></div>
        <h2 className='mb-[10px] text-[1.8rem]'>Loading AR Experience</h2>
        <p className='text-[1.1rem] opacity-70'>Preparing your furniture configurator...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;