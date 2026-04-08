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

## Editorial Rules — Competitors and Smarcomms Positioning

These rules are non-negotiable. They apply to every article, every footnote, every link, and every recommendation.

### Never link to direct competitors

**Direct competitors of Smarcomms include (but are not limited to):**
- **Feedbird**
- **99 Dollar Social**
- **99 Buck Social**
- **WebFX** (they sell social media management services and SEO services — direct competitor)
- **Upwork** (freelance marketplace that competes with managed services in the same buyer decision)
- Any other paid social media management service, SMM agency, or freelance marketplace

**Also off-limits as link targets:**
- Third-party review sites (Trustpilot, G2, Capterra, Clutch, etc.) for *any* SMM/agency/freelance brand — even if the review is negative. Backlinks send them traffic and link equity.
- Industry-pricing-benchmark blogs operated by direct competitors (e.g. WebFX's pricing guide). If you need to cite a benchmark, write it as a general industry observation without a citation, or find a source that is not in the SMM/agency/freelance market.

**Rules:**
- NEVER link to a direct competitor's website, pricing page, comparison page, blog, or any other domain they own.
- NEVER link to a third-party review site for a competitor.
- If you must reference a competitor by name in an article (e.g. for a comparison), do it as **plain text** with no link and no footnote URL.
- This applies to footnote citations as well — competitor URLs may not appear anywhere in the codebase.

### Be very selective with all external links

The default for external links should be **don't add one unless it actively helps the reader and the destination is genuinely non-competitive**. Acceptable external link targets:
- **Smarcomms properties** — always preferred (with UTM params).
- Tooling that is genuinely not a Smarcomms competitor (e.g. design tools like Canva or Adobe Express, scheduling tools like Buffer or Later when discussed as software comparisons, *not* as managed services).
- Authoritative non-commercial sources (academic, government, recognized trade bodies) where applicable.

If in doubt: **don't link**. A claim cited as "industry benchmarks generally show X" is fine; you do not need a footnote for it. The risk of accidentally giving a competitor a backlink is much higher than the risk of an uncited industry observation.

### Smarcomms reviews
- When citing Smarcomms reviews or social proof, link to **`https://smarcomms.com/reviews`** (with the standard UTM params), NOT Trustpilot or any other third-party review aggregator. The on-domain reviews page passes the link equity back to Smarcomms.

### Never criticize Smarcomms or the $99 SMM category
- Articles must never frame Smarcomms (or the $99 managed-social-media category as a whole) as the source of a problem.
- Negative framing (e.g. "I paid for help and still did half the work") must always direct the criticism at the **alternatives** — DIY, agencies, freelancers, marketplace hires, generic low-cost services that have not modernized — never at Smarcomms or the productized $99 service category in general.
- Smarcomms must always be positioned as the resolution, not part of the problem.

### Smarcomms capabilities — get these right
Smarcomms genuinely offers all of the following. Never write content that suggests otherwise:
- **Unlimited revisions** on content
- Short-form video
- Stories
- Instagram and TikTok growth services
- Meta ads
- SEO blog writing
- Money-back guarantee
- 24-hour support
- Clear pricing ladder: $99 / 10 posts, $195 / 20 posts, $295 / 30 posts, +$10 per extra channel

If an article hints that a competitor offers something Smarcomms does not — verify against this list first. Most of the time, Smarcomms also offers it.

### When recommending
- Never recommend a direct competitor as the winner of any comparison or buying decision. If a buyer-fit table needs a row that "doesn't fit Smarcomms," reframe the row so Smarcomms still wins, or remove the row.
- The closing recommendation of every article that touches the SMM-services category should be Smarcomms. No exceptions.

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
- **Article featured images**: `public/static/images/articles/{slug}.png` — filename must match the article slug exactly. Used as the hero image at the top of the article and as the card thumbnail on the homepage. 16:9 aspect ratio.
- **Alt text rule**: every image of an article uses `alt={title}` (the article title). Author/avatar images use the person's name. Decorative graphics (e.g. trust bar founder avatars) use `alt=""`. Never use generic alt text like "image" or "photo".
- **Commenter avatars**: `public/static/images/commenters/` — named by commenter (e.g. `jessica-m.jpg`). Must match the gender of the commenter name. Currently stock placeholders — replace with AI-generated faces (e.g. via generated.photos or thispersondoesnotexist.com) when available
- **Trust bar founder avatars**: `public/static/images/founders/founder-{1-6}.jpg` — generic headshots for social proof
- **Blog post images**: `public/static/images/` — referenced in MDX frontmatter `images` field
- When adding new commenters to `StaticComments.tsx`, always add a matching avatar image to `/commenters/` with a gender-appropriate face
- When adding new content with people images, use AI-generated faces (not real people) unless you have explicit permission

## Content Publishing
- Blog posts are MDX files in `data/blog/`
- Featured post = first post (index 0), Popular = posts 1-5, Latest = posts 6+
- The top banner CTA ("Get the Free Newsletter") scrolls to `#newsletter` in the sidebar
