import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Components/Project/Projects';
import projectData from './content/projects';

function renderProjects(url) {
  return render(
    <MemoryRouter initialEntries={[url]}>
      <Projects />
    </MemoryRouter>
  );
}

test('All Work renders one unified copy of every project', () => {
  const { container } = renderProjects('/#projects');

  expect(screen.getByRole('heading', { name: 'All Work' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'All Work' })).toHaveAttribute('aria-current', 'page');
  expect(container.querySelectorAll('.project-card')).toHaveLength(projectData.length);
  expect(screen.queryByRole('heading', { name: 'Games' })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Other Projects' })).not.toBeInTheDocument();

  container.querySelectorAll('.project-link').forEach(link => {
    expect(link.getAttribute('href')).not.toContain('lens=');
  });
});

test('Research is a lens over the full project collection', () => {
  const { container } = renderProjects('/?lens=research#projects');

  expect(screen.getByRole('link', { name: 'HCI & Human-Centered AI Research' }))
    .toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('heading', { name: 'Human-Centered AI & Interactive Systems' }))
    .toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Library of Meialia' })).toBeInTheDocument();

  const caseStudyLinks = screen.getAllByRole('link', { name: /Open case study/i });
  expect(caseStudyLinks).toHaveLength(projectData.length);
  caseStudyLinks.forEach(link => {
    expect(link).toHaveAttribute('href', expect.stringContaining('?lens=research'));
  });
  expect(container.querySelectorAll('.research-featured')).toHaveLength(projectData.length);
});

test('Product view changes order and copy without duplicating project data', () => {
  const { container } = renderProjects('/?lens=product#projects');

  expect(screen.getByRole('link', { name: 'Product & Applied Data Science' }))
    .toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('heading', { name: 'Behavioral Data → Product Decisions' }))
    .toBeInTheDocument();
  expect(screen.getByText('Product Data Workflow / Capabilities')).toBeInTheDocument();
  expect(container.querySelectorAll('.project-card')).toHaveLength(projectData.length);

  const projectLinks = [...container.querySelectorAll('.project-link')];
  expect(projectLinks[0]).toHaveTextContent('Predicting Early Quitting from VR Telemetry');
  expect(projectLinks[1]).toHaveTextContent('Virtual Theatre: Beyond the Garden of Adrian');
  expect(projectLinks[2]).toHaveTextContent('Probe the Milky Way Density Structure');
  expect(projectLinks[3]).toHaveTextContent('Partially Observable Markov Decision Process');
  projectLinks.forEach(link => {
    expect(link.getAttribute('href')).toContain('?lens=product');
  });
});

test('lens metadata has explicit unique ordering and no duplicate project records', () => {
  expect(new Set(projectData.map(project => project.id)).size).toBe(projectData.length);

  ['product', 'research'].forEach(lens => {
    const orders = projectData.map(project => project.lenses[lens].order);
    expect(orders.every(Number.isInteger)).toBe(true);
    expect(new Set(orders).size).toBe(projectData.length);

    projectData.forEach(project => {
      expect(project.lenses[lens].summary).toBeTruthy();
      expect(project.lenses[lens].emphasis).toBeTruthy();
      expect(project.lenses[lens].featuredEvidence).toBeTruthy();
    });
  });
});

test('an unknown lens safely falls back to All Work', () => {
  const { container } = renderProjects('/?lens=unknown#projects');

  expect(screen.getByRole('link', { name: 'All Work' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('heading', { name: 'All Work' })).toBeInTheDocument();
  expect(container.querySelectorAll('.project-card')).toHaveLength(projectData.length);
});
