import { Icon } from "../atoms/icon";
import { Badge } from "../atoms/badge";
import { Button } from "../atoms/button";
import Link from "next/link";

export interface JobCardProps {
  variant?: "compact" | "detailed";
  title: string;
  company: string;
  location?: string;
  iconType?: string;
  imageSrc?: string;
  urgencyStatus?: "Urgent" | "New" | "Mendesak" | "Baru" | "";
  visaProvided?: boolean;
  tags?: string[];
  postedTime?: string;
  salary?: string;
  duration?: string;
}

export function JobCard({
  variant = "compact",
  title,
  company,
  location,
  iconType,
  imageSrc,
  urgencyStatus,
  visaProvided,
  tags = [],
  postedTime,
  salary,
  duration,
}: JobCardProps) {
  if (variant === "detailed") {
    return (
      <div className="bg-surface-container-lowest rounded-[2rem] p-6 transition-all duration-300 group border border-transparent hover:border-outline-variant/10">
        <div className="flex justify-between items-start mb-6">
          <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center p-2">
            {imageSrc ? (
              <img
                alt={`${company} icon`}
                className="w-full h-auto rounded"
                src={imageSrc}
              />
            ) : (
              <Icon
                name={iconType || "apartment"}
                className="text-3xl text-primary"
              />
            )}
          </div>
          <div className="flex gap-2">
            {urgencyStatus && (
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${urgencyStatus === "Urgent" || urgencyStatus === "Mendesak" ? "bg-error-container text-on-error-container" : "bg-secondary-fixed text-on-secondary-fixed"}`}
              >
                {urgencyStatus}
              </span>
            )}
            {visaProvided && (
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                Visa Disediakan
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors leading-tight mb-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-on-surface-variant mb-4">
          <Icon name="business" className="text-lg" />
          <span className="text-sm font-semibold">{company}</span>
        </div>

        <div className="bg-surface-container-low rounded-2xl p-4 flex justify-between items-center mb-6">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
              Gaji Bulanan
            </p>
            <p className="text-lg font-extrabold text-primary">{salary}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
              Durasi
            </p>
            <p className="text-sm font-bold text-on-surface">{duration}</p>
          </div>
        </div>

        <Link href="/jobs/detail">
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:scale-[0.98] transition-all">
            Daftar Sekarang
            <Icon name="arrow_forward" className="text-sm" />
          </button>
        </Link>
      </div>
    );
  }

  // Compact variant (original)
  return (
    <div className="p-6 rounded-2xl bg-surface-container-low hover:bg-surface-bright transition-all duration-300 group border-none shadow-sm hover:shadow-xl w-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <Icon name={iconType || "apartment"} className="text-3xl" />
          </div>
          <div>
            <h4 className="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
              {title}
            </h4>
            <p className="text-on-surface-variant font-medium text-sm md:text-base line-clamp-1">
              {company} {location && `• ${location}`}
            </p>
          </div>
        </div>
        {urgencyStatus && (
          <Badge
            text={urgencyStatus}
            colorScheme={
              urgencyStatus === "Urgent" || urgencyStatus === "Mendesak"
                ? "tertiary"
                : "secondary"
            }
            className="shrink-0 ml-2"
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, idx) => (
          <Badge key={idx} text={tag} colorScheme="white" />
        ))}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <p className="text-xs text-outline font-medium">{postedTime}</p>
        <Link href="/jobs/detail">
          <button className="text-primary cursor-pointer font-bold flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
            <span>Daftar Sekarang</span>
            <Icon name="chevron_right" className="text-sm" />
          </button>
        </Link>
      </div>
    </div>
  );
}
