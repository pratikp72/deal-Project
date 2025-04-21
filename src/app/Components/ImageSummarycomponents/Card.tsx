import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  link?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, link, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};