import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, User, Lightbulb, Receipt, Users, FileText } from 'lucide-react'
import { Service } from '@/types'

const iconMap = {
  Shield,
  User,
  Lightbulb,
  Receipt,
  Users,
  FileText,
}

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || FileText

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-blue-200 group-hover:-translate-y-2">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {service.shortDescription}
          </p>
          
          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

