import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col bg-white rounded-3xl p-3 sm:p-4 border border-blue-50/80 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-50 relative flex items-center justify-center">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback placeholder if image not found
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Subtle gradient fallback for abstract projects */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-600/30 to-purple-500/20" />
      </div>

      {/* Card Content */}
      <div className="pt-4 pb-2 px-1 flex items-end justify-between">
        <div>
          <h3 className="text-base font-bold text-[#111827] group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[#6B7280] mt-0.5 font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="w-7 h-7 rounded-full bg-transparent group-hover:bg-primary/10 flex items-center justify-center text-[#111827] group-hover:text-primary transition-colors flex-shrink-0 ml-2">
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};