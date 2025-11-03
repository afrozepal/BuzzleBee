import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'tax-investigations',
    title: 'Tax Investigations',
    slug: 'tax-investigations',
    description: 'Expert representation and support during HMRC tax investigations. We help you navigate complex compliance issues with confidence.',
    shortDescription: 'Expert representation during HMRC investigations',
    icon: 'Shield',
    features: [
      'HMRC correspondence management',
      'Document preparation and submission',
      'Negotiation and settlement support',
      'Penalty mitigation strategies',
      'Ongoing compliance advice'
    ],
    benefits: [
      'Reduce stress and uncertainty',
      'Minimize penalties and interest',
      'Professional representation',
      'Expert knowledge of tax law',
      'Peace of mind'
    ],
    faq: [
      {
        question: 'What triggers a tax investigation?',
        answer: 'HMRC investigations can be triggered by various factors including random selection, unusual patterns in returns, third-party information, or specific risk indicators.'
      },
      {
        question: 'How long do investigations typically last?',
        answer: 'The duration varies depending on complexity, but most investigations are resolved within 6-12 months with proper representation.'
      }
    ]
  },
  {
    id: 'private-client',
    title: 'Private Client Services',
    slug: 'private-client',
    description: 'Comprehensive tax and financial planning services for high-net-worth individuals and families.',
    shortDescription: 'Personal tax planning for individuals',
    icon: 'User',
    features: [
      'Personal tax returns',
      'Inheritance tax planning',
      'Capital gains tax advice',
      'Trust administration',
      'Estate planning'
    ],
    benefits: [
      'Optimize tax efficiency',
      'Protect family wealth',
      'Comprehensive planning',
      'Expert guidance',
      'Long-term strategy'
    ]
  },
  {
    id: 'rd-tax-relief',
    title: 'R&D Tax Relief',
    slug: 'rd-tax-relief',
    description: 'Maximize your R&D tax relief claims with our expert guidance and comprehensive support.',
    shortDescription: 'Maximize R&D tax relief claims',
    icon: 'Lightbulb',
    features: [
      'R&D claim preparation',
      'Technical report writing',
      'HMRC compliance',
      'Claim optimization',
      'Ongoing support'
    ],
    benefits: [
      'Increase cash flow',
      'Reduce tax liability',
      'Expert technical knowledge',
      'Compliance assurance',
      'Maximum claim value'
    ]
  },
  {
    id: 'vat-services',
    title: 'VAT Services',
    slug: 'vat-services',
    description: 'Complete VAT compliance and advisory services for businesses of all sizes.',
    shortDescription: 'Complete VAT compliance and advice',
    icon: 'Receipt',
    features: [
      'VAT registration',
      'Quarterly returns',
      'VAT planning',
      'Compliance reviews',
      'HMRC correspondence'
    ],
    benefits: [
      'Ensure compliance',
      'Optimize VAT position',
      'Reduce penalties',
      'Expert guidance',
      'Peace of mind'
    ]
  },
  {
    id: 'payroll-services',
    title: 'Payroll Services',
    slug: 'payroll-services',
    description: 'Comprehensive payroll management and compliance services for your business.',
    shortDescription: 'Complete payroll management',
    icon: 'Users',
    features: [
      'Payroll processing',
      'RTI submissions',
      'Pension administration',
      'Year-end reporting',
      'Compliance support'
    ],
    benefits: [
      'Save time and resources',
      'Ensure accuracy',
      'Stay compliant',
      'Expert support',
      'Reduced risk'
    ]
  },
  {
    id: 'self-assessment',
    title: 'Self Assessment',
    slug: 'self-assessment',
    description: 'Professional self-assessment tax return preparation and submission services.',
    shortDescription: 'Professional tax return preparation',
    icon: 'FileText',
    features: [
      'Tax return preparation',
      'Submission and filing',
      'Tax planning advice',
      'HMRC correspondence',
      'Ongoing support'
    ],
    benefits: [
      'Ensure accuracy',
      'Meet deadlines',
      'Optimize tax position',
      'Expert knowledge',
      'Stress-free filing'
    ]
  }
]

