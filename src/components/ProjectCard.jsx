import React from 'react';

/**
 * ProjectCard shows a project's title and description in a glassmorphic card.
 * If an image is provided (future enhancement), it can be rendered above the
 * title. The card scales up slightly on hover for interactivity.
 */
export default function ProjectCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}