import { Icon } from '../../atoms/icon';

export function UserMobileNav() {
  const navItems = [
    { label: 'Beranda', icon: 'dashboard', active: true },
    { label: 'Pekerjaan', icon: 'work_history', active: false },
    { label: 'Belajar', icon: 'model_training', active: false },
    { label: 'Akun', icon: 'settings', active: false },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 shadow-2xl flex justify-around items-center h-16 z-50 border-t border-outline-variant/20">
      {navItems.map((item, idx) => (
        <button key={idx} className={`flex flex-col items-center justify-center gap-1 ${item.active ? 'text-primary' : 'text-slate-400'}`}>
          <Icon name={item.icon} filled={item.active} />
          <span className="text-[10px] font-bold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
