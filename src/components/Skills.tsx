import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other' | 'java' | 'python' ;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 75, category: 'frontend' },
    { name: 'JavaScript', level: 65, category: 'frontend' },
    


    // Backend
    { name: 'Node.js', level: 65, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
  

    // Design
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'UI/UX Design', level: 85, category: 'design' },

    // Other
    { name: 'Git/GitHub', level: 85, category: 'other' },
    { name: 'Responsive Design', level: 95, category: 'other' },

    // Java
    { name: 'Core Java', level: 75, category: 'java' },
    { name: 'Object-Oriented Programming (OOP) ', level: 75, category: 'java' },
    { name: 'Data Structures and Algorithms', level: 65, category: 'java' },

    // Python
    { name: 'Python', level: 95, category: 'python' },
    { name: 'Machine Learning', level: 80, category: 'python' },
    { name: 'Deep Learning', level: 65, category: 'python' },
    
    
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other Skills' },
    { id: 'java', name: 'Java' },
    { id: 'python', name: 'Python' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.id} className="animate-fadeInUp">
              <h3 className="text-xl font-bold text-white mb-6">{category.name}</h3>
              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out progress-bar`}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;