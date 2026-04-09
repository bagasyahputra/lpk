import { Badge } from '../atoms/badge';
import { SearchBar } from '../molecules/search_bar';
import { StatBadge } from '../molecules/stat_badge';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-8 py-20 lg:py-32">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block mb-6">
            <Badge text="Global Opportunities" colorScheme="secondary" />
          </span>
          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1] mb-8">
            Your Global Career <br/><span className="text-secondary">Starts Here.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            We curate premium overseas job placements and world-class LPK training to transition your hospitality career into the global stage.
          </p>
          
          <SearchBar />
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-1 aspect-[4/5] bg-surface-container-high">
            <img 
              alt="Diverse professionals in international setting" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlPjnT-q55Ho9d9qCCfPfgIe6Q2wJay0JYtC9sVkA7gYj2_bRRVkuC7iBdhRN6qfvqkIxHsoX5fykHUZmYcH25HFKwnhrkxRIupeepgHaY2H2R4_QNyUQd5nZN0RENUztXbuus6-CPGGx_D1YKywbfSd646bTBGZRucrC9Xps1aIGLiiup8h0pzEqm3KwPvND_nXWhdQxtHcNMcPbX1XUIZa-nnHxt2HNQgRCDU-3APxEuyy2Oht0HTvmy_Bl2uKngFQ6y6-2cUd67"
            />
          </div>
          
          <StatBadge />
        </div>
      </div>
    </section>
  );
}
