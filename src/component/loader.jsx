import PixelBlast from "@/components/PixelBlast";
import { useState, useEffect } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <PixelBlast/>
        <div className="absolute bitronor  text-white text-4xl font-bold tracking-widest animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return children;
};

export default Loader;
