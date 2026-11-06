import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] py-8 md:py-12">
      <main className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Projects
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            A collection of my design and development work.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </main>
    </div>
  );
};