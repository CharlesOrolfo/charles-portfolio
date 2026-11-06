import React from 'react';
import { Download, ExternalLink, GraduationCap, Briefcase, Wrench } from 'lucide-react';
import { siteConfig } from '../data/site';
import { DecorativeWave } from '../components/DecorativeWave';

export const Resume: React.FC = () => {
  const { resumeData } = siteConfig;

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pt-6 pb-28 md:py-10 w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-blue-100">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Resume
            </h1>
            <p className="text-sm text-[#4B5563] mt-1">
              Education, experience, and technical competencies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.resumePdfPath}
              download
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm transition-all"
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </a>
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[#1F2937] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all"
              >
                LinkedIn
                <ExternalLink size={14} className="ml-1.5 text-gray-500" />
              </a>
            )}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Education */}
          <section>
            <div className="flex items-center space-x-2.5 text-primary mb-4">
              <GraduationCap size={22} />
              <h2 className="text-xl font-bold text-[#111827]">Education</h2>
            </div>
            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-blue-50 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-base text-[#111827]">{edu.degree}</h3>
                    <span className="text-xs font-medium text-gray-500 mt-1 sm:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mt-0.5">{edu.institution}</p>
                  {edu.details && (
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 mt-2.5 space-y-1">
                      {edu.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center space-x-2.5 text-primary mb-4">
              <Briefcase size={22} />
              <h2 className="text-xl font-bold text-[#111827]">Experience</h2>
            </div>
            <div className="space-y-4">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-blue-50 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-base text-[#111827]">{exp.role}</h3>
                    <span className="text-xs font-medium text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mt-0.5">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="flex items-center space-x-2.5 text-primary mb-4">
              <Wrench size={22} />
              <h2 className="text-xl font-bold text-[#111827]">Skills & Toolkit</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resumeData.skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-blue-50 shadow-sm">
                  <h3 className="text-sm font-bold text-[#111827] mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-lg bg-blue-50 text-blue-800 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <DecorativeWave />
    </div>
  );
};