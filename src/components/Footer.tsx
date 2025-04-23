import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Shivakrishna. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
          Made with <Heart size={14} className="text-cyan-500 mx-1" /> using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;