import Image from 'next/image'
import Button from '../Button/Button'

function ServiceCard ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonVariant = 'primary',
  isHighlighted = false,
  className = '' 
}) {
  const baseClasses = 'rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out h-full flex flex-col'
  const highlightedClasses = isHighlighted ? 'bg-[#093890] text-white' : 'bg-white text-[#1a1a1a]'
  
  return (
    <div className={`${baseClasses} ${highlightedClasses} ${className}`}>
      <div className="mb-4 sm:mb-5">
        <Image 
          src={icon} 
          alt={title}
          width={48}
          height={48}
          className="w-12 h-12 sm:w-16 sm:h-16"
          priority
        />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight ${isHighlighted ? 'text-white' : 'text-[#1a1a1a]'}`}>
        {title}
      </h3>
      <p className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow ${isHighlighted ? 'text-white/90' : 'text-[#4a4a4a]'}`}>
        {description}
      </p>
      <Button 
        variant={buttonVariant} 
        size="md" 
        className="self-start w-full sm:w-auto"
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default ServiceCard
