import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projectData from '../../content/projects';
import { lensConfig, siteText } from '../../content/site';
import './css/Projects.css';

function Projects() {
  const [searchParams] = useSearchParams();
  const requestedLens = searchParams.get('lens') || 'all';
  const activeLens = lensConfig[requestedLens] ? requestedLens : 'all';
  const isLensView = activeLens !== 'all';

  const projectLink = project => (
    activeLens === 'all'
      ? `/projects/${project.id}`
      : `/projects/${project.id}?lens=${activeLens}`
  );

  const renderCard = (project, index, category = project.category) => {
    const lensCopy = project.lenses?.[activeLens];

    return (
      <ProjectCard
        key={project.id}
        index={index + 1}
        media={project.media}
        link={projectLink(project)}
        title={project.title}
        brief={lensCopy?.summary || project.brief}
        category={category}
        meta={project.meta}
        signal={lensCopy?.emphasis || project.signal}
        evidence={lensCopy?.featuredEvidence}
        tags={project.tags}
      />
    );
  };

  const lensProjects = [...projectData].sort((a, b) => {
    const aOrder = a.lenses?.[activeLens]?.order ?? 99;
    const bOrder = b.lenses?.[activeLens]?.order ?? 99;
    return aOrder - bOrder;
  });

  return (
    <div className="projects-container">
      <div className="lens-switcher-group">
        <p className="lens-switcher-label">{siteText.work.viewAsLabel}</p>
        <div className="lens-switcher" aria-label={siteText.work.viewAsLabel}>
          {Object.entries(lensConfig).map(([key, lens]) => (
            <Link
              key={key}
              to={key === 'all' ? '/#projects' : `/?lens=${key}#projects`}
              className={`lens-switcher-link ${activeLens === key ? 'active' : ''}`}
              aria-current={activeLens === key ? 'page' : undefined}
            >
              {lens.label}
            </Link>
          ))}
        </div>
      </div>

      {activeLens === 'product' ? (
        <div className="section product product-lens-board">
          <div className="lens-view-header">
            <h2 className="section-title product">{siteText.productView.title}</h2>
            <div className="lens-view-copy">
              {siteText.productView.introduction.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <section className="product-workflow" aria-labelledby="product-capabilities-title">
            <p className="research-section-label" id="product-capabilities-title">
              {siteText.productView.capabilitiesLabel}
            </p>
            <div className="product-workflow-grid">
              {siteText.productView.capabilities.map((capability, index) => (
                <article className="product-capability" key={capability.stage}>
                  <p className="product-capability-number">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3>{capability.stage}</h3>
                  <ul>
                    {capability.evidence.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="lens-project-heading">
            <p className="research-section-label">{siteText.productView.projectsLabel}</p>
          </div>
          <div className="projects-grid lens-grid">
            {lensProjects.map((project, index) => renderCard(project, index, activeLens))}
          </div>
        </div>
      ) : activeLens === 'research' ? (
        <div className="section research research-lens-board">
          <div className="lens-view-header">
            <h2 className="section-title research">{siteText.researchView.title}</h2>
            <div className="lens-view-copy">
              {siteText.researchView.introduction.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="research-thread" aria-label="Current research thread">
            <span>{siteText.researchView.threadLabel}</span>
            <p>{siteText.researchView.thread}</p>
          </div>

          <div className="research-thread research-approach" aria-label="Research approach">
            <span>{siteText.researchView.approachLabel}</span>
            <p>{siteText.researchView.approach}</p>
          </div>

          <div className="research-project-list">
            {lensProjects.map((project, index) => {
              const isFeatured = index === 0;
              const researchFocus = isFeatured
                ? siteText.researchView.coreQuestion
                : project.lenses.research.emphasis;
              const methods = isFeatured
                ? siteText.researchView.methods
                : project.tags.join(' / ');
              const evidence = project.lenses.research.featuredEvidence;
              const relevance = project.lenses.research.summary;

              return (
                <article className="research-featured" key={project.id}>
                  <div
                    className="research-featured-media"
                    style={{ backgroundImage: `url(${project.media})` }}
                    aria-hidden="true"
                  />
                  <div className="research-featured-copy">
                    <p className="research-section-label">
                      {isFeatured
                        ? siteText.researchView.featuredLabel
                        : siteText.researchView.projectLabel}
                    </p>
                    <p className="research-card-number">{String(index + 1).padStart(2, '0')}</p>
                    <h3>{project.title}</h3>
                    <div className="research-evidence-block">
                      <span>
                        {isFeatured
                          ? siteText.researchView.coreQuestionLabel
                          : siteText.researchView.focusLabel}
                      </span>
                      <p>{researchFocus}</p>
                    </div>
                    <div className="research-evidence-block">
                      <span>{siteText.researchView.methodsLabel}</span>
                      <p>{methods}</p>
                    </div>
                    <div className="research-evidence-block">
                      <span>{siteText.researchView.evidenceLabel}</span>
                      <p>{evidence}</p>
                    </div>
                    <div className="research-evidence-block">
                      <span>{siteText.researchView.relevanceLabel}</span>
                      <p>{relevance}</p>
                    </div>
                    <Link to={projectLink(project)} className="research-case-link">
                      {siteText.buttons.openCaseStudy} <span>&rarr;</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="research-methods">
            <p className="research-section-label">{siteText.researchView.methodsListLabel}</p>
            <div className="research-method-list">
              {siteText.researchView.methodsList.map(method => (
                <span key={method}>{method}</span>
              ))}
            </div>
          </div>

          <div className="research-archive-link">
            <span>{siteText.researchView.archiveLabel}</span>
            <Link to="/#projects">{siteText.buttons.viewAllProjects} <span>&rarr;</span></Link>
          </div>
        </div>
      ) : isLensView ? (
        <div className={`section ${activeLens}`}>
          <h2 className={`section-title ${activeLens}`}>{lensConfig[activeLens].title}</h2>
          <p className="section-description">
            {lensConfig[activeLens].description}
          </p>
          <div className="projects-grid lens-grid">
            {lensProjects.map((project, index) => renderCard(project, index, activeLens))}
          </div>
        </div>
      ) : (
        <div className="section all-work">
          <h2 className="section-title">{lensConfig.all.title}</h2>
          <p className="section-description">
            {lensConfig.all.description}
          </p>
          <div className="projects-grid">
            {projectData.map((project, index) => renderCard(project, index))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
