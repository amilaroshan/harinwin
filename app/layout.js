import './globals.css'

export const metadata = {
  title: 'Harinwin Solutions - Travel Booking System Maintenance',
  description: 'Expert maintenance services for travel booking systems. Keep your platforms smooth, fast, and secure with Harinwin Solutions.',
  keywords: 'travel booking, system maintenance, flight booking, hotel booking, car rental',
  authors: [{ name: 'Harinwin Solutions' }],
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className="font-jakarta antialiased">
        {children}
      </body>
    </html>
  )
}
