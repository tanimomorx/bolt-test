import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, BookOpen, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Award size={24} />, value: 2, label: 'Publications', suffix: '' },
    { icon: <Users size={24} />, value: 5, label: 'Major Projects', suffix: '+' },
    { icon: <BookOpen size={24} />, value: 1, label: 'Years Experience', suffix: '+' },
    { icon: <Coffee size={24} />, value: 10, label: 'Technologies', suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-700 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-500"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Building the future with 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI and intelligent automation</span>
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Currently pursuing my Bachelor's in Computer Science at Ahsanullah University of Science and Technology, 
                I've gained hands-on experience building enterprise-grade applications and AI-powered solutions.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Wafi Solutions, I pioneered the company's first use of agentic AI and OCR in enterprise applications, 
                delivering multi-agent systems, conversational AI chatbots, and custom automation solutions that drive real business value.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Agentic AI', 'Machine Learning', 'Full Stack Development', 'OCR Solutions', 'Enterprise Systems'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} isVisible={isVisible} delay={index * 100} />
            ))}
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

export default About;