import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Guides' })

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-2xl py-24 text-center">
      <div className="mb-6">
        <div className="border-primary-500 mx-auto mb-4 w-8 border-t-[3px]" />
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
          Guides Coming Soon
        </h1>
      </div>
      <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Deep dives into social media strategy, platform changes, and what actually works — written by practicing marketers, not recycled advice.
      </p>
      <p className="text-sm text-gray-400 dark:text-gray-500">
        Subscribe to get notified when we publish.
      </p>
    </div>
  )
}
