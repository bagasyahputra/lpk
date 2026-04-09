import { Icon } from "../../atoms/icon";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="h-20 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        <button className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
          <Icon name="menu" />
        </button>
        <h1 className="text-2xl font-headline font-bold text-primary">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-surface-container rounded-full px-4 py-2 w-64 focus-within:ring-2 ring-primary/20 transition-all">
          <Icon name="search" className="text-outline text-sm mr-2" />
          <input
            type="text"
            placeholder="Cari kandidat..."
            className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="notifications" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-error border-2 border-surface"></span>
            </span>
          </button>

          <div className="flex items-center gap-3 border-l border-outline-variant/30 pl-6 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">
                Global Gateway LPK
              </p>
              <p className="text-xs text-on-surface-variant">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-sm border-2 border-primary-fixed">
              <span className="font-bold text-sm">GL</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
