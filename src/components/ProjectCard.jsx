import React from 'react';

/**
 * Completely redesigned ProjectCard with guaranteed working "Lue lisää" buttons
 * Clean implementation with proper flexbox layout
 */
export default function ProjectCard({ title, description, meta = [], imageUrl, index = 0 }) {
  return (
    <article 
      className="project-card-new"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="project-image-wrapper">
          <img 
            src={imageUrl} 
            alt={title} 
            loading="lazy" 
            className="project-image" 
          />
          <div className="image-hover-overlay">
            <div className="overlay-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M15 3H6A3 3 0 0 0 3 6V18A3 3 0 0 0 6 21H18A3 3 0 0 0 21 18V9L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3V9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Section - Flexbox Layout */}
      <div className="project-content-wrapper">
        {/* Meta Tags */}
        {Array.isArray(meta) && meta.length > 0 && (
          <div className="project-meta-tags">
            {meta.map((tag, i) => (
              <span key={i} className="project-meta-tag">{tag}</span>
            ))}
          </div>
        )}
        
        {/* Title */}
        <h3 className="project-title-new">{title}</h3>
        
        {/* Description - This will grow to fill space */}
        <p className="project-description-new">{description}</p>
        
        {/* Lue lisää Button - Always at bottom */}
        <div className="lue-lisaa-button">
          <span className="button-text-bold">Lue lisää</span>
          <svg className="button-arrow-bold" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="project-card-glow"></div>
    </article>
  );
}