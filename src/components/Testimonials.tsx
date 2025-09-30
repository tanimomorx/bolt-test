import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      quote: "Dr. Chen's innovative approach to quantum machine learning has been transformative for our research. Their ability to bridge theoretical concepts with practical applications is exceptional.",
      author: "Dr. Sarah Mitchell",
      role: "Director of AI Research",
      company: "Stanford University",
      avatar: "👩‍🔬",
      rating: 5,
      project: "Quantum ML Framework"
    },
    {
      quote: "Working with Alex on our ethical AI initiative was extraordinary. They brought deep technical expertise combined with a genuine commitment to responsible AI development.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "TechForGood Inc",
      avatar: "👨‍💼",
      rating: 5,
      project: "Ethical AI Auditor"
    },
    {
      quote: "The federated learning platform Alex developed revolutionized our ability to collaborate on medical research while maintaining patient privacy. Truly groundbreaking work.",
      author: "Dr. Lisa Park",
      role: "Chief Medical Officer",
      company: "Global Health Alliance",
      avatar: "👩‍⚕️",
      rating: 5,
      project: "Healthcare AI Platform"
    },
    {
      quote: "Alex's consulting on our quantum computing initiative provided invaluable strategic direction. Their research background combined with industry insight is unmatched.",
      author: "James Thompson",
      role: "VP of Technology",
      company: "Future Systems Corp",
      avatar: "👨‍💻",
      rating: 5,
      project: "Quantum Strategy"
    },
    {
      quote: "The sustainable computing solutions Alex provided helped us reduce our AI training costs by 40% while maintaining performance. Brilliant approach to green technology.",
      author: "Elena Vasquez",
      role: "Head of Engineering",
      company: "EcoAI Solutions",
      avatar: "👩‍🔧",
      rating: 5,
      project: "Green Computing"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-800/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by leading organizations and research institutions worldwide
            </p>
          </div>

          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Testimonial */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-3xl p-8 md:p-12 border border-gray-600/30 backdrop-blur-sm">
              <div className="absolute top-8 left-8 text-blue-400/20">
                <Quote size={48} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-2xl">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="font-semibold text-white text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-blue-400">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-px h-16 bg-gray-600"></div>
                  
                  <div className="text-center md:text-left">
                    <div className="text-sm text-gray-400">Project:</div>
                    <div className="text-purple-400 font-medium">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 transform hover:scale-105"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 transform hover:scale-105"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Client Logos */}
            <div className="mt-16 pt-8 border-t border-gray-700/50">
              <p className="text-center text-gray-400 mb-8">Trusted by leading organizations</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
                {['Stanford', 'MIT', 'Google', 'Microsoft', 'IBM'].map((company) => (
                  <div key={company} className="text-center text-gray-500 font-semibold">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;