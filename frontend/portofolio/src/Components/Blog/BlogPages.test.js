import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { BlogArticle, BlogIndex } from './BlogPages';
import posts from '../../content/blog-posts.json';

beforeEach(() => { window.scrollTo = jest.fn(); });

test('blog lists both articles with their permanent links', () => {
  render(<MemoryRouter><BlogIndex /></MemoryRouter>);
  posts.forEach(post => expect(screen.getByRole('link', { name: post.title })).toHaveAttribute('href', `/blog/${post.slug}`));
});

test.each(posts)('$slug renders code intact and every contents link targets a heading', post => {
  const { container } = render(<MemoryRouter initialEntries={[`/blog/${post.slug}`]}><Routes><Route path="/blog/:slug" element={<BlogArticle />} /></Routes></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1, name: post.title })).toBeInTheDocument();
  const links = within(screen.getByRole('navigation', { name: 'Article contents' })).getAllByRole('link');
  expect(links.length).toBeGreaterThan(5);
  links.forEach(link => expect(document.getElementById(link.hash.slice(1))).toHaveTextContent(link.textContent));
  const sourceCode = [...post.content.replace(/^> ?/gm, '').matchAll(/^```[^\r\n]*\r?\n([\s\S]*?)^```/gm)].map(match => match[1].replace(/\r\n/g, '\n'));
  expect([...container.querySelectorAll('pre code')].map(node => node.textContent)).toEqual(sourceCode);
  expect(container.querySelectorAll('table').length).toBeGreaterThan(0);
});

test('unknown articles offer a way back', () => {
  render(<MemoryRouter initialEntries={['/blog/missing']}><Routes><Route path="/blog/:slug" element={<BlogArticle />} /></Routes></MemoryRouter>);
  expect(screen.getByRole('link', { name: 'Back to blog' })).toHaveAttribute('href', '/blog');
});
