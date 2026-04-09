import { TopNavBar } from '../components/organisms/top_nav_bar';
import { HeroSection } from '../components/organisms/hero_section';
import { HowItWorksSection } from '../components/organisms/how_it_works_section';
import { FeaturedDestinationsSection } from '../components/organisms/featured_destinations_section';
import { ActiveOpportunitiesSection } from '../components/organisms/active_opportunities_section';
import { CTASection } from '../components/organisms/cta_section';
import { Footer } from '../components/organisms/footer';

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="pt-20">
        <HeroSection />
        <HowItWorksSection />
        <FeaturedDestinationsSection />
        <ActiveOpportunitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
