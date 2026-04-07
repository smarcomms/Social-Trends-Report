import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Social Trends Report — Social Media Marketing Insights & Strategy',
  description:
    'Stay ahead with expert analysis on social media trends, platform updates, and marketing strategy. Independent insights for marketers and brands.',
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
