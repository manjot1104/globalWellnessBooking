import Link from 'next/link'

const blogPosts = [
  {
    title: 'Benefits of Online Psychiatrist Medical Doctor Consultation',
    excerpt: 'Mental health conditions such as depression, anxiety disorders, bipolar disorder, and panic disorders often require specialized medical care. A psychiatrist medical doctor is uniquely qualified to diagnose mental health conditions, prescribe medication, and provide ongoing treatment.',
    date: 'February 18, 2026',
    image: '👩‍⚕️',
  },
  {
    title: 'What to Expect from Your First Online Therapy Session for Mental Health',
    excerpt: 'Starting therapy is an important step toward improving mental health, but it can also feel intimidating—especially if it\'s your first time. Many individuals worry about what to say, how the session will go, or whether online counseling will be effective.',
    date: 'February 18, 2026',
    image: '💻',
  },
  {
    title: 'Online Anger Management Psychologist: Techniques That Work',
    excerpt: 'Anger is a natural human emotion, but when it becomes frequent, intense, or difficult to control, it can negatively affect mental health, relationships, and overall quality of life.',
    date: 'February 18, 2026',
    image: '📝',
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
