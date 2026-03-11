import Link from 'next/link'

const blogPosts = [
  {
    title: 'Understanding Anxiety: Signs, Symptoms, and Coping Strategies',
    excerpt: 'Learn about anxiety disorders and discover effective techniques to manage anxiety in your daily life.',
    date: 'March 15, 2024',
    image: '📝',
  },
  {
    title: 'The Benefits of Online Therapy: A Modern Approach to Mental Health',
    excerpt: 'Explore how online counselling can provide accessible and effective mental health support.',
    date: 'March 10, 2024',
    image: '💻',
  },
  {
    title: 'Building Stronger Relationships Through Communication',
    excerpt: 'Discover key communication strategies that can help improve your relationships with loved ones.',
    date: 'March 5, 2024',
    image: '💑',
  },
]

export default function BlogPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-primary-600">Articles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights and advice on mental health and well-being
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href="/blog"
              className="card p-6 hover:border-primary-300 border-2 border-transparent"
            >
              <div className="text-5xl mb-4">{post.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-primary-600 font-medium hover:text-primary-700">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
