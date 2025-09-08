import LetterGlitch from "@/components/LetterGlitch";
import Lightning from "@/components/Lightning";
import { useState, useEffect } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Yaha tum apna actual loading logic laga sakte ho
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec ka demo loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <LetterGlitch hue={200} speed={2} intensity={2} size={1.2} />
        <div className="absolute text-white text-4xl font-bold tracking-widest animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return children; // jab loading khatam ho jaaye to content render karo
};

export default Loader;
