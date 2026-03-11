import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Mental Health Articles - Global Wellness',
  description: 'Read our latest articles on mental health, therapy, anxiety, depression, relationships, and wellness tips.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Anxiety: Signs, Symptoms, and Coping Strategies',
    excerpt: 'Anxiety is one of the most common mental health conditions. Learn to recognize the signs and discover effective coping strategies to manage anxiety in your daily life.',
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Anxiety',
    image: '📝',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The Benefits of Online Therapy: A Modern Approach to Mental Health',
    excerpt: 'Online therapy has revolutionized mental health care. Explore how virtual counselling can provide accessible and effective support for your mental wellness journey.',
    author: 'Dr. Michael Chen',
    date: 'March 10, 2024',
    category: 'Therapy',
    image: '💻',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Building Stronger Relationships Through Communication',
    excerpt: 'Effective communication is the foundation of healthy relationships. Discover key strategies that can help improve your connections with loved ones and resolve conflicts.',
    author: 'Dr. Emily Rodriguez',
    date: 'March 5, 2024',
    category: 'Relationships',
    image: '💑',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Managing Depression: A Comprehensive Guide',
    excerpt: 'Depression affects millions worldwide. Learn about different types of depression, treatment options, and self-care strategies to support your recovery.',
    author: 'Dr. Sarah Johnson',
    date: 'February 28, 2024',
    category: 'Depression',
    image: '💙',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Stress Management Techniques for Busy Professionals',
    excerpt: 'Work-related stress can take a toll on your mental and physical health. Discover practical techniques to manage stress and maintain work-life balance.',
    author: 'Dr. James Wilson',
    date: 'February 20, 2024',
    category: 'Stress',
    image: '🌿',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Supporting Your Child\'s Mental Health',
    excerpt: 'Children face unique mental health challenges. Learn how to recognize signs of distress and support your child\'s emotional well-being through difficult times.',
    author: 'Dr. Emily Rodriguez',
    date: 'February 15, 2024',
    category: 'Child Mental Health',
    image: '👶',
    readTime: '7 min read',
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
