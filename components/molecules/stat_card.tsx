import { Icon } from "../atoms/icon";

interface StatCardProps {
  title: string;
  value: string;
  iconName: string;
  colorScheme?: "primary" | "secondary" | "tertiary";
}

export function StatCard({
  title,
  value,
  iconName,
  colorScheme = "primary",
}: StatCardProps) {
  const iconBgClasses = {
    primary: "bg-primary-container text-primary-fixed",
    secondary: "bg-secondary-container text-secondary-fixed",
    tertiary: "bg-tertiary-container text-tertiary-fixed",
  };

  return (
    <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-outline-variant/20">
      <div className="flex justify-between items-start mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${iconBgClasses[colorScheme]}`}
        >
          <Icon name={iconName} className="text-2xl" />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-on-surface-variant mb-1">
          {title}
        </p>
        <h3 className="text-3xl font-black font-headline text-primary tracking-tight">
          {value}
        </h3>
      </div>
    </div>
  );
}
