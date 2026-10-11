import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../assets/gdg logo.png';

const navLinks = [
  { name: 'Home', href: '#home', color: 'bg-blue-500' },
  { name: 'Team', href: '#team', color: 'bg-red-500' },
  { name: 'Events', href: '#events', color: 'bg-yellow-400' },
  { name: 'Gallery', href: '#gallery', color: 'bg-green-500' },
  { name: 'Portfolio', href: '#portfolio', color: 'bg-blue-400' },
  { name: 'More', href: '#more', color: 'bg-blue-300' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm border-b-4 border-black dark:border-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home">
              <img src={logo} alt="GDG Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full border-2 border-black dark:border-white font-bold text-black ${link.color} shadow-neo-hover hover:-translate-y-1 transition-transform`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Theme Toggle + Profile (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white overflow-hidden bg-gray-200">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border-2 border-black dark:border-white text-black dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t-2 border-black dark:border-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg border-2 border-black dark:border-white font-bold text-black ${link.color} shadow-neo my-2`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center mt-4 px-4">
              <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white overflow-hidden bg-gray-200 mr-3">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
              </div>
              <span className="font-bold font-sans">Saptanshu Wanjari</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
