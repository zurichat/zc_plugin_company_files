import React from "react";

const LoadAnimation = () => {
  return (
    <div className="text-center mt-60 preloader">
      <div className="p-3 flex items-center">
      
       <svg class="animate-bounce h-5 w-5 mr-3 bg-green-600 rounded-full" viewBox="0 0 24 24">
        </svg>
       <svg class="animate-bounce h-4 w-4 mr-3 bg-green-500 rounded-full" viewBox="0 0 24 24">
        </svg>
       <svg class="animate-bounce h-3 w-3 mr-3 bg-green-400 rounded-full" viewBox="0 0 24 24">
        </svg>
       <svg class="animate-bounce h-2 w-2 mr-3 bg-green-300 rounded-full" viewBox="0 0 24 24">
        </svg>
             </div>
     
    </div>
  );
}

export default LoadAnimation;
