
const ARView = ({ onExit }) => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-screen gap-2">
      <div className="">
        <p className="text-md">AR support coming soon — prototype stage</p>
      </div>
      <div className="">
        <button className="bg-black text-white text-sm py-2 px-4 rounded-xl cursor-pointer" onClick={onExit}>
          ← Back to 3D View
        </button>
      </div>
    </div>
  );
};

export default ARView;