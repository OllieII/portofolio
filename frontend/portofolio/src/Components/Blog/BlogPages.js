import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import posts from '../../content/blog-posts.json';
import './Blog.css';

const PostMeta = ({ post }) => <p className="blog-meta"><time dateTime={post.date}>{new Date(`${post.date}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time><span aria-hidden="true"> / </span>{post.readingMinutes} min read</p>;
const Tags = ({ post }) => <div className="blog-tags">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div>;

export function BlogIndex() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <section className="blog-index">
    <Helmet><title>Blog — Olly Guo</title><meta name="description" content="Field notes on AI tools, agents, and building useful systems." /></Helmet>
    <header className="blog-index-intro"><p className="blog-eyebrow">Notes from practice</p><h1>Blog</h1><p>Experiments, working systems, and what I learned along the way.</p></header>
    <div>{posts.map((post, index) => <article className="blog-card" key={post.slug}>
      <span className="blog-number" aria-hidden="true">{String(posts.length - index).padStart(2, '0')}</span>
      <div><PostMeta post={post} /><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p className="blog-summary">{post.summary}</p><Tags post={post} /><Link className="blog-read" to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read article <span aria-hidden="true">↗</span></Link></div>
    </article>)}</div>
  </section>;
}

// Assign heading IDs from the parsed tree; code examples cannot create TOC entries.
function headingIds() {
  return tree => {
    const seen = {};
    const plainText = node => node.value || (node.children || []).map(plainText).join('');
    for (const node of tree.children) {
      if (node.type !== 'heading') continue;
      const base = plainText(node).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const count = seen[base] || 0;
      seen[base] = count + 1;
      node.data = { hProperties: { id: `${base}${count ? `-${count}` : ''}` } };
    }
  };
}

export function BlogArticle() {
  const { slug } = useParams();
  const { hash } = useLocation();
  const post = posts.find(item => item.slug === slug);
  useEffect(() => {
    if (hash) {
      try { document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView(); } catch { /* Malformed fragment. */ }
    } else window.scrollTo(0, 0);
  }, [slug, hash]);
  if (!post) return <section className="blog-article"><h1>Article not found</h1><Link to="/blog">Back to blog</Link></section>;
  return <article className="blog-article">
    <Helmet><title>{post.title} — Olly Guo</title><meta name="description" content={post.summary} /></Helmet>
    <Link className="blog-back" to="/blog">← All articles</Link>
    <header className="blog-article-header"><p className="blog-eyebrow">Field notes / {post.tags.slice(0, 2).join(' + ')}</p><h1>{post.title}</h1><PostMeta post={post} /><p className="blog-deck">{post.summary}</p><Tags post={post} /></header>
    <nav className="blog-toc" aria-label="Article contents"><p className="blog-eyebrow">In this article</p><ul><ReactMarkdown remarkPlugins={[remarkGfm, headingIds]} allowedElements={['h2']} components={{ h2: ({ node, children, id }) => <li><a href={`#${id}`}>{children}</a></li> }}>{post.content}</ReactMarkdown></ul></nav>
    <div className="blog-prose"><ReactMarkdown remarkPlugins={[remarkGfm, headingIds]} components={{ table: ({ node, ...props }) => <div className="blog-table-scroll" tabIndex={0} role="region" aria-label="Article table"><table {...props} /></div>, pre: ({ node, ...props }) => <pre tabIndex={0} {...props} /> }}>{post.content}</ReactMarkdown></div>
    <footer className="blog-footer"><p className="blog-eyebrow">Keep reading</p>{posts.filter(item => item.slug !== slug).map(item => <Link key={item.slug} to={`/blog/${item.slug}`}>{item.title} ↗</Link>)}<Link className="blog-back" to="/blog">← All articles</Link></footer>
  </article>;
}
