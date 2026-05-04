"use client";

import { Box, Dot, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      <div className="nav flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="rounded-full flex items-center justify-center w-10 h-10 border">
            <Box size="18px" />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-black font-[600]">Spatial</p>
            <p className="text-[#788091] text-[12px]">Furniture AR</p>
          </div>
        </div>

        <div className="flex text-[#788091] text-xs items-center">
          <p>Drag to rotate</p>
          <Dot />
          <p>Scroll to zoom</p>
          <Dot />

          <button
            onClick={() => setShowCredits(true)}
            className="hover:text-black transition-colors"
          >
            Credits
          </button>
        </div>
      </div>

      {showCredits && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setShowCredits(false)}
              className="absolute right-4 top-4 text-[#788091] hover:text-black"
              aria-label="Close credits"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold text-black">Credits</h2>
            <p className="mt-2 text-sm text-[#788091]">
              3D assets used in this project:
            </p>

            {/* chair credits */}
            <div className="mt-4 rounded-xl border p-4 text-sm">
              <p className="font-medium text-black">“Cover Chair”</p>
              <p className="text-[#788091]">
                by rfinterior on Sketchfab
              </p>

              <div className="mt-3 flex flex-col gap-1 text-[#44a195]">
                <a
                  href="https://skfb.ly/QWqo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4"
                >
                  View model
                </a>

                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4"
                >
                  Licensed under CC BY 4.0
                </a>
              </div>
            </div>

            {/* sofa credits */}
            <div className="mt-4 rounded-xl border p-4 text-sm">
              <p className="font-medium text-black">“Sofa”</p>
              <p className="text-[#788091]">
                by L_Krajewski on Sketchfab
              </p>

              <div className="mt-3 flex flex-col gap-1 text-[#44a195]">
                <a
                  href="https://skfb.ly/HHwr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4"
                >
                  View model
                </a>

                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4"
                >
                  Licensed under CC BY 4.0
                </a>
              </div>
            </div>

            {/* furniture credits */}
            <div className="mt-4 rounded-xl border p-4 text-sm">
              <p className="font-medium text-black">“Furniture Set”</p>
              <p className="text-[#788091]">
                by patrakeevasveta on Sketchfab
              </p>

              <div className="mt-3 flex flex-col gap-1 text-[#44a195]">
                <a
                  href="https://skfb.ly/6TBRY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4"
                >
                  View model
                </a>

                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4"
                >
                  Licensed under CC BY 4.0
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;