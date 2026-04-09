import { Icon } from '../../atoms/icon';

export function JobHeader() {
  return (
    <header className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
            <span>Cari Pekerjaan</span>
            <Icon name="chevron_right" className="text-xs" />
            <span>Hospitalitas</span>
            <Icon name="chevron_right" className="text-xs" />
            <span className="text-primary font-semibold">Senior Guest Relations</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4 leading-tight">
            Senior Guest Relations Officer
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              <Icon name="location_on" className="text-sm" />
              Kyoto, Jepang
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-medium">
              <Icon name="apartment" className="text-blue-700" />
              Hoshinoya Resorts Global
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-medium">
              <Icon name="schedule" className="text-blue-700" />
              Penuh Waktu
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="p-3 bg-surface-container-high rounded-xl text-primary hover:bg-surface-variant transition-colors">
            <Icon name="share" />
          </button>
          <button className="p-3 bg-surface-container-high rounded-xl text-primary hover:bg-surface-variant transition-colors">
            <Icon name="bookmark_add" />
          </button>
        </div>
      </div>
    </header>
  );
}
