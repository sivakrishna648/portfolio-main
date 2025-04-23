import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slideInFromTop">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400 animate-glow">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8 animate-scaleIn"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-slideInFromLeft">
            <div className="relative group">
              <div className="w-full h-96 bg-slate-700 rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-400 rounded-lg animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-cyan-400 rounded-lg animate-rotate"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slideInFromRight">
            <h3 className="text-2xl font-bold text-white mb-4 animate-fadeInUp">Frontend Developer & UI/UX Designer</h3>
            <p className="text-gray-300 mb-6 animate-fadeInUp animation-delay-200">
              Hello! I'm Shivakrishna, I am an aspiring web developer with a strong academic background in computer science and hands-on experience in web development, UI/UX design, and front-end technologies.
              I graduated with a B.Tech from Kalasalingam Academy of Research and Education in 2025. During my academic journey, I developed a passion for creating responsive, user-friendly web applications and intuitive interfaces.
            </p>

            <p className="text-gray-300 mb-6 animate-fadeInUp animation-delay-200">
              I have worked on projects such as an E-Commerce Website, Restaurant Website using UI and UX, and a Weather Dashboard, where I applied my web development and UI/UX design skills to create user-friendly and visually appealing applications.
              These projects enhanced my ability to design interfaces and develop responsive web applications using modern technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-gray-300 mb-8 animate-fadeInUp animation-delay-400">
            I am passionate about leveraging tools like React, Figma, and Tailwind CSS to create seamless and engaging user experiences, and I continuously strive to improve my design and development skills.
            My ultimate goal is to become a proficient web developer and UI/UX designer who can contribute significantly to creating intuitive and visually appealing web applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8 animate-fadeInUp animation-delay-600">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Name:</span> Shiva krishna</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Email:</span> sivakrishnagudipudi6@gmail.com</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">From:</span> Andhra Pradesh, India</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Freelance:</span> Available</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 inline-block animate-pulse"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;