import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Mental Health Articles - Global Wellness',
  description: 'Read our latest articles on mental health, therapy, anxiety, depression, relationships, and wellness tips.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Benefits of Online Psychiatrist Medical Doctor Consultation',
    excerpt: 'Mental health conditions such as depression, anxiety disorders, bipolar disorder, and panic disorders often require specialized medical care. A psychiatrist medical doctor is uniquely qualified to diagnose mental health conditions, prescribe medication, and provide ongoing treatment.',
    author: 'Dr. Priyanka Kalra',
    date: 'February 18, 2026',
    category: 'Psychiatry',
    image: '👩‍⚕️',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'What to Expect from Your First Online Therapy Session for Mental Health',
    excerpt: 'Starting therapy is an important step toward improving mental health, but it can also feel intimidating—especially if it\'s your first time. Many individuals worry about what to say, how the session will go, or whether online counseling will be effective.',
    author: 'Dr. Mitali Sharma',
    date: 'February 18, 2026',
    category: 'Therapy',
    image: '💻',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Online Anger Management Psychologist: Techniques That Work',
    excerpt: 'Anger is a natural human emotion, but when it becomes frequent, intense, or difficult to control, it can negatively affect mental health, relationships, and overall quality of life. Many people struggle with anger that feels overwhelming, leading to regretful actions, emotional exhaustion, and strained connections.',
    author: 'Dr. Sunil Kumar',
    date: 'February 18, 2026',
    category: 'Anger Management',
    image: '📝',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'How an Online Psychiatrist for Depression Can Transform Your Life',
    excerpt: 'Depression can quietly take over your thoughts, energy, relationships, and daily functioning. What may begin as persistent sadness or lack of motivation can gradually impact your sleep, appetite, productivity, and sense of self-worth.',
    author: 'Dr. Priyanka Kalra',
    date: 'February 18, 2026',
    category: 'Depression',
    image: '💙',
    readTime: '9 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Mental Health <span className="text-primary-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Insights, advice, and resources to support your mental health journey
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card p-6 hover:border-primary-300 border-2 border-transparent">
                <div className="text-6xl mb-4">{post.image}</div>
                <div className="mb-3">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest mental health tips and articles
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
