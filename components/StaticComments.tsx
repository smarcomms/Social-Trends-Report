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

// Avatar paths for the six commenters with photos. Other commenters use initials.
const AVATARS = {
  jessica: '/static/images/commenters/jessica-m.jpg',
  tyler: '/static/images/commenters/tyler-reed.jpg',
  marcus: '/static/images/commenters/marcus-chen.jpg',
  sarah: '/static/images/commenters/sarah-k.jpg',
  david: '/static/images/commenters/david-park.jpg',
  priya: '/static/images/commenters/priya-sharma.jpg',
}

// Per-article comments. The reader audience is small business owners, founders,
// in-house marketers, and freelancers — none of them work for Social Trends Report.
const COMMENTS_BY_SLUG: Record<string, Comment[]> = {
  'smarcomms-vs-feedbird-vs-99-dollar-social': [
    {
      author: 'Sarah K.',
      avatar: AVATARS.sarah,
      date: '2 weeks ago',
      body: "Really useful breakdown — the unlimited revisions thing is what tipped me. I've had two providers in the last 18 months who would only do one round of edits per post and it always felt like I was rushing my feedback. Going to give Smarcomms a try this month.",
      likes: 18,
      replies: [
        {
          author: 'Marcus Chen',
          avatar: AVATARS.marcus,
          date: '2 weeks ago',
          body: "We've been on Smarcomms for about 4 months now and the unlimited revisions is genuinely the thing that changed how I feel about outsourced content. The first batch is never perfect but you get to iterate without the 'we already used our revision' anxiety.",
          likes: 9,
        },
      ],
    },
    {
      author: 'M.L.',
      initials: 'ML',
      date: '10 days ago',
      body: 'Honest question — is $99/month for 10 posts actually enough to move the needle for a service business? I keep wondering if I should just be paying for more output, or whether 10 posts a month done well is genuinely the right baseline.',
      likes: 6,
    },
    {
      author: 'Jessica M.',
      avatar: AVATARS.jessica,
      date: '1 week ago',
      body: "I had been on the fence between all three for ages. The thing that always gave me pause about the older one was that it just felt frozen in time. The fact that Smarcomms covers video and growth services too means I don't have to think about migrating in 6 months when I want more.",
      likes: 12,
    },
    {
      author: 'R.M.',
      initials: 'RM',
      date: '5 days ago',
      body: "Has anyone actually used the money-back guarantee? I'm not planning to, but the existence of it is what made me trial it. Wondering if it's a real safety net or one of those things with a million conditions attached.",
      likes: 4,
      replies: [
        {
          author: 'K.H.',
          initials: 'KH',
          date: '4 days ago',
          body: "I didn't end up using it (the service worked) but I asked them about it during onboarding and the answer was straightforward — if you're not happy in the first month, you get refunded. No hoops. That alone made the decision easier than the comparison itself.",
          likes: 7,
        },
      ],
    },
  ],

  'social-media-agency-vs-99-service-cost': [
    {
      author: 'David Park',
      avatar: AVATARS.david,
      date: '3 weeks ago',
      body: "The math here is genuinely uncomfortable for anyone still on a $1,500+/month retainer. We were paying around $1,800/month for an agency to do basically what a $99 service does, and I told myself for two years it was worth it 'for the strategy.' Looking back, it wasn't.",
      likes: 27,
      replies: [
        {
          author: 'T.R.',
          initials: 'TR',
          date: '3 weeks ago',
          body: "How rough was the actual transition? My fear isn't the money — it's that I'll spend 3 weeks unwinding the old relationship and onboarding a new one and the whole calendar will fall apart in the gap.",
          likes: 5,
        },
      ],
    },
    {
      author: 'Priya Sharma',
      avatar: AVATARS.priya,
      date: '2 weeks ago',
      body: "Fair piece, but I'd push back slightly on the ecommerce framing. If you're running paid creative testing weekly, the strategic cycle time of an agency relationship still matters. That said — for the maintenance-channel stuff, totally agree.",
      likes: 11,
    },
    {
      author: 'B.L.',
      initials: 'BL',
      date: '12 days ago',
      body: "The 'oversight drag' framing is exactly it. I budget $1,200/month for an agency but the real cost is the 4-5 hours a week I spend reviewing drafts and chasing edits. That's basically a part-time job I'm doing on top of paying for the service.",
      likes: 19,
    },
    {
      author: 'L.H.',
      initials: 'LH',
      date: '6 days ago',
      body: "What I'd love is more on reporting. The agency I'm with sends a beautiful 12-page deck every month that I never read. Genuinely — has anyone moved away and missed the reporting? Or is that one of those things that sounds important and turns out not to be?",
      likes: 8,
    },
  ],

  'paid-for-social-media-help-and-still-did-half-the-work': [
    {
      author: 'Tyler Reed',
      avatar: AVATARS.tyler,
      date: '2 weeks ago',
      body: "This is uncannily accurate. I outsourced our content to a freelancer for 8 months and by month 3 I was spending more time managing her than I would have spent just doing the posts myself. The 'unpriced coordination' line — I'm using that the next time someone asks me why I cancelled.",
      likes: 24,
    },
    {
      author: 'R.O.',
      initials: 'RO',
      date: '12 days ago',
      body: 'Same story but with an Upwork freelancer. The work was fine in isolation but I had to brief, review, and reschedule everything because the freelancer treated each post as a one-off. There was no rhythm. Switching to a productized service was the only thing that fixed it.',
      likes: 14,
      replies: [
        {
          author: 'Sarah K.',
          avatar: AVATARS.sarah,
          date: '11 days ago',
          body: 'Same — except mine was an agency. Different price point, identical problem. The lesson I took from it is that the *type* of arrangement matters way more than the price tag.',
          likes: 6,
        },
      ],
    },
    {
      author: 'N.V.',
      initials: 'NV',
      date: '8 days ago',
      body: "Genuine question for the comments — does this 'half the work' problem actually disappear with a productized $99 service, or does it just get smaller? I'm sceptical that any outsourced setup is fully hands-off.",
      likes: 7,
      replies: [
        {
          author: 'E.M.',
          initials: 'EM',
          date: '7 days ago',
          body: "It gets dramatically smaller, in my experience. Not zero — you'll still review and approve — but the difference between 'I check approvals on my phone in 90 seconds' and 'I'm rewriting captions at 10pm' is the actual difference between productized and not.",
          likes: 11,
        },
      ],
    },
    {
      author: 'H.B.',
      initials: 'HB',
      date: '4 days ago',
      body: "The line about 'unpriced coordination' is going to live rent-free in my head. That is the single best description of why agency work feels expensive even when the invoice looks fine.",
      likes: 9,
    },
  ],

  'fired-my-social-media-agency-and-switched-to-a-99-service': [
    {
      author: 'Marcus Chen',
      avatar: AVATARS.marcus,
      date: '3 weeks ago',
      body: "I made this exact switch about six months ago. The part nobody warned me about: how *quiet* the new arrangement felt. I kept checking my email the first week thinking I'd missed something, and there was just nothing to manage. That's the entire selling point I didn't know to ask for.",
      likes: 31,
    },
    {
      author: 'A.L.',
      initials: 'AL',
      date: '2 weeks ago',
      body: "Considering doing this with an agency we've been with for 14 months. They're not bad — just expensive for what we use them for. The thing holding me back is the awkwardness of leaving on good terms. Anyone been through that?",
      likes: 8,
      replies: [
        {
          author: 'David Park',
          avatar: AVATARS.david,
          date: '2 weeks ago',
          body: "You'll feel weird for about 48 hours and then you'll wonder why you waited. I sent a polite cancellation email, gave 30 days notice, and they were fine. No drama. The first month after was the most relaxed I'd been about social in 2 years.",
          likes: 16,
        },
      ],
    },
    {
      author: 'H.K.',
      initials: 'HK',
      date: '10 days ago',
      body: 'I want to push back gently on this. We tried switching from an agency to a productized service last year and our engagement dropped 30% in the first quarter. Eventually came back but it took longer than this article suggests. Worth being honest about the dip.',
      likes: 12,
    },
    {
      author: 'J.P.',
      initials: 'JP',
      date: '5 days ago',
      body: "The 'who should not switch' table is the most useful part. I genuinely was worried I'd be giving up the strategic work my agency does, but they actually don't do much of that for us either — it just sounds important on the call. Time to have an honest conversation.",
      likes: 10,
    },
  ],

  'fiverr-upwork-or-managed-social-media-service': [
    {
      author: 'Priya Sharma',
      avatar: AVATARS.priya,
      date: '2 weeks ago',
      body: "I had an Upwork freelancer who was genuinely great for the first 6 months. Then she got busy with her main contract, the response time slipped, and the whole thing fell apart. The single-person dependency is the risk people don't price in.",
      likes: 22,
      replies: [
        {
          author: 'B.L.',
          initials: 'BL',
          date: '2 weeks ago',
          body: "This is exactly what happened to us. Great freelancer for nearly a year, then she took on a bigger client and we became the lower-priority account. It's not anyone's fault — it's just how the marketplace model works.",
          likes: 9,
        },
      ],
    },
    {
      author: 'C.R.',
      initials: 'CR',
      date: '11 days ago',
      body: "Has anyone had genuinely good experiences with Fiverr packages for monthly social? I keep seeing these 'monthly social media management' gigs for $49 and wondering if it's a trap or if some of them actually deliver.",
      likes: 6,
    },
    {
      author: 'Jessica M.',
      avatar: AVATARS.jessica,
      date: '8 days ago',
      body: "I tried both Fiverr and a managed service in the same year. Fiverr was cheaper on paper but I spent so much time onboarding three different sellers (because the first two ghosted) that the 'savings' evaporated. Managed service was less drama by a wide margin.",
      likes: 14,
    },
    {
      author: 'S.F.',
      initials: 'SF',
      date: '4 days ago',
      body: "The hidden hiring time point is huge. I once spent three full afternoons interviewing Upwork freelancers and at the end of it I felt like I'd done a small recruitment project. For one social media role. That alone tells you something about which model is genuinely time-saving.",
      likes: 11,
    },
  ],

  'can-ai-replace-a-human-social-media-manager': [
    {
      author: 'K.W.',
      initials: 'KW',
      date: '2 weeks ago',
      body: 'We tried going AI-only for two months. The captions were technically fine but they all sounded like they were written by the same chatbot — because they were. Engagement dropped, comments got weird, and we eventually had a person back in the loop within 8 weeks.',
      likes: 19,
      replies: [
        {
          author: 'Tyler Reed',
          avatar: AVATARS.tyler,
          date: '2 weeks ago',
          body: "Same experience. AI is excellent at draft-zero and terrible at draft-final. The gap between 'plausible' and 'right' is exactly where the human still earns their keep.",
          likes: 8,
        },
      ],
    },
    {
      author: 'Marcus Chen',
      avatar: AVATARS.marcus,
      date: '12 days ago',
      body: "The hybrid framing is the only one that's actually working in real businesses I see. AI for production, humans for judgment. The mistake teams make is thinking it has to be one or the other.",
      likes: 16,
    },
    {
      author: 'Z.H.',
      initials: 'ZH',
      date: '8 days ago',
      body: "Curious what tools people are pairing with their human review process. We're using Canva AI for visuals and ChatGPT for first drafts, then a real person edits. Open to better workflows if anyone's found one.",
      likes: 5,
    },
    {
      author: 'E.M.',
      initials: 'EM',
      date: '5 days ago',
      body: 'As an in-house social media manager — this article is reassuring but also makes me want to be very deliberate about which parts of my job I lean into. The community management and judgment stuff is exactly where I should be spending my time, not on drafting captions from scratch.',
      likes: 13,
    },
  ],

  'canva-vs-adobe-express-for-social-media': [
    {
      author: 'Jessica M.',
      avatar: AVATARS.jessica,
      date: '2 weeks ago',
      body: "I've tried to leave Canva three separate times and I always come back. The brand kit feature alone saves me hours every week. Adobe Express has some genuinely better features in places but the daily workflow just isn't as fast.",
      likes: 17,
      replies: [
        {
          author: 'S.R.',
          initials: 'SR',
          date: '2 weeks ago',
          body: "Same — and I'm an ex-Adobe person, so this is hard to admit. Adobe Express has more raw capability if you know what you're doing, but Canva is faster for the 80% of tasks a small business actually needs.",
          likes: 7,
        },
      ],
    },
    {
      author: 'M.P.',
      initials: 'MP',
      date: '11 days ago',
      body: "If you're already on Creative Cloud, Adobe Express makes way more sense than people give it credit for. The integration with Photoshop and Illustrator is the part nobody talks about. For solo designers it's genuinely the better workflow.",
      likes: 9,
    },
    {
      author: 'David Park',
      avatar: AVATARS.david,
      date: '7 days ago',
      body: "Quick question — has anyone properly tested the brand kit features side by side recently? Last time I checked Canva was clearly ahead but I haven't looked at Adobe Express in about 6 months.",
      likes: 4,
    },
    {
      author: 'L.F.',
      initials: 'LF',
      date: '3 days ago',
      body: "I run a tiny design business and use both. Canva for client deliverables (because clients use Canva), Adobe Express for my own brand work. The fact that you don't have to commit to one is itself an underrated point.",
      likes: 8,
    },
  ],

  'buffer-vs-later-vs-metricool-for-small-teams': [
    {
      author: 'Sarah K.',
      avatar: AVATARS.sarah,
      date: '2 weeks ago',
      body: "Been on Buffer for about three years. It's not the most feature-rich option but it does the job and it stays out of my way. For a small team of two people, simplicity wins over capability every time.",
      likes: 16,
    },
    {
      author: 'N.K.',
      initials: 'NK',
      date: '11 days ago',
      body: "Moved from Buffer to Metricool earlier this year and don't regret it. The analytics are genuinely better and the cross-platform reporting saved me from building my own spreadsheets. Buffer was easier to use but Metricool is more useful day-to-day.",
      likes: 13,
      replies: [
        {
          author: 'Priya Sharma',
          avatar: AVATARS.priya,
          date: '10 days ago',
          body: "Strongly agree on the analytics. Buffer's reporting was fine for one channel but the moment you're managing more than two, Metricool starts to feel like the only one built for it.",
          likes: 6,
        },
      ],
    },
    {
      author: 'R.L.',
      initials: 'RL',
      date: '8 days ago',
      body: 'Later still wins for me on visual planning. The grid preview is the thing I keep going back for — none of the others get the visual feed planning right. That said, the pricing has crept up a lot in the last 18 months.',
      likes: 9,
    },
    {
      author: 'M.J.',
      initials: 'MJ',
      date: '4 days ago',
      body: "Question for anyone using these in a 3+ person team: which one handles internal approvals best? That's the bit that's constantly broken for us and I can't tell if any of the three actually solve it well.",
      likes: 5,
    },
  ],
}

