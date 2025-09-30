import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, ExternalLink, Award } from 'lucide-react';

const Publications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const publications = [
    {
      title: 'A Multi-modal Deep Learning Approach for Predicting Dhaka Stock Exchange',
      venue: '2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)',
      year: '2023',
      type: 'Conference',
      authors: 'Omor Al Tanim, et al.',
      citations: 15,
      impact: 'High',
      url: 'https://ieeexplore.ieee.org/abstract/document/10099255',
      abstract: 'This paper presents a multi-modal deep learning approach for predicting stock prices in the Dhaka Stock Exchange, combining various data sources and advanced neural network architectures to improve prediction accuracy...',
      tags: ['Deep Learning', 'Stock Prediction', 'Multi-modal', 'Financial Modeling']
    },
    {
      title: 'A Hybrid Method based on Machine Learning to Predict the Stock Prices in Bangladesh',
      venue: '2022 IEEE 13th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON)',
      year: '2022',
      type: 'Conference',
      authors: 'Omor Al Tanim, et al.',
      citations: 23,
      impact: 'High',
      url: 'https://ieeexplore.ieee.org/abstract/document/9946610',
      abstract: 'This research presents a hybrid machine learning method for predicting stock prices in the Bangladesh market, combining traditional statistical methods with modern ML algorithms to achieve better prediction accuracy...',
      tags: ['Machine Learning', 'Stock Prediction', 'Hybrid Methods', 'Bangladesh Market']
    }
  ];

  const filters = ['All', 'Journal', 'Conference'];
  
  const filteredPublications = activeFilter === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter);

  return (
    <section id="publications" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Research & Publications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Peer-reviewed research contributing to the advancement of AI, quantum computing, and ethical technology
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <StatItem icon={<Award size={24} />} value="2" label="Publications" />
              <StatItem icon={<Calendar size={24} />} value="38+" label="Citations" />
              <StatItem icon={<Users size={24} />} value="5+" label="Collaborators" />
              <StatItem icon={<ExternalLink size={24} />} value="2" label="IEEE Conferences" />
            </div>
          </div>

          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <PublicationCard 
                key={index} 
                publication={publication} 
                isVisible={isVisible} 
                delay={index * 100} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="text-center p-4 rounded-xl bg-gray-800/50">
    <div className="text-blue-400 mb-2 flex justify-center">{icon}</div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const PublicationCard: React.FC<{
  publication: {
    title: string;
    venue: string;
    year: string;
    type: string;
    authors: string;
    citations: number;
    impact: string;
    url: string;
    abstract: string;
    tags: string[];
  };
  isVisible: boolean;
  delay: number;
}> = ({ publication, isVisible, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/70 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              publication.type === 'Journal' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
            }`}>
              {publication.type}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              publication.impact === 'Very High' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
            }`}>
              {publication.impact} Impact
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-300 transition-colors duration-200">
            {publication.title}
          </h3>

          <div className="text-blue-400 font-medium mb-2">
            {publication.venue} • {publication.year}
          </div>

          <div className="text-gray-400 text-sm mb-3">
            {publication.authors}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{publication.citations} citations</span>
          </div>

          {isExpanded && (
            <div className="mb-4">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {publication.abstract}
              </p>
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
            <a
              href={publication.url}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              View Paper <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;