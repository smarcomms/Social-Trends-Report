interface Reply {
  author: string
  avatar?: string
  initials?: string
  date: string
  body: string
  likes: number
}

interface Comment {
  author: string
  avatar?: string
  initials?: string
  date: string
  body: string
  likes: number
  replies?: Reply[]
}

const COMMENTS: Comment[] = [
  {
    author: 'Jessica M.',
    avatar: '/static/images/commenters/jessica-m.jpg',
    date: '2 weeks ago',
    body: "I just signed up after reading this. Quick question — how long did it take to get the first batch after onboarding? I need content for my bakery ASAP and I'm trying to figure out if I should scramble to make some posts myself while I wait.",
    likes: 14,
    replies: [
      {
        author: 'Tyler Reed',
        avatar: '/static/images/commenters/tyler-reed.jpg',
        date: '2 weeks ago',
        body: "Hey Jessica! For both our test accounts, the first batch arrived within about 5–7 business days after onboarding. I'd recommend having a few posts of your own ready for the gap, but the turnaround was faster than I expected.",
        likes: 6,
      },
    ],
  },
  {
    author: 'Marcus Chen',
    avatar: '/static/images/commenters/marcus-chen.jpg',
    date: '1 week ago',
    body: "This is exactly the kind of breakdown I've been looking for. Most articles just scratch the surface but this actually goes into the strategy behind it. Shared it with my whole marketing team.",
    likes: 22,
    replies: [
      {
        author: 'Sarah K.',
        avatar: '/static/images/commenters/sarah-k.jpg',
        date: '1 week ago',
        body: "Same — we've been going back and forth on our approach and this settled a lot of internal debates. The data on engagement rates was particularly useful.",
        likes: 8,
      },
      {
        author: 'David Park',
        avatar: '/static/images/commenters/david-park.jpg',
        date: '5 days ago',
        body: 'Agreed. We actually changed our Q2 strategy based on the insights here. Would love to see a follow-up piece on how this applies to B2B specifically.',
        likes: 4,
      },
    ],
  },
  {
    author: 'Priya Sharma',
    avatar: '/static/images/commenters/priya-sharma.jpg',
    date: '3 days ago',
    body: "Finally, an article that doesn't just say \"post more consistently\" and actually gives you something actionable. Bookmarked this one. Would love to see a deep dive on the analytics side of things too.",
    likes: 9,
  },
]

function Avatar({ avatar, initials, name }: { avatar?: string; initials?: string; name: string }) {
  if (avatar) {
    return (
      <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
    )
  }
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">
      {initials || name.charAt(0)}
    </div>
  )
}

function CommentActions({ likes }: { likes: number }) {
  return (
    <div className="mt-3 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <button className="flex items-center gap-1.5 transition hover:text-gray-900 dark:hover:text-gray-100">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        {likes}
      </button>
      <button className="transition hover:text-gray-900 dark:hover:text-gray-100">Reply</button>
    </div>
  )
}

function ReplyItem({ reply }: { reply: Reply }) {
  return (
    <div className="ml-12 mt-4 border-l-2 border-gray-100 pl-5 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <Avatar avatar={reply.avatar} initials={reply.initials} name={reply.author} />
        <div>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{reply.author}</span>
          <span className="mx-2 text-gray-300 dark:text-gray-600">&middot;</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{reply.body}</p>
      <CommentActions likes={reply.likes} />
    </div>
  )
}

export default function StaticComments() {
  return (
    <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Comments</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {COMMENTS.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)} comments
        </span>
      </div>

      <div className="mt-6 space-y-8">
        {COMMENTS.map((comment, i) => (
          <div key={i}>
            <div className="flex items-center gap-3">
              <Avatar avatar={comment.avatar} initials={comment.initials} name={comment.author} />
              <div>
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{comment.author}</span>
                <span className="mx-2 text-gray-300 dark:text-gray-600">&middot;</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{comment.body}</p>
            <CommentActions likes={comment.likes} />

            {comment.replies?.map((reply, j) => (
              <ReplyItem key={j} reply={reply} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
