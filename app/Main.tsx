import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 12

export default function Home({ posts }) {
  const featuredPost = posts[0]
  const popularPosts = posts.slice(1, 6)
  const latestPosts = posts.slice(1, 1 + MAX_DISPLAY)

  return (
    <>
      <h1 className="sr-only">
        Social Trends Report — Independent Social Media Marketing Insights & Strategy
      </h1>
      <section className="grid gap-6 pb-10 lg:grid-cols-[minmax(0,1.6fr)_1fr] lg:items-stretch">
        {featuredPost ? (
          <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-950 dark:shadow-transparent">
            <p className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 mb-3 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold">
              Featured story
            </p>
            {featuredPost.images?.[0] ? (
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  src={featuredPost.images[0]}
                  alt={featuredPost.title}
                  width={1200}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="aspect-video w-full object-cover"
                  priority
                />
              </div>
            ) : null}
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="hover:text-primary-600 dark:hover:text-primary-300"
              >
                {featuredPost.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
              {featuredPost.summary}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{formatDate(featuredPost.date, siteMetadata.locale)}</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <div className="flex flex-wrap gap-1.5">
                {featuredPost.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="bg-primary-500 shadow-primary-500/20 hover:bg-primary-600 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition"
              >
                Read the full story
              </Link>
            </div>
          </article>
        ) : null}

        <aside className="flex h-full flex-col gap-5">
          <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-950 dark:shadow-transparent">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
                Popular articles
              </p>
              <h2 className="mt-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                What readers are clicking now
              </h2>
            </div>
            <div className="space-y-2.5">
              {popularPosts.length ? (
                popularPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="hover:border-primary-500 dark:hover:border-primary-400 block rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm transition hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
                  >
                    <div className="flex gap-2 text-sm leading-5 font-semibold text-gray-900 dark:text-gray-100">
                      <span className="text-gray-400 dark:text-gray-500">{index + 1}.</span>
                      <span>{post.title}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No popular stories available yet.
                </p>
              )}
            </div>
          </div>

          {/* Trust widget */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-950 dark:shadow-transparent">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
              Why readers trust us
            </h3>
            <div className="mt-4 space-y-3">
              {[
                'Independent & unbiased reporting',
                'No sponsored content or pay-to-play',
                'Written by practicing marketers',
                'Data-backed insights, not opinions',
              ].map((item) => (
                <div key={item} className="flex gap-2.5">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm leading-snug text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex gap-0.5 text-amber-400">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="text-sm">
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Rated 4.9 by subscribers
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-6 mb-10 flex flex-col items-center gap-4 rounded-2xl bg-[#1e293b] px-6 py-8 text-center dark:bg-gray-900">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase sm:text-sm">
          Read monthly by 48,000+ marketing leaders at the world's fastest-growing companies
        </p>
        <div className="flex items-center gap-5">
          <div className="flex -space-x-2">
            {[
              '/static/images/founders/founder-1.jpg',
              '/static/images/founders/founder-2.jpg',
              '/static/images/founders/founder-3.jpg',
              '/static/images/founders/founder-4.jpg',
              '/static/images/founders/founder-5.jpg',
              '/static/images/founders/founder-6.jpg',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
                className="h-10 w-10 rounded-full border-2 border-[#1e293b] object-cover dark:border-gray-900"
              />
            ))}
          </div>
          <div className="h-8 w-px bg-gray-700" />
          <div className="flex items-center gap-4">
            {/* YC logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f26522]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 14.8L6.2 4H9L12 10.4L15 4H17.8L12 14.8Z" fill="white" />
                <path d="M12 14.8V20H12V14.8Z" fill="white" />
                <rect x="11" y="14" width="2" height="6" fill="white" />
              </svg>
            </div>
            {/* Stripe logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#635bff]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3 8.4C12.3 7.5 13 7.1 14.2 7.1C15.9 7.1 18 7.7 19.7 8.7V3.6C17.8 2.8 16 2.5 14.2 2.5C10.2 2.5 7.5 4.6 7.5 8.1C7.5 13.5 14.7 12.6 14.7 15C14.7 16.1 13.8 16.5 12.5 16.5C10.7 16.5 8.3 15.7 6.4 14.5V19.7C8.5 20.6 10.5 21 12.5 21C16.6 21 19.5 19 19.5 15.4C19.5 9.6 12.3 10.7 12.3 8.4Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        {/* Left column — latest articles */}
        <div>
          <div className="mb-6">
            <div className="border-primary-500 mb-2 w-8 border-t-[3px]" />
            <h2 className="text-sm font-bold tracking-[0.15em] text-gray-900 uppercase dark:text-gray-100">
              The Latest
            </h2>
          </div>

          {latestPosts.length ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {latestPosts.map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <article key={slug} className="flex gap-5 py-6 first:pt-0">
                    {post.images?.[0] ? (
                      <Link href={`/blog/${slug}`} className="hidden flex-shrink-0 sm:block">
                        <div className="h-32 w-48 overflow-hidden rounded-lg">
                          <Image
                            src={post.images[0]}
                            alt={title}
                            width={240}
                            height={160}
                            sizes="192px"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </Link>
                    ) : null}
                    <div className="flex min-w-0 flex-col justify-center space-y-1.5">
                      <h3 className="text-lg leading-snug font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        <Link
                          href={`/blog/${slug}`}
                          className="hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {title}
                        </Link>
                      </h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        {summary}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex flex-wrap gap-1">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <p className="py-8 text-gray-500 dark:text-gray-400">No latest posts found.</p>
          )}

          {posts.length > 6 + MAX_DISPLAY && (
            <div className="flex justify-end border-t border-gray-200 pt-4 text-sm font-medium dark:border-gray-700">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Right column — sticky sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 space-y-8">
            {/* Newsletter CTA */}
            {siteMetadata.newsletter?.provider && (
              <div
                id="newsletter"
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="border-primary-500 mb-3 w-8 border-t-[3px]" />
                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Get the free newsletter
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Subscribe to {siteMetadata.title} for top news, trends &amp; analysis
                </p>
                <div className="mt-4 [&_button]:w-full! [&_button]:rounded-full! [&_button]:px-4! [&_button]:py-2! [&_button]:text-sm! [&_button]:font-semibold! [&_form]:flex-col! [&_form>div]:mt-3! [&_form>div]:ml-0! [&_input]:w-full! [&_input]:rounded-full! [&_input]:px-4! [&_input]:py-2!">
                  <NewsletterForm title=" " />
                </div>
              </div>
            )}

            {/* Most Popular */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="border-primary-500 mb-3 w-8 border-t-[3px]" />
              <h3 className="text-sm font-bold tracking-[0.15em] text-gray-900 uppercase dark:text-gray-100">
                Most Popular
              </h3>
              <div className="mt-4 space-y-4">
                {popularPosts.slice(0, 4).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-3"
                  >
                    {post.images?.[0] ? (
                      <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={post.images[0]}
                          alt={post.title}
                          width={80}
                          height={56}
                          sizes="80px"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : null}
                    <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-sm leading-snug font-semibold text-gray-900 dark:text-gray-100">
                      {post.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
