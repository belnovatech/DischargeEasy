import React from 'react';
import './SectionTitle.css';
import SectionLabel from '../SectionLabel/SectionLabel';

interface SectionTitleProps {
  label?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`section-title align-${align} ${className}`}>
      {label && <SectionLabel className="title-label">{label}</SectionLabel>}
      <h2 className="title-text">{title}</h2>
      {subtitle && <p className="title-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
