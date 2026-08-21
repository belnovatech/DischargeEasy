import React from 'react';
import './SectionLabel.css';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '' }) => {
  return <span className={`section-label ${className}`}>{children}</span>;
};

export default SectionLabel;
