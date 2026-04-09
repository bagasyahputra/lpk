import { Icon } from "../../atoms/icon";

export function UserSidebar() {
  const menuItems = [
    { label: "Dasbor", icon: "dashboard", active: true },
    { label: "Aplikasi", icon: "work_history", active: false },
    { label: "Transfer", icon: "money", active: false },
    { label: "Target Pencapaian", icon: "track_changes", active: false },
    { label: "Pengaturan", icon: "settings", active: false },
    { label: "Bantuan", icon: "help", active: false },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-white dark:bg-slate-950 border-r-0 rounded-r-3xl shadow-xl fixed left-0 top-0 z-40 py-8 px-4">
      <div className="mb-10 px-4">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-xl"
            alt="InginKerja Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX6sLXryA6QMqbvp4CLiSp5BCp1-NgoG1IyayhcKT4pMVSjyo0A82R_GP9VdNLswC1IRj-0DBQC-7X3b_C5rJNxRC8bCvBD7AH-ZpSegbf993SeHkMe_-IMXrOKIqXOwkOeY6vVEbozrX1x7tYiofJNo0pxRiu1XmqbU_ACNuroVCnYCbZdugeJAny84Cy7lQBcLUp-IiXhGf1sP_mMe2iaaBCR7K8PJKd941Z74FOKRBviIJTr1Q8KqhnhspseQezWhIh1Ogob54U"
          />
          <div>
            <h1 className="text-xl font-black text-blue-900 dark:text-blue-400 font-manrope">
              InginKerja
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              Global Career Portal
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 font-manrope text-base font-semibold rounded-xl transition-all ${
              item.active
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 translate-x-1 duration-300"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <Icon name={item.icon} filled={item.active} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto px-4">
        <div className="bg-secondary-fixed p-4 rounded-2xl mb-6">
          <p className="text-on-secondary-fixed-variant text-xs font-bold uppercase mb-2">
            Akses Pro
          </p>
          <p className="text-on-secondary-fixed text-sm mb-3">
            Buka bantuan visa & dukungan hukum.
          </p>
          <button className="w-full bg-secondary text-white py-2 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all">
            Tingkatkan Paket
          </button>
        </div>

        <button className="flex items-center gap-3 text-slate-500 hover:text-error px-4 py-3 font-manrope text-base font-semibold transition-colors w-full text-left">
          <Icon name="logout" />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}
