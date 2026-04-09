interface DestinationCardProps {
  imageSrc: string;
  imageAlt: string;
  country: string;
  region?: string;
  subtitle?: string;
  jobsCount?: string;
  demandTag?: string;
  isLarge?: boolean;
  gradientClass?: string;
}

export function DestinationCard({ 
  imageSrc, 
  imageAlt, 
  country, 
  region, 
  subtitle, 
  jobsCount, 
  demandTag, 
  isLarge = false,
  gradientClass = "from-primary/80"
}: DestinationCardProps) {
  return (
    <div className={`relative rounded-[2rem] overflow-hidden group ${isLarge ? 'md:col-span-2' : ''}`}>
      <img 
        alt={imageAlt} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={imageSrc} 
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} to-transparent`}></div>
      <div className="absolute bottom-8 left-8">
        {region && (
          <p className="text-tertiary-fixed font-bold tracking-widest text-xs uppercase mb-2">
            {region}
          </p>
        )}
        <h3 className={`text-white font-bold font-headline mb-2 ${isLarge ? 'text-3xl mb-4' : 'text-2xl'}`}>
          {country}
        </h3>
        
        {subtitle && (
          <p className="text-white/80 text-sm">{subtitle}</p>
        )}
        
        {(jobsCount || demandTag) && (
          <div className="flex flex-wrap gap-4 mt-2">
            {jobsCount && (
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs">
                {jobsCount}
              </span>
            )}
            {demandTag && (
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs">
                {demandTag}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
