import { Icon } from "../../atoms/icon";
import { Button } from "../../atoms/button";

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const menuItems = [
    { label: "Beranda", icon: "dashboard", active: true },
    { label: "Lowongan", icon: "work", active: false },
    { label: "Kandidat", icon: "group", active: false },
    { label: "Pelatihan", icon: "book", active: false },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-label="Tutup sidebar"
        />
      )}

      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 lg:p-8">
          <span className="text-2xl font-bold tracking-tighter text-blue-900 font-manrope">
            InginKerja <span className="text-secondary text-sm">LPK</span>
          </span>
          {/* Close Button on Mobile (Optional, since we have overlay, but good for accessibility) */}
          <button 
            onClick={onClose}
            className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"
          >
            <Icon name="close" />
          </button>
        </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 px-4">
          Menu Utama
        </div>
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
              item.active
                ? "bg-primary-fixed text-primary font-bold"
                : "text-on-surface hover:bg-surface-container hover:text-primary"
            }`}
          >
            <Icon
              name={item.icon}
              className={item.active ? "text-primary" : "text-outline"}
            />
            {item.label}
          </a>
        ))}

        <div className="mt-12 text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 px-4">
          Aksi
        </div>
        <Button variant="editorial" className="w-full justify-start mt-2">
          <Icon name="add" />
          Lowongan Baru
        </Button>
      </nav>

      <div className="p-4 border-t border-outline-variant/30 mt-auto">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container transition-all text-on-surface font-medium"
        >
          <Icon name="settings" className="text-outline" />
          Pengaturan
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-error-container text-error transition-all font-medium"
        >
          <Icon name="logout" className="text-error" />
          Keluar
        </a>
      </div>
    </aside>
    </>
  );
}
