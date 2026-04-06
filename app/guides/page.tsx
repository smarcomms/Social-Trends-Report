import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Guides' })

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-2xl px-6 py-12 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Guides Coming Soon
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
        </div>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          We're crafting a collection of thoughtful guides to help you navigate the ever-evolving
          world of social media trends. These won't be generic checklists or recycled advice –
          they'll be deep dives into what really matters, written by someone who's been in the
          trenches and seen what actually works.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400">
          Stay tuned for insights that cut through the noise and help you build something
          meaningful.
        </p>
      </div>
    </div>
  )
}
