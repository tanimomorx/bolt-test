import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ExternalLink, Tag, TrendingUp, Award, Newspaper } from 'lucide-react';

const News: React.FC = () => {
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

  const newsItems = [
    {
      title: 'AI Support Bot Launched for Wafilife - Bangladesh\'s 2nd Largest Online Bookseller',
      category: 'Product Launch',
      date: '2024-11-15',
      excerpt: 'Successfully deployed an intelligent customer support bot using Semantic Kernel and multi-agent orchestration, revolutionizing customer service for thousands of daily users.',
      tags: ['AI', 'Semantic Kernel', 'Customer Support', 'E-commerce'],
      type: 'achievement',
      link: '#'
    },
    {
      title: 'Multi-Agent Hotel Management System Goes Live',
      category: 'Innovation',
      date: '2024-10-20',
      excerpt: 'Pioneered the first agentic AI implementation at Wafi Solutions with a comprehensive hotel management system automating bookings, service requests, and operations.',
      tags: ['Multi-Agent AI', '.NET', 'Hotel Management', 'Automation'],
      type: 'achievement',
      link: '#'
    },
    {
      title: 'Research Paper Published: Multi-modal Deep Learning for Stock Prediction',
      category: 'Research',
      date: '2023-03-15',
      excerpt: 'Published groundbreaking research on stock market prediction using multi-modal deep learning approaches at IEEE CCWC 2023.',
      tags: ['Deep Learning', 'Stock Prediction', 'IEEE', 'Research'],
      type: 'publication',
      link: 'https://ieeexplore.ieee.org/abstract/document/10099255'
    },
    {
      title: 'Co-founded Advance Virtual School - Expanding ICT Education',
      category: 'Education',
      date: '2020-09-01',
      excerpt: 'Launched innovative virtual learning platform focusing on programming and ICT education, training 100+ students in modern development practices.',
      tags: ['Education', 'Programming', 'ICT', 'Virtual Learning'],
      type: 'milestone',
      link: '#'
    },
    {
      title: 'Custom OCR Engine Development Improves Document Processing by 40%',
      category: 'Technology',
      date: '2024-08-10',
      excerpt: 'Developed and deployed a custom OCR solution using Tesseract, significantly improving document digitization speed and accuracy for enterprise clients.',
      tags: ['OCR', 'Tesseract', 'Document Processing', 'Enterprise'],
      type: 'achievement',
      link: '#'
    },
    {
      title: 'First IEEE Conference Paper: Hybrid ML Approach for Bangladesh Stock Market',
      category: 'Research',
      date: '2022-09-20',
      excerpt: 'Published first research paper presenting a hybrid machine learning method for stock price prediction in the Bangladesh market at IEEE IEMCON 2022.',
      tags: ['Machine Learning', 'Stock Market', 'Bangladesh', 'IEEE'],
      type: 'publication',
      link: 'https://ieeexplore.ieee.org/abstract/document/9946610'
    }
  ];

  const categories = ['All', 'Product Launch', 'Innovation', 'Research', 'Education', 'Technology'];
  
  const filteredNews = activeFilter === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award size={20} className="text-yellow-400" />;
      case 'publication':
        return <Newspaper size={20} className="text-blue-400" />;
      case 'milestone':
        return <TrendingUp size={20} className="text-green-400" />;
      default:
        return <Calendar size={20} className="text-gray-400" />;
    }
  };

  return (
    <section id="news" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Stay updated with my latest achievements, research publications, and professional milestones
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredNews.map((item, index) => (
              <NewsCard key={index} item={item} isVisible={isVisible} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsCard: React.FC<{
  item: {
    title: string;
    category: string;
    date: string;
    excerpt: string;
    tags: string[];
    type: string;
    link: string;
  };
  isVisible: boolean;
  delay: number;
}> = ({ item, isVisible, delay }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award size={20} className="text-yellow-400" />;
      case 'publication':
        return <Newspaper size={20} className="text-blue-400" />;
      case 'milestone':
        return <TrendingUp size={20} className="text-green-400" />;
      default:
        return <Calendar size={20} className="text-gray-400" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div
      className={`bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/70 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            {getTypeIcon(item.type)}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
              {item.category}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar size={14} className="mr-1" />
              {formatDate(item.date)}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
            {item.title}
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {item.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          {item.link !== '#' && (
            <a
              href={item.link}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              Read More <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;