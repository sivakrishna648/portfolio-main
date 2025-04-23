import React from 'react';
import { Briefcase, Calendar, Download, GraduationCap } from 'lucide-react';

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const Resume: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      position: 'Machine Learning Trainee (Intern)',
      company: 'Digital Bhem.',
      period: '2022 - 2022',
      description: 'Focused on applying machine learning techniques to real-world datasets and building predictive models..',
      responsibilities: [
        'Gained hands-on experience in data preprocessing, model training, and evaluation using Python, Scikit-learn, and Pandas',
        'Worked on classification and regression problems, including a project on predicting customer churn',
        'Developed and fine-tuned models using Random Forest, SVM, and Decision Trees',
        'Collaborated with a mentor to improve model accuracy and interpretability'
      ]
    },
    {
      id: 2,
      position: 'UI/UX Designer Intern',
      company: 'Creative Agency',
      period: '2023 - 2023',
      description: 'Designed and developed websites for various clients across industries.',
      responsibilities: [
        'Designed wireframes, mockups, and interactive prototypes using Figma',
        'Collaborated with senior designers to translate client requirements into intuitive UI/UX solutions',
        'Participated in user research and incorporated feedback into design improvements',
        'Gained experience in design systems, component libraries, and mobile-first design'
      ]
    },
  
  ];

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Use the correct path to your resume file
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A summary of my professional experience and work history.
          </p>
          <button 
            onClick={handleDownloadResume}
            className="inline-flex items-center mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="flex items-center text-2xl font-bold text-white mb-8">
            <Briefcase size={24} className="text-cyan-400 mr-3" />
            Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1 animate-fadeInLeft delay-${index}`}
              >
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">{experience.position}</h4>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {experience.period}
                  </div>
                </div>
                <h5 className="text-cyan-400 mb-4">{experience.company}</h5>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <h6 className="text-white font-semibold mb-2">Key Responsibilities:</h6>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="flex items-center text-2xl font-bold text-white mt-16 mb-8">
            <GraduationCap size={24} className="text-cyan-400 mr-3" />
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Neural Networks and Deep Learning', issuer: 'coursera', year: '2023' },
              { name: 'Oracle Cloud Infrastructure Data Science Professional', issuer: 'Oracle University', year: '2023' },
              { name: 'Data analyst', issuer: 'Forage', year: '2025' },
              { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2021' }
            ].map((cert, index) => (
              <div 
                key={index} 
                className={`bg-slate-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300 animate-fadeInUp delay-${index}`}
              >
                <h4 className="text-white font-semibold">{cert.name}</h4>
                <div className="flex justify-between mt-2">
                  <span className="text-cyan-400">{cert.issuer}</span>
                  <span className="text-gray-400 text-sm">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;