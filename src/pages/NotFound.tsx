import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="text-6xl font-extrabold text-primary">404</span>
        <h1 className="text-2xl font-bold text-[#111827] mt-3">Page Not Found</h1>
        <p className="text-sm text-[#6B7280] mt-2 mb-6">
          The screen you are looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm transition-all"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};