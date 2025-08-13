import React from 'react';

/**
 * ProjectCard shows a project's title and description in a glassmorphic card.
 * If an image is provided (future enhancement), it can be rendered above the
 * title. The card scales up slightly on hover for interactivity.
 */
export default function ProjectCard({ title, description, meta = [], imageUrl }) {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} loading="lazy" />
        </div>
      )}
      <h3>{title}</h3>
      {Array.isArray(meta) && meta.length > 0 && (
        <div className="meta">
          {meta.map((m, i) => (
            <span key={i} className="chip">{m}</span>
          ))}
        </div>
      )}
      <p>{description}</p>
    </div>
  );
}