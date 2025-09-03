
import React from 'react';

const UniversityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V10l-9-7-9 7v12z" />
    <path d="M12 22V10" />
    <path d="M6 12.5V10" />
    <path d="M18 12.5V10" />
    <path d="M12 7l5 3.5" />
    <path d="M12 7l-5 3.5" />
  </svg>
);

export default UniversityIcon;
