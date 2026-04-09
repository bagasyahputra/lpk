import { Icon } from "../atoms/icon";

export function StatBadge() {
  return (
    <div className="absolute bottom-12 -left-8 bg-surface-bright p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs transform -rotate-2 z-20">
      <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
        <Icon
          name="verified"
          className="text-on-tertiary-fixed-variant"
          filled
        />
      </div>
      <div>
        <p className="text-xs font-bold text-outline uppercase tracking-tighter">
          Verified Success
        </p>
        <p className="text-sm font-bold text-primary leading-tight">
          5,000+ Placements in 2026
        </p>
      </div>
    </div>
  );
}
