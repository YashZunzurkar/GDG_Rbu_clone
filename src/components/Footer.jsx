import { MapPin, Mail } from 'lucide-react';
import logo from '../assets/gdg logo.png';
import bottomPattern from '../assets/image 123.png';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-black dark:border-white bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section - Logo & Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <img src={logo} alt="GDG Logo" className="h-16 mb-4" />
          <h2 className="text-3xl md:text-4xl font-pixel text-black dark:text-white mb-2">
            Google Developer Groups
          </h2>
          <p className="font-bold font-sans text-gray-800 dark:text-gray-300">
            On Campus • Ramdeobaba University
          </p>
        </div>
        
        {/* Dashed Separator */}
        <div className="border-t-4 border-dashed border-black dark:border-white mb-12"></div>
        
        {/* Bottom Section - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          
          {/* Left Column (Address & Email) */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="flex items-start p-6 bg-blue-500 border-4 border-black dark:border-white shadow-neo">
              <MapPin className="w-8 h-8 text-black mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-black mb-1 text-lg">Ramdeobaba University</h4>
                <p className="font-medium text-black">Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013</p>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="flex items-center p-6 bg-yellow-400 border-4 border-black dark:border-white shadow-neo">
              <Mail className="w-8 h-8 text-black mr-4 flex-shrink-0" />
              <p className="font-bold text-black text-lg">gdsc@rknec.edu</p>
            </div>
          </div>
          
          {/* Right Column (Socials) */}
          <div className="h-full">
            <div className="h-full flex flex-col justify-center items-center p-8 bg-indigo-500 border-4 border-black dark:border-white shadow-neo min-h-[200px]">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us:</h3>
              <div className="flex space-x-6">
                <a href="#" className="p-3 bg-red-400 border-4 border-black dark:border-white hover:-translate-y-1 transition-transform">
                  <InstagramIcon />
                </a>
                <a href="#" className="p-3 bg-blue-400 border-4 border-black dark:border-white hover:-translate-y-1 transition-transform">
                  <LinkedinIcon />
                </a>
                <a href="#" className="p-3 bg-green-400 border-4 border-black dark:border-white hover:-translate-y-1 transition-transform">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Geometric Pattern */}
      <div className="w-full h-32 md:h-48 border-t-4 border-black dark:border-white" 
           style={{ backgroundImage: `url('${bottomPattern}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
      </div>
    </footer>
  );
}
