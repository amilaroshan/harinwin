import { Calendar, CreditCard, Globe, Shield, BarChart3, Headphones, Bell, Settings } from 'lucide-react'

function ServicesFeaturesSection () {
  const features = [
    {
      icon: Calendar,
      title: 'Centralized Dashboard',
      description: 'Manage all bookings from one place'
    },
    {
      icon: CreditCard,
      title: 'Secure Payment Integration',
      description: 'Safe and reliable payment processing'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Serve customers worldwide'
    },
    {
      icon: Shield,
      title: 'Role-Based Access Control',
      description: 'Secure user management system'
    },
    {
      icon: BarChart3,
      title: 'Booking Analytics And Reports',
      description: 'Detailed insights and reporting'
    },
    {
      icon: Headphones,
      title: 'Customer Service Support',
      description: '24/7 dedicated support team'
    },
    {
      icon: Bell,
      title: 'SMS & Email Notifications',
      description: 'Automated communication system'
    },
    {
      icon: Settings,
      title: 'API Access For Custom Integrations',
      description: 'Flexible integration options'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#093890] leading-tight tracking-tight mb-4">
            Core Features
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-[#3a7bc8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#093890] mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesFeaturesSection
