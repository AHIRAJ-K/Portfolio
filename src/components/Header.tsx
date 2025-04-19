import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", to: "/" },
    { title: "Projects", to: "/projects" },
    { title: "Skills", to: "/skills" },
    { title: "Experience", to: "/experience" },
    { title: "Hire Me", to: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-background/90 backdrop-blur-md shadow-md"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => navigate("/")}
            className="text-primary text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            AHIRAJ K
          </button>
        </motion.div>

        {/* add ml-6 on mobile; md:ml-0 resets on desktop */}
        <nav className="ml-6 overflow-x-auto md:ml-0 md:overflow-visible">
          <ul className="flex space-x-6 whitespace-nowrap">
            {navItems.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={item.to}
                  className="cursor-pointer font-medium text-sm transition-colors text-foreground hover:text-primary"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
