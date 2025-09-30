import React, { useState } from 'react';
import { MapPin, Mail, GraduationCap, BookOpen, Users, FileText, Award, Twitter, Linkedin, Github, Menu, X } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileLinks = [
    { icon: <MapPin size={16} />, label: 'Dhaka, Bangladesh', href: '#', color: 'text-gray-400' },
    { icon: <Mail size={16} />, label: 'Email', href: 'mailto:tanim.pro@gmail.com', color: 'text-blue-400' },
    { icon: <GraduationCap size={16} />, label: 'Google Scholar', href: '#', color: 'text-blue-400' },
    { icon: <BookOpen size={16} />, label: 'ResearchGate', href: '#', color: 'text-green-400' },
    { icon: <FileText size={16} />, label: 'Semantic Scholar', href: '#', color: 'text-purple-400' },
    { icon: <Award size={16} />, label: 'Scopus', href: '#', color: 'text-orange-400' },
    { icon: <Users size={16} />, label: 'ORCID', href: '#', color: 'text-green-500' },
    { icon: <Twitter size={16} />, label: 'Twitter', href: '#', color: 'text-blue-400' },
    { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://linkedin.com/in/tanimomor', color: 'text-blue-500' },
    { icon: <Github size={16} />, label: 'Github', href: 'https://github.com/tanimomor', color: 'text-gray-300' },
  ];

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-gray-800/95 backdrop-blur-md border-r border-gray-700/50 z-40 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Omor Al Tanim</h1>
            <p className="text-blue-400 font-medium mb-2">Fullstack AI Engineer</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Co-founder & ICT Programming Trainer at Advance Virtual School. 
              Building intelligent solutions with enterprise-grade applications.
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">Connect</h3>
            <div className="space-y-3">
              {profileLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`flex items-center space-x-3 text-sm hover:text-white transition-colors duration-200 ${link.color}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">Navigation</h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white hover:bg-gray-700/50 px-3 py-2 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Stats */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">2</div>
                <div className="text-xs text-gray-400">Publications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">1+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">38+</div>
                <div className="text-xs text-gray-400">Citations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;