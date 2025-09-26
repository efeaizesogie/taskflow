import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'md', className  }) => {
  // Tailwind classes based on variant and size
  const baseClasses = ' px-5 py-2 min-w-30 rounded-3xl font-normal text-base transition duration-300 ';

  // Variant styles
  const variantClasses = {
    primary: 'bg-primary text-text-dark',
    secondary: 'border border-text-dark text-text-dark',
    ghost: 'bg-transparent border border-text text-text hover:bg-gray-200',
  };

  // Size styles
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
