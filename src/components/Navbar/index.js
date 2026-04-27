import { Box, Dot } from "lucide-react";

const NavBar = () => {
    return (
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
    );
}

export default NavBar;