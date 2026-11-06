import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { siteConfig } from '../data/site';
import { DecorativeWave } from '../components/DecorativeWave';

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-8 pb-24 md:py-16 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Hero Column */}
          <div className="md:col-span-7 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#6B7280] uppercase mb-4">
              {siteConfig.greeting}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-6">
              {siteConfig.headlinePrefix}
              <span className="text-primary">{siteConfig.headlineHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-xl">
              {siteConfig.tagline}
            </p>

            {/* Mobile portrait: Displays below the intro on mobile as shown in reference */}
            <div className="w-full md:hidden mb-8">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-blue-100 shadow-card">
                <img
                  src={siteConfig.portraitImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm transition-all duration-200"
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <a
                href={siteConfig.resumePdfPath}
                download
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-[#1F2937] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200"
              >
                Resume
                <Download size={16} className="ml-2 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Right Hero Column: Desktop Portrait */}
          <div className="hidden md:block md:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-blue-100 to-indigo-50 shadow-soft border-4 border-white">
                <img
                  src={siteConfig.portraitImage}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback local unspash image if portrait file not present
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </main>

      <DecorativeWave />
    </div>
  );
};