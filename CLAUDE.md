# Social Trends Report — Project Conventions

## About This Project
Social Trends Report is a marketing publication built on Next.js + Tailwind + Contentlayer. It's owned by Henry and acts as a content marketing property for Smarcomms (his product). The design should feel like a professional marketing publication (Social Media Today is the reference), not a personal blog.

## Routing
- Topics (tags) live at `/topics/`, NOT `/tags/` — all tag references must use `/topics/`
- Blog posts live at `/blog/{slug}`

## Design Conventions
- Keep typography compact and publication-style — avoid oversized headings and excessive spacing
- Border radius: use `rounded-full` for buttons/CTAs, `rounded-2xl` for cards
- CTAs must be consistent: `rounded-full px-4 py-2 text-sm font-semibold` (see "Read the full story" button as reference)
- No email links or mailto icons anywhere on the site
- Author names and Twitter handles on articles are displayed as plain text (not clickable links)
- Tags use `text-xs font-medium uppercase` styling

## Comments
Comments are static (manually managed in `components/StaticComments.tsx`). There is no dynamic comment system. When new articles need comments, add them directly to the COMMENTS array in that file.

## Share Buttons
Every blog post includes a "Share this article" bar (X, Facebook, LinkedIn, copy link) via `components/ShareArticle.tsx`. This is built into both `PostLayout` and `PostSimple` layouts.

## External Links — UTM Parameters Required

Every external link in blog content, components, and templates MUST include UTM parameters. No exceptions.

### Smarcomms links
All links to Smarcomms properties must use:
- `utm_source=social-trends-report`
- `utm_medium=blog`
- `utm_campaign={slug}` (the blog post slug, or `site` for site-wide links like nav/footer)
- `utm_content={descriptive-label}` (e.g. `cta-button`, `in-article-mention`, `sidebar`)

Example: `https://smarcomms.com?utm_source=social-trends-report&utm_medium=blog&utm_campaign=7-signs-your-smm-is-wasting-budget&utm_content=cta-button`

### Other external tool/site links
All outbound links to third-party tools, platforms, and resources must use:
- `utm_source=social-trends-report`
- `utm_medium=blog`
- `utm_campaign={slug}`

This applies to links in blog post content (MDX), component templates, and any hardcoded external URLs.

### When writing new content
- Always add UTM params to external links in MDX blog posts
- Always add UTM params when referencing external tools in templates/components
- When reviewing or editing existing content, add UTMs to any external links that are missing them

## Images
- All images live in `public/static/images/` — no external image hosting for now
- **Commenter avatars**: `public/static/images/commenters/` — named by commenter (e.g. `jessica-m.jpg`). Must match the gender of the commenter name. Currently stock placeholders — replace with AI-generated faces (e.g. via generated.photos or thispersondoesnotexist.com) when available
- **Trust bar founder avatars**: `public/static/images/founders/founder-{1-6}.jpg` — generic headshots for social proof
- **Blog post images**: `public/static/images/` — referenced in MDX frontmatter `images` field
- When adding new commenters to `StaticComments.tsx`, always add a matching avatar image to `/commenters/` with a gender-appropriate face
- When adding new content with people images, use AI-generated faces (not real people) unless you have explicit permission

## Content Publishing
- Blog posts are MDX files in `data/blog/`
- Featured post = first post (index 0), Popular = posts 1-5, Latest = posts 6+
- The top banner CTA ("Get the Free Newsletter") scrolls to `#newsletter` in the sidebar
