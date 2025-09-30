import React, { useState, useEffect, useRef } from 'react';
import { Brain, Zap, Shield, Lightbulb, Code, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Brain size={32} />,
      title: 'Agentic AI Development',
      description: 'Building intelligent multi-agent systems using Semantic Kernel and advanced AI frameworks for enterprise automation.',
      features: ['Multi-Agent Systems', 'Semantic Kernel', 'LangChain Integration', 'AI Orchestration']
    },
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern frameworks and cloud technologies.',
      features: ['React/Next.js', 'Django/FastAPI', '.NET Core', 'Cloud Deployment']
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'OCR & Document Processing',
      description: 'Custom OCR engines and intelligent document processing solutions for business automation.',
      features: ['Tesseract OCR', 'Document Digitization', 'Data Extraction', 'Workflow Automation']
    },
    {
      icon: <Shield size={32} />,
      title: 'Enterprise Systems',
      description: 'Development and customization of ERP, HRMS, and CRM systems for business optimization.',
      features: ['Frappe/ERPNext', 'HRMS Solutions', 'CRM Platforms', 'System Integration']
    },
    {
      icon: <Zap size={32} />,
      title: 'AI Chatbots & Automation',
      description: 'Conversational AI and automation bots for customer support and business process optimization.',
      features: ['Customer Support Bots', 'N8N Automation', 'API Integration', 'Scalable Solutions']
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Machine Learning Research',
      description: 'Applied research in machine learning with focus on stock market prediction and financial modeling.',
      features: ['Deep Learning', 'PyTorch/Keras', 'Financial Modeling', 'Research Publications']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions backed by deep research experience and practical industry knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} isVisible={isVisible} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
  };
  isVisible: boolean;
  delay: number;
}> = ({ service, isVisible, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
      
      <div className="relative z-10">
        <div className={`text-blue-400 mb-6 transform transition-all duration-300 ${isHovered ? 'scale-110 text-blue-300' : ''}`}>
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;