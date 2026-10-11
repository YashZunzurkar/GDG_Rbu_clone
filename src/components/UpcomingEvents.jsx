import { ArrowUpRight } from 'lucide-react';

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-dashed border-gray-300 dark:border-gray-700">
      <h2 className="text-4xl sm:text-5xl font-pixel text-center mb-16 text-black dark:text-white">
        Upcoming Event
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Card - Gradient */}
        <div className="group relative rounded-3xl border-4 border-black dark:border-white bg-gradient-to-br from-gray-200 to-gray-800 dark:from-gray-700 dark:to-gray-950 p-8 min-h-[400px] flex flex-col justify-between shadow-neo overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="font-mono text-sm text-black dark:text-white uppercase">GDG Orientation</span>
            <span className="px-4 py-1 bg-white border-2 border-black dark:border-white rounded-full text-xs font-bold shadow-sm">
              UPCOMING
            </span>
          </div>
          
          <div className="mt-auto z-10">
            <h3 className="text-3xl font-pixel text-white mb-4 shadow-black drop-shadow-md">GDG ORIENTATION</h3>
            <p className="text-gray-100 font-sans text-sm md:text-base leading-relaxed max-w-lg mb-6">
              Google Developer Groups (GDG) – Student Chapter is a community of students passionate about technology, innovation, and learning. We bring students together to learn, build, and grow through technical workshops, hands-on sessions, hackathons, projects, and networking.
            </p>
            <button className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-black dark:border-white flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-sm group-hover:scale-110">
              <ArrowUpRight className="w-6 h-6 text-black dark:text-white" />
            </button>
          </div>
          
          {/* Decorative mesh/gradient overlay could go here */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        </div>

        {/* Right Card - Yellow */}
        <div className="relative rounded-3xl border-4 border-black dark:border-white bg-[#FBBC04] p-8 min-h-[400px] flex flex-col justify-center shadow-neo">
          {/* Cutout notch effect (simplified via positioned element) */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-zinc-950 rounded-full border-r-4 border-black dark:border-white hidden lg:block"></div>
          
          <div className="pl-0 lg:pl-6">
            <h3 className="text-6xl font-pixel text-black leading-tight mb-8">
              New<br/>Event
            </h3>
            
            <div className="border-t-2 border-dashed border-black/30 dark:border-white/30 pt-6 mb-8">
              <p className="font-mono text-sm text-black mb-1 uppercase">Date & Time</p>
              <p className="font-bold text-xl text-black">Oct 7, 2026</p>
              <p className="font-bold text-xl text-black">3:00 PM</p>
            </div>
            
            <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-xl hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
