import React from 'react';
import { Target, Code, Gamepad2 } from 'lucide-react';
import { siteConfig } from '../data/site';
import { DecorativeWave } from '../components/DecorativeWave';

export const About: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-28 md:py-10 w-full relative z-10">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-8">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Portrait Image */}
          <div className="md:col-span-5">
            <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-blue-100 to-indigo-50 shadow-soft border-4 border-white">
              <img
                src={siteConfig.portraitImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>

          {/* Text & Focus Items */}
          <div className="md:col-span-7 flex flex-col">
            <p className="text-base sm:text-lg text-[#374151] leading-relaxed mb-8">
              {siteConfig.aboutIntro}
            </p>

            {/* Structured details list */}
            <div className="space-y-4">
              {/* My Focus */}
              <div className="flex items-start p-4 rounded-2xl bg-white border border-blue-50 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 mr-4">
                  <Target size={20} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#111827]">My Focus</h2>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    {siteConfig.focus}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex items-start p-4 rounded-2xl bg-white border border-blue-50 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 mr-4">
                  <Code size={20} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#111827]">Tools</h2>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    {siteConfig.toolsSummary}
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="flex items-start p-4 rounded-2xl bg-white border border-blue-50 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 mr-4">
                  <Gamepad2 size={20} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-[#111827]">Interests</h2>
                  <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    {siteConfig.interests}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <DecorativeWave />
    </div>
  );
};