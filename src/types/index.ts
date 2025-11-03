export interface Service {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  benefits: string[]
  faq?: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  qualifications?: string[]
  email?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

