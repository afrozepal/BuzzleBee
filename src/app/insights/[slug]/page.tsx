'use client'

import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 py-20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Link
              href="/insights"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
            
            <div className="flex items-center space-x-6 mb-6 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              {/* Article Image */}
              <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center mb-8">
                <div className="text-center text-gray-500">
                  <Tag className="w-16 h-16 mx-auto mb-2" />
                  <p className="text-sm">Article Image</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h1>
                    )
                  } else if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  } else if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                    const items = paragraph.split('\n').filter(item => item.trim())
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            {item.replace(/^\d+\.\s/, '')}
                          </li>
                        ))}
                      </ol>
                    )
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.trim())
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">
                            {item.replace(/^-\s/, '')}
                          </li>
                        ))}
                      </ul>
                    )
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                  return null
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-gray-600 mb-4">
                    Tax Advisor at AEROPAL Tax & Accounting Services
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {post.author} is an experienced tax advisor with expertise in various areas of tax law and accounting. 
                    With years of experience helping clients navigate complex tax matters, {post.author.split(' ')[0]} provides 
                    practical, actionable advice to help businesses and individuals achieve their financial goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Articles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Continue reading with these related insights and expert advice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/insights/${relatedPost.slug}`}>
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                      <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-4">
                        <div className="text-center text-gray-500">
                          <Tag className="w-8 h-8 mx-auto mb-1" />
                          <p className="text-xs">Article Image</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(relatedPost.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {relatedPost.author}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-blue-600 font-medium">
                        <span>Read More</span>
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800">
        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Expert Tax Advice?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our expert team is here to help you navigate complex tax matters and achieve your financial goals. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Read More Insights
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
