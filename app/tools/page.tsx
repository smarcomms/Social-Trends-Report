import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tools' })

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-2xl px-6 py-12 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Tools Coming Soon
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
        </div>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          We're building a suite of practical tools designed to make social media analysis and
          strategy less of a guessing game. These won't be flashy dashboards with meaningless
          metrics – they'll be the quiet workhorses that help you understand what's really happening
          in your digital ecosystem.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400">
          Tools that respect your time and amplify your insights. Coming soon.
        </p>
      </div>
    </div>
  )
}
