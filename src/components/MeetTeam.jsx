import { CheckCircle2 } from 'lucide-react';
import teamImg from '../assets/image3.png'; // Will replace with actual team image or use a placeholder if not isolated

export default function MeetTeam() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="border-4 border-black dark:border-white shadow-neo bg-white dark:bg-zinc-900 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Text Side */}
        <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-pixel leading-tight mb-8 text-black dark:text-white">
            Meet the<br/>Google<br/>Developer<br/>Group Team
          </h2>
          
          <p className="font-sans text-gray-800 dark:text-gray-300 mb-8 font-medium leading-relaxed">
            Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-black dark:text-white mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-black dark:text-white mb-1">Passionate Community Leaders</h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-black dark:text-white mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-black dark:text-white mb-1">Empowering Developers</h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  We host meetups and codelabs to help developers stay current with modern tools and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image Side */}
        <div className="lg:w-1/2 bg-gray-200 border-t-4 lg:border-t-0 lg:border-l-4 border-black dark:border-white relative min-h-[400px]">
          {/* We use a placeholder since the exact isolated team image isn't available, but we can style it */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${teamImg})`}}>
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
