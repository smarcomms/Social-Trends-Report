import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 9

export default function Home({ posts }) {
  const featuredPost = posts[0]
  const popularPosts = posts.slice(1, 6)
  const latestPosts = posts.slice(6, 6 + MAX_DISPLAY)

  return (
    <>
      <section className="grid gap-10 pb-16 lg:grid-cols-[minmax(0,1.6fr)_1fr] lg:items-stretch">
        {featuredPost ? (
          <article className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-950 dark:shadow-transparent">
            <p className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 mb-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold">
              Featured story
            </p>
            {featuredPost.images?.[0] ? (
              <div className="mb-6 overflow-hidden rounded-3xl">
                <Image
                  src={featuredPost.images[0]}
                  alt={featuredPost.title}
                  width={1200}
                  height={600}
                  className="h-72 w-full object-cover"
                />
              </div>
            ) : null}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="hover:text-primary-600 dark:hover:text-primary-300"
              >
                {featuredPost.title}
              </Link>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {featuredPost.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span>{formatDate(featuredPost.date, siteMetadata.locale)}</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="bg-primary-500 shadow-primary-500/20 hover:bg-primary-600 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm transition"
              >
                Read the full story
              </Link>
            </div>
          </article>
        ) : null}

        <aside className="h-full space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-950 dark:shadow-transparent">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-gray-500 uppercase dark:text-gray-400">
                Popular articles
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                What readers are clicking now
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {popularPosts.length ? (
              popularPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="hover:border-primary-500 dark:hover:border-primary-400 block rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
                >
                  <div className="text-base leading-6 font-semibold text-gray-900 dark:text-gray-100">
                    {index + 1}. {post.title}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No popular stories available yet.
              </p>
            )}
          </div>
        </aside>
      </section>

      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-[0.24em] uppercase">
            Latest
          </p>
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl dark:text-gray-100">
            Fresh social media reporting
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        {latestPosts.length ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article
                  key={slug}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm shadow-gray-200/50 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:shadow-none dark:hover:shadow-gray-800/40"
                >
                  {post.images?.[0] ? (
                    <Link href={`/blog/${slug}`} className="block">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.images[0]}
                          alt={title}
                          width={440}
                          height={250}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                  ) : null}
                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                        <Link
                          href={`/blog/${slug}`}
                          className="hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {title}
                        </Link>
                      </h3>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{formatDate(date, siteMetadata.locale)}</span>
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="py-12 text-gray-500 dark:text-gray-400">No latest posts found.</p>
        )}
      </section>

      {posts.length > 6 + MAX_DISPLAY && (
        <div className="flex justify-end pt-6 text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-10">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
