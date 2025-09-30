import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const Teaching: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teachingExperience = {
    title: 'Co-founder & ICT Programming Trainer',
    organization: 'Advance Virtual School',
    period: '2020 - Present',
    location: 'Dhaka, Bangladesh',
    description: 'Leading educational initiatives in programming and ICT, developing curriculum and training the next generation of developers.',
    achievements: [
      'Co-founded an innovative virtual learning platform for programming education',
      'Designed and delivered comprehensive ICT and programming curricula',
      'Trained 100+ students in various programming languages and technologies',
      'Developed interactive learning modules for web development and AI concepts',
      'Mentored students in real-world project development and industry best practices'
    ],
    subjects: [
      'Web Development (HTML, CSS, JavaScript, React)',
      'Backend Development (Python, Django, FastAPI)',
      'Database Management (PostgreSQL, MongoDB)',
      'AI & Machine Learning Fundamentals',
      'Software Engineering Principles',
      'Version Control (Git/GitHub)'
    ]
  };

  const teachingStats = [
    { icon: <Users size={24} />, value: 100, label: 'Students Trained', suffix: '+' },
    { icon: <BookOpen size={24} />, value: 6, label: 'Subjects Taught', suffix: '' },
    { icon: <Award size={24} />, value: 4, label: 'Years Teaching', suffix: '+' },
    { icon: <GraduationCap size={24} />, value: 95, label: 'Success Rate', suffix: '%' },
  ];

  return (
    <section id="teaching" className="py-20 bg-gray-800/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Teaching & Education
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about sharing knowledge and empowering the next generation of developers through innovative education
            </p>
          </div>

          {/* Teaching Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teachingStats.map((stat, index) => (
              <StatCard key={index} {...stat} isVisible={isVisible} delay={index * 100} />
            ))}
          </div>

          {/* Main Teaching Experience */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{teachingExperience.title}</h3>
                      <div className="flex items-center text-blue-400 font-medium mt-1">
                        <BookOpen size={16} className="mr-2" />
                        {teachingExperience.organization}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {teachingExperience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {teachingExperience.location}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {teachingExperience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {teachingExperience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Subjects Taught:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {teachingExperience.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <Award size={16} className="text-blue-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Teaching Philosophy</h3>
              <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
                "I believe in hands-on learning combined with strong theoretical foundations. My approach focuses on 
                practical problem-solving, real-world project development, and fostering critical thinking skills 
                that prepare students for the rapidly evolving tech industry."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  isVisible: boolean;
  delay: number;
}> = ({ icon, value, label, suffix, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = value / 50;
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 30);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div className={`text-center p-6 rounded-xl bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

export default Teaching;