import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'About',
  path: '/about',
  description:
    'Meet the marketing professionals behind Social Trends Report — independent social media analysis and strategy insights.',
})

export default function Page() {
  const authors = allAuthors.filter(
    (author) => author.slug !== 'default' && author.slug !== 'sparrowhawk'
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Our Authors
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Meet the team behind Social Trends Report
        </p>
      </div>
      <div className="container py-12">
        <div className="space-y-8">
          {authors.map((author) => {
            const mainContent = coreContent(author)
            return (
              <div
                key={author.slug}
                className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-sm shadow-gray-900/5 backdrop-blur-sm transition hover:-translate-y-0.5 dark:border-gray-800/80 dark:bg-slate-950/80 dark:shadow-black/10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                  {author.avatar ? (
                    <div className="flex-shrink-0">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={120}
                        height={120}
                        className="h-[120px] w-[120px] rounded-full"
                      />
                    </div>
                  ) : null}
                  <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {author.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {author.occupation}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{author.company}</p>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700 dark:text-gray-300">
                      <MDXLayoutRenderer code={author.body.code} />
                    </div>
                    <div className="mt-5 flex justify-center gap-4 text-sm md:justify-start">
                      {author.twitter && (
                        <Link
                          href={author.twitter}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                        >
                          Twitter
                        </Link>
                      )}
                      {author.linkedin && (
                        <Link
                          href={author.linkedin}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                        >
                          LinkedIn
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
