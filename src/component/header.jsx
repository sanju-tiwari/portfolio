import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // ✅ use the real NavLink

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setNavOpen(false);
    };

    if (navOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [navOpen]);

  const handleNavClick = () => {
    setNavOpen(false);
  };

  return (
    <>
      <header className="relative w-full text-white shadow-lg z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <div className="flex-shrink-0"></div>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-5 space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden transform hover:scale-105
                    ${
                      isActive
                        ? "bg-yellow-500 text-black shadow-lg scale-105"
                        : "text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200"
                    }`
                  }
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                </NavLink>
              ))}
            </nav>

            {/* Mobile button */}
            <button
              onClick={() => setNavOpen(true)}
              className="md:hidden p-2 text-white hover:text-red-600 hover:bg-gray-100 rounded-lg transition-all duration-200 transform hover:scale-110"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      {navOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setNavOpen(false)}
          ></div>

          <div className="relative bg-white h-full w-80 max-w-sm ml-auto shadow-2xl transform transition-transform duration-300 ease-out animate-slide-in">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-yellow-50">
              <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
              <button
                onClick={() => setNavOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-lg transition-all duration-200 transform hover:scale-110"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="p-6 space-y-3">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block px-4 py-4 text-lg font-medium rounded-xl transition-all duration-200 transform hover:scale-102 hover:translate-x-2
                    ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg"
                        : "text-gray-700 hover:text-black hover:bg-gray-100 hover:shadow-md"
                    }`
                  }
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: `slideInRight 0.3s ease-out forwards`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <svg
                      className="w-5 h-5 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}

export default Header;
