import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center bg-grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-pixel uppercase leading-tight tracking-tight text-black dark:text-white">
            Google Developer Groups, RBU
          </h1>
          
          <p className="text-lg sm:text-xl font-mono text-gray-800 dark:text-gray-300 max-w-xl leading-relaxed">
            Empowering students with cutting-edge tech skills, community, and resources for a future in technology
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 bg-white dark:bg-zinc-900 text-black dark:text-white font-bold border-4 border-black dark:border-white shadow-neo hover:shadow-neo-hover transition-all">
              LEARN MORE
            </button>
            <button className="px-6 py-3 bg-white dark:bg-zinc-900 text-black dark:text-white font-bold border-4 border-black dark:border-white shadow-neo hover:shadow-neo-hover transition-all">
              PROFILE
            </button>
          </div>
          
          <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-wider">
            GDG • RBU
          </div>
        </div>

        {/* Right Content - Abstract Shape */}
        <div className="hidden lg:flex justify-center items-center relative h-[400px]">
          {/* Abstract Black Shape imitating the figma design */}
          <div className="absolute w-[80%] h-[80%] bg-black dark:bg-white rounded-3xl" style={{
            clipPath: 'polygon(0% 20%, 30% 20%, 30% 0%, 100% 0%, 100% 70%, 70% 70%, 70% 100%, 0% 100%)'
          }}></div>
          
          {/* Search Bar inside the shape */}
          <div className="relative z-10 w-2/3">
            <div className="flex items-center bg-white dark:bg-zinc-900 rounded-full px-4 py-3 border-4 border-black shadow-neo">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="gdgr" 
                className="bg-transparent border-none outline-none w-full font-mono text-black dark:text-white"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
