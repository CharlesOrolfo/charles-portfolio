import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Briefcase, Code } from 'lucide-react';
import { projects } from '../data/projects';
import { ImageCarousel } from '../components/ImageCarousel';
import { DecorativeWave } from '../components/DecorativeWave';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden">
      <main className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-28 md:py-10 w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#4B5563] hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            All Projects
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Project Info */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base font-medium text-[#4B5563] mt-1">
              {project.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mt-6">
              {project.description}
            </p>

            {/* Optional External Links */}
            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-all"
                  >
                    {link.label}
                    <ExternalLink size={15} className="ml-1.5" />
                  </a>
                ))}
              </div>
            )}

            {/* Role & Tools Badges */}
            <div className="mt-8 space-y-3">
              {/* Role Card */}
              <div className="flex items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 mr-3.5">
                  <Briefcase size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#111827]">My Role</span>
                  <span className="block text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Tools Card */}
              <div className="flex items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0 mr-3.5">
                  <Code size={18} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#111827]">Tools</span>
                  <span className="block text-xs sm:text-sm text-[#4B5563] mt-0.5">
                    {project.tools.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="lg:col-span-7">
            <ImageCarousel images={project.images} title={project.title} />
          </div>

        </div>
      </main>

      <DecorativeWave />
    </div>
  );
};