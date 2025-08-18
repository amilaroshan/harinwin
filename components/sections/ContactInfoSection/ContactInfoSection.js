import { Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'
import contactImg from '@/assets/contact-img.jpg'

function ContactInfoSection () {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone:',
      value: '+94 77 123 4567',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email:',
      value: 'support@harinwin.com',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      label: 'Support Hours:',
      value: 'Monday - Friday, 9 AM - 6 PM (IST)',
      color: 'text-yellow-600'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#093890] leading-tight tracking-tight mb-6">
              Let&apos;s Connect and Simplify Travel Together
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              Have a question, feedback, or need a custom solution? We&apos;re here to help. Reach out and let&apos;s build something great.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-4 flex-shrink-0'>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">{info.label}</span>
                    <span className="text-gray-600 ml-2">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={contactImg}
                alt="Professional working on laptop with email notifications"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection
