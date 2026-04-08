import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tools' })

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-2xl py-24 text-center">
      <div className="mb-6">
        <div className="border-primary-500 mx-auto mb-4 w-8 border-t-[3px]" />
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
          Tools Coming Soon
        </h1>
      </div>
      <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
        Practical tools for social media analysis and strategy — built to help you understand what's really happening, not just surface-level metrics.
      </p>
      <p className="text-sm text-gray-400 dark:text-gray-500">
        Subscribe to get notified when we launch.
      </p>
    </div>
  )
}
