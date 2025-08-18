function Button ({ children, variant = 'primary', size = 'md', className = '', disabled = false, type = 'button', onClick, ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ease-in-out cursor-pointer outline-none text-decoration-none'
  
  const variantClasses = {
    primary: 'bg-[#093890] border-none text-white hover:bg-[#072d73] hover:-translate-y-0.5 hover:shadow-lg',
    outline: 'bg-white text-[#093890] border-2 border-[#093890] hover:bg-[#093890] hover:text-white',
    secondary: 'bg-[#3a7bc8] text-white hover:bg-[#2a6bb8]'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]'
  }
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : ''
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant] || ''} ${sizeClasses[size] || ''} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
