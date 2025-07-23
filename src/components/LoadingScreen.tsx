
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8 flex items-center justify-center">
          {/* Atom structure with multiple orbiting particles */}
          <div className="relative w-32 h-32">
            {/* Central nucleus */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            
            {/* First orbit - horizontal */}
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '3s'}}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Second orbit - diagonal */}
            <div className="absolute inset-0 border-2 border-green-400/30 rounded-full animate-spin transform rotate-45" style={{animationDuration: '2.5s'}}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Third orbit - vertical */}
            <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin transform rotate-90" style={{animationDuration: '4s'}}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Fourth orbit - reverse diagonal */}
            <div className="absolute inset-0 border-2 border-red-400/30 rounded-full animate-spin transform -rotate-45" style={{animationDuration: '3.5s', animationDirection: 'reverse'}}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-red-400 to-rose-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Outer glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">
          Loading Portfolio
        </h2>
        
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/70 mt-4 text-sm">
          {progress}%
        </p>
        
        {/* Additional floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
