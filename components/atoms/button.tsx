export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'editorial';
  className?: string;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  let baseStyle = "font-manrope text-sm font-semibold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2";
  
  if (variant === 'primary') {
    baseStyle += " bg-primary text-white shadow-md hover:shadow-lg";
  } else if (variant === 'secondary') {
    baseStyle += " bg-secondary-fixed text-on-secondary-fixed-variant shadow-md hover:shadow-lg";
  } else if (variant === 'outline') {
    baseStyle += " border border-outline-variant text-primary hover:bg-surface-container";
  } else if (variant === 'text') {
    baseStyle += " text-slate-600 hover:text-primary hover:bg-slate-100/50";
  } else if (variant === 'editorial') {
    baseStyle += " editorial-gradient text-white shadow-lg shadow-primary/20 scale-95 hover:scale-100";
  }

  // Padding adjustment based on typical usage, override with className if needed
  baseStyle += " px-6 py-2.5";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
