export interface BadgeProps {
  text: string;
  colorScheme?: 'primary' | 'secondary' | 'tertiary' | 'white';
  className?: string;
}

export function Badge({ text, colorScheme = 'primary', className = '' }: BadgeProps) {
  let baseStyle = "px-3 py-1 font-bold rounded-full text-xs font-label uppercase tracking-widest";

  if (colorScheme === 'primary') {
    baseStyle += " bg-primary-fixed text-on-primary-fixed-variant";
  } else if (colorScheme === 'secondary') {
    baseStyle += " bg-secondary-fixed text-on-secondary-fixed-variant";
  } else if (colorScheme === 'tertiary') {
    baseStyle += " bg-tertiary-fixed text-on-tertiary-fixed-variant";
  } else if (colorScheme === 'white') {
    baseStyle += " bg-white text-slate-500 shadow-sm font-semibold capitalize tracking-normal text-[10px]";
  }

  return (
    <span className={`${baseStyle} ${className}`}>
      {text}
    </span>
  );
}
