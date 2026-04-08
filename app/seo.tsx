import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  path: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  path,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  const canonical = `${siteMetadata.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: canonical,
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical,
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}
