import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';
import projectData from '../../content/projects';

test('renders the full Work collection through the Research lens', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/?lens=research']}>
      <Projects />
    </MemoryRouter>
  );

  expect(container.querySelectorAll('article.research-featured')).toHaveLength(projectData.length);
  expect(container.querySelectorAll('.research-support-card')).toHaveLength(0);

  [
    'Predicting Early Quitting from VR Telemetry',
    'Virtual Theatre: Beyond the Garden of Adrian',
    'Partially Observable Markov Decision Process',
    'Probe the Milky Way Density Structure',
    'Library of Meialia',
    'The Otherside',
    'CS639 Deep Learning for Computer Vision',
  ].forEach(title => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });
});
