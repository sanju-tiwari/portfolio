import { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, Zap } from 'lucide-react';

export default function Notfound() {
  const [glitchText, setGlitchText] = useState('404');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const glitchChars = ['4', '0', '4', '@', '#', '%', '&', '*'];
    const interval = setInterval(() => {
      const randomText = Array.from({ length: 3 }, () => 
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      setGlitchText(randomText);
      
      setTimeout(() => setGlitchText('404'), 150);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
        if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/"); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%',
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent transform skew-x-12" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-none tracking-tight filter drop-shadow-2xl">
            {glitchText}
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl md:text-9xl lg:text-[12rem] font-black text-purple-500/20 blur-sm">
              404
            </div>
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="inline-flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
              Oops! Page Not Found
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for has vanished into the digital void. 
            It might have been moved, deleted, or you've entered the wrong URL.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleGoHome}
            className="group relative cursor-pointer px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </span>
          </button>

          <button
            onClick={handleGoBack}
            className="group px-8 py-4 z-99 border-2 border-slate-600  text-slate-300 font-semibold cursor-pointer rounded-xl transition-all duration-300 hover:border-purple-400 hover:text-white hover:bg-purple-400/10"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </span>
          </button>


        </div>

        {/* Fun facts or suggestions */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-300 mb-3">While you're here...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
              <span>Check your URL for typos</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
              <span>Try using the search function</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
              <span>Browse from the homepage</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
              <span>Contact us if you need help</span>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-8 text-gray-500 text-sm">
          Error Code: 404 | Page Not Found
        </div>
      </div>
    </div>
  );
}