import React from 'react';
import { Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Kalasalingam Academy of Research and Education',
      location: 'Tamil Nadu, India',
      period: '2021 - 2025',
      description: 'Completed B.Tech in Computer Science and Engineering with a strong foundation in Software Development, Web Technologies, and Machine Learning.'

    },
    {
      id: 2,
      degree: 'Higher Secondary Education (12th Standard)',
      institution: 'sri chaitanya junior college',
      location: 'Andhra Pradesh, India',
      period: '2019 - 2021',
      description: 'Studied core subjects including Mathematics, Physics, Chemistry.'

    },
    {
      id: 3,
      degree: 'Secondary School Education (10th Standard)',
      institution: 'State Board of Secondary Education',
      location: 'Andhra Pradesh, India',
      period: '2018 - 2019',
      description: 'Completed foundational education with a focus on Mathematics, Science, Social Studies, and English, laying the groundwork for higher secondary studies.'

    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills in the field.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute inset-0 h-full w-1 bg-cyan-500/30 ml-6 md:mx-auto left-0 md:left-0 md:right-0 timeline-line"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {educationData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center animate-fadeIn`}
                  data-animation-delay={`${index * 0.3}s`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 ml-6 md:-ml-3 w-6 h-6 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="ml-16 md:ml-0 bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <Calendar size={18} className="text-cyan-400 mr-2" />
                        <span className="text-gray-400 text-sm">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                      <h4 className="text-cyan-400 mb-1">{item.institution}</h4>
                      <p className="text-gray-400 text-sm mb-4">{item.location}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
