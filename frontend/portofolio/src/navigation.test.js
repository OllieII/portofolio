import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { SinglePage } from './Components/Home/SinglePage';
import { ProjectDetail } from './Components/Project/ProjectDetail';
import CV from './Components/CV/CV';

jest.mock('./Components/Home/Home', () => ({
  Home: () => <div>Home content</div>,
}));

jest.mock('./Components/Project/Projects', () => () => (
  <div id="projects">Work projects</div>
));

jest.mock('./Components/Project/NavBar', () => () => null);
jest.mock('./Components/Project/MediaSection', () => () => null);
jest.mock('./Components/Project/SubTitleSection', () => ({ sections }) => (
  <div data-testid="detail-section-order">
    {sections.map(section => section.heading).join(' | ')}
  </div>
));

function CurrentLocation() {
  const location = useLocation();
  return (
    <div data-testid="current-location">
      {location.pathname}{location.search}{location.hash}
    </div>
  );
}

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
  window.scrollTo = jest.fn();
});

test('the global navigation exposes destinations rather than legacy categories', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'CV' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Research' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Games' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Other Projects' })).not.toBeInTheDocument();
});

test('a repeated same-page Work click performs one smooth scroll', () => {
  render(
    <MemoryRouter initialEntries={['/#projects']}>
      <Header />
      <div id="projects">Work target</div>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('link', { name: 'Work' }));

  expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
    behavior: 'smooth',
    block: 'start',
  });
});

test('a Work click from another route opens the unified collection', () => {
  render(
    <MemoryRouter initialEntries={['/cv']}>
      <Header />
      <CurrentLocation />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('link', { name: 'Work' }));

  expect(screen.getByTestId('current-location')).toHaveTextContent('/#projects');
  expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
});

test('a Work click clears a selected lens', () => {
  render(
    <MemoryRouter initialEntries={['/?lens=research#projects']}>
      <Header />
      <CurrentLocation />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('link', { name: 'Work' }));

  expect(screen.getByTestId('current-location')).toHaveTextContent('/#projects');
});

test.each([
  '/#projects',
  '/?lens=research#projects',
])('a direct projects URL scrolls once: %s', (url) => {
  render(
    <MemoryRouter initialEntries={[url]}>
      <SinglePage />
    </MemoryRouter>
  );

  expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
    behavior: 'smooth',
    block: 'start',
  });
});

test('the CV resets the viewport before displaying', () => {
  render(<CV />);

  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    left: 0,
    behavior: 'auto',
  });
});

test('a project opened through a lens returns to the same Work view', () => {
  render(
    <MemoryRouter initialEntries={['/projects/2?lens=research']}>
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/" element={<CurrentLocation />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Viewing as: HCI & Human-Centered AI Research')).toBeInTheDocument();
  expect(screen.getByText('Validating interpretable behavioral signals across VR contexts'))
    .toBeInTheDocument();
  expect(screen.getByText(/7,000\+ sessions; ~0.80 within-game ROC-AUC/))
    .toBeInTheDocument();
  expect(screen.getByTestId('detail-section-order')).toHaveTextContent(
    'Project Description | My Responsibility | Tech Stack | Product Translation (Proposed)'
  );
  fireEvent.click(screen.getByRole('button', { name: 'Back to projects' }));

  expect(screen.getByTestId('current-location')).toHaveTextContent('/?lens=research#projects');
});

test('a direct project returns to All Work', () => {
  render(
    <MemoryRouter initialEntries={['/projects/2']}>
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/" element={<CurrentLocation />} />
      </Routes>
    </MemoryRouter>
  );

  fireEvent.click(screen.getByRole('button', { name: 'Back to projects' }));

  expect(screen.getByTestId('current-location')).toHaveTextContent('/#projects');
});

test('Product lens changes detail emphasis without duplicating project content', () => {
  render(
    <MemoryRouter initialEntries={['/projects/2?lens=product']}>
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Viewing as: Product & Applied Data Science')).toBeInTheDocument();
  expect(screen.getByText('Turning early-quit signals into a measurable intervention hypothesis'))
    .toBeInTheDocument();
  expect(screen.getByText(/Cross-context model performance and SHAP evidence/))
    .toBeInTheDocument();
  expect(screen.getByTestId('detail-section-order')).toHaveTextContent(
    'Product Translation (Proposed) | Project Description | My Responsibility | Tech Stack'
  );
});