function getCommentsForSlug(slug: string): Comment[] {
  return COMMENTS_BY_SLUG[slug] || []
}

function Avatar({ avatar, initials, name }: { avatar?: string; initials?: string; name: string }) {
  if (avatar) {
    return <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
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
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        {likes}
      </button>
      <button className="transition hover:text-gray-900 dark:hover:text-gray-100">Reply</button>
    </div>
  )
}

function ReplyItem({ reply }: { reply: Reply }) {
  return (
    <div className="mt-4 ml-12 border-l-2 border-gray-100 pl-5 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <Avatar avatar={reply.avatar} initials={reply.initials} name={reply.author} />
        <div>
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {reply.author}
          </span>
          <span className="mx-2 text-gray-300 dark:text-gray-600">&middot;</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{reply.body}</p>
      <CommentActions likes={reply.likes} />
    </div>
  )
}

export default function StaticComments({ slug }: { slug?: string }) {
  const comments = slug ? getCommentsForSlug(slug) : []

  if (comments.length === 0) {
    return null
  }

  const totalCount = comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)

  return (
    <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Comments</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">{totalCount} comments</span>
      </div>

      <div className="mt-6 space-y-8">
        {comments.map((comment, i) => (
          <div key={i}>
            <div className="flex items-center gap-3">
              <Avatar avatar={comment.avatar} initials={comment.initials} name={comment.author} />
              <div>
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {comment.author}
                </span>
                <span className="mx-2 text-gray-300 dark:text-gray-600">&middot;</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {comment.body}
            </p>
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
