import { Icon } from "../../atoms/icon";
import { Button } from "../../atoms/button";

export function DashboardSidebar() {
  const menuItems = [
    { label: "Beranda", icon: "dashboard", active: true },
    { label: "Lowongan", icon: "work", active: false },
    { label: "Kandidat", icon: "group", active: false },
    { label: "Pelatihan", icon: "book", active: false },
  ];

  return (
    <aside className="w-64 bg-surface-container-lowest border-r border-outline-variant/30 hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <span className="text-2xl font-bold tracking-tighter text-blue-900 font-manrope">
          InginKerja <span className="text-secondary text-sm">LPK</span>
        </span>
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
  );
}
