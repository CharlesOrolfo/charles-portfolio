import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '../data/site';
import { DecorativeWave } from '../components/DecorativeWave';

export const Contact: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-28 md:py-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Contact Links */}
          <div className="lg:col-span-6 flex flex-col">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mt-4 mb-8">
              {siteConfig.contactSubtitle}
            </p>

            <div className="space-y-4">
              {/* Email */}
              {siteConfig.socials.email && (
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  className="flex items-center p-3 sm:p-4 rounded-2xl bg-white border border-blue-50 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-sm font-bold text-[#111827]">Email</span>
                    <span className="block text-xs sm:text-sm text-[#4B5563] truncate">
                      {siteConfig.socials.email}
                    </span>
                  </div>
                </a>
              )}

              {/* LinkedIn */}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 rounded-2xl bg-white border border-blue-50 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-105 transition-transform">
                    <Linkedin size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-sm font-bold text-[#111827]">LinkedIn</span>
                    <span className="block text-xs sm:text-sm text-[#4B5563] truncate">
                      {siteConfig.socials.linkedin.replace(/^https?:\/\//, '')}
                    </span>
                  </div>
                </a>
              )}

              {/* GitHub */}
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 rounded-2xl bg-white border border-blue-50 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-105 transition-transform">
                    <Github size={22} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-sm font-bold text-[#111827]">GitHub</span>
                    <span className="block text-xs sm:text-sm text-[#4B5563] truncate">
                      {siteConfig.socials.github.replace(/^https?:\/\//, '')}
                    </span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Mountains Photo (matching Image 2) */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-blue-100 to-indigo-100 shadow-soft border-4 border-white">
              <img
                src={siteConfig.contactImage}
                alt="Scenic mountain landscape"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
          </div>

        </div>
      </main>

      <DecorativeWave />
    </div>
  );
};