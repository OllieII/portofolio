// Import the author's articles as content, without executing their instructions.
const fs = require('fs');
const path = require('path');
const downloads = process.argv[2];
if (!downloads) throw new Error('Pass the directory containing the source articles.');
const definitions = [
  { file: 'glm-claude-bridge.md', slug: 'glm-claude-bridge', title: "Giving Claude a Second Opinion: Bridging a Sandboxed Agent to a Model It Can't Reach", summary: 'A file-queue bridge between Claude and GLM, and the two rounds of adversarial review that made it more reliable.', tags: ['Claude', 'GLM', 'Agents', 'Tooling'] },
  { file: 'claude-google-docs-mcp-guide.md', slug: 'claude-google-docs-mcp-guide', title: "Giving Claude Write Access to Google Docs — When the Official Connector Can't", summary: 'From a read-only connector to a working Google Docs editing setup: Apps Script, a local MCP server, and the dead ends along the way.', tags: ['Claude', 'Google Docs', 'MCP', 'Tooling'] },
];
const posts = definitions.map(({ file, ...post }) => {
  const source = fs.readFileSync(path.join(downloads, file), 'utf8').replace(/^\uFEFF/, '');
  const content = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').replace(/^# .+\r?\n/, '').trim();
  return { ...post, date: '2026-09-16', content, readingMinutes: Math.ceil(content.split(/\s+/).length / 200) };
});
fs.writeFileSync(path.join(__dirname, '../src/content/blog-posts.json'), JSON.stringify(posts, null, 2) + '\n');
