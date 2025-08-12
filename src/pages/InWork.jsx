import React from 'react';
import { useTranslation } from '../i18nContext';
import ProjectCard from '../components/ProjectCard';

/**
 * InWork page lists active projects. If there are no projects defined in
 * translations, a placeholder message is displayed instead. This page is
 * only linked in the Finnish navigation; the Estonian site does not
 * currently use it.
 */
export default function InWork() {
  const t = useTranslation('inWork');
  const projects = t('projects');
  const hasProjects = Array.isArray(projects) && projects.length > 0;
  return (
    <section>
      <div className="container">
        <h2 className="section-title">{t('pageTitle')}</h2>
        {hasProjects ? (
          <div className="cards-grid">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} title={proj.title} description={proj.description} />
            ))}
          </div>
        ) : (
          <p>{t('empty')}</p>
        )}
      </div>
    </section>
  );
}