import React from 'react';

/**
 * Premium ProjectCard with 2025 design standards - sophisticated hover effects,
 * elegant typography, and micro-interactions that delight users
 */
export default function ProjectCard({ title, description, meta = [], imageUrl, index = 0 }) {
  return (
    <article 
      className="premium-project-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Image Container with Overlay */}
      {imageUrl && (
        <div className="card-image-container">
          <img src={imageUrl} alt={title} loading="lazy" className="card-image" />
          <div className="image-overlay">
            <div className="overlay-content">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M15 3H6A3 3 0 0 0 3 6V18A3 3 0 0 0 6 21H18A3 3 0 0 0 21 18V9L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3V9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Container */}
      <div className="card-content">
        {/* Meta Tags */}
        {Array.isArray(meta) && meta.length > 0 && (
          <div className="card-meta">
            {meta.map((m, i) => (
              <span key={i} className="meta-tag">{m}</span>
            ))}
          </div>
        )}
        
        {/* Title */}
        <h3 className="card-title">{title}</h3>
        
        {/* Description */}
        <p className="card-description">{description}</p>
        
        {/* Read More Indicator */}
        <div className="read-more-indicator">
          <span className="indicator-text">Lue lisää</span>
          <svg className="indicator-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="card-glow"></div>
    </article>
  );
}