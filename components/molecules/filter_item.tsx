interface FilterItemProps {
  type: 'checkbox' | 'radio' | 'pill';
  name?: string;
  label: string;
  checked?: boolean;
}

export function FilterItem({ type, name, label, checked = false }: FilterItemProps) {
  if (type === 'pill') {
    return (
      <span className={`${checked ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-surface-container-highest text-on-surface-variant hover:bg-secondary-fixed/50'} px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-colors`}>
        {label}
      </span>
    );
  }

  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      {type === 'checkbox' ? (
        <input 
          type="checkbox" 
          defaultChecked={checked} 
          className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" 
        />
      ) : (
        <div className="relative flex items-center">
          <input 
            type="radio" 
            name={name} 
            defaultChecked={checked} 
            className="h-4 w-4 border-outline-variant text-primary focus:ring-primary" 
          />
        </div>
      )}
      <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
        {label}
      </span>
    </label>
  );
}
