interface FeatureStepProps {
  imageSrc: string;
  imageAlt: string;
  stepNumber: string;
  title: string;
  description: string;
}

export function FeatureStep({ imageSrc, imageAlt, stepNumber, title, description }: FeatureStepProps) {
  return (
    <div className="group">
      <div className="mb-8 relative h-64 rounded-3xl overflow-hidden bg-white shadow-sm group-hover:shadow-xl transition-shadow w-full">
        {/* Using standard img for simplicity in HTML to React conversion. For full Next.js optimization, replace with next/image */}
        <img 
          alt={imageAlt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={imageSrc} 
        />
      </div>
      <h3 className="font-headline text-2xl font-bold text-primary mb-3">
        {stepNumber}. {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
