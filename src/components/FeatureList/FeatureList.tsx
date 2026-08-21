import React from 'react';
import './FeatureList.css';
import { Check } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
  checkColor?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  items,
  columns = 1,
  className = '',
  checkColor = 'var(--teal)',
}) => {
  return (
    <ul className={`feature-list cols-${columns} ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="feature-item">
          <span className="feature-icon-wrapper" style={{ color: checkColor }}>
            <Check className="feature-icon" size={16} strokeWidth={3} />
          </span>
          <span className="feature-text">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
