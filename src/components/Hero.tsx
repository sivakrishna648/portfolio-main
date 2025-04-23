import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl animate-rotate"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <p className="text-lg md:text-xl mb-2 text-cyan-400 font-medium animate-slideInFromTop">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="animate-slideInFromLeft inline-block">Shiva</span>
          <span className="text-cyan-400 animate-slideInFromRight inline-block">krishna</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 animate-fadeInUp animation-delay-400">
          <span className="typing-text">Frontend Developer | UI/UX Designer | Web Enthusiast</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8 animate-fadeInUp animation-delay-600">
          I create modern, responsive websites with clean and elegant designs.
          Let's collaborate to bring your ideas to life!
        </p>
        <div className="flex justify-center space-x-4 mb-12 animate-slideInFromBottom animation-delay-800">
          <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 animate-pulse">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
            View Projects
          </a>
        </div>
        <div className="flex justify-center space-x-6 animate-fadeInUp animation-delay-1000">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110" title="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110" title="Email Me">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <a href="#about" title="Scroll to About Section" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;