import { DestinationCard } from '../molecules/destination_card';
import { Button } from '../atoms/button';
import { Icon } from '../atoms/icon';

export function FeaturedDestinationsSection() {
  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-headline text-4xl font-bold text-primary mb-2">Prime Destinations</h2>
          <p className="text-on-surface-variant">Explore careers in the world's most innovative economies.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
          <span>View all countries</span>
          <Icon name="arrow_forward" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <DestinationCard 
          region="Asia-Pacific"
          country="Japan"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCN1nhUusaKWzVceE5GIFDUmmXlKNtiZDW719MtPVOs4UdFYMH5JFCVtQ1_kREbm_13UaDjNEZfnUgaNih34IURQh6EfC1BXxp8jsM4sDbk2mWOl7IybMc85RmzPg7CcSKBUO0ow24dFca1TbTIL7I2hEIYG3nnsKkl8XUlUgGBkqEJ0W1RTFILChp2soct4hFI3iWxojOnhuHjKjIe8dKP2VHTqwAGCW5QSOwKQLArEElXpCA2oKnuHdPeVSeckxoJ6RdZSqDzDHFO"
          imageAlt="Japan Tokyo Skyline"
          jobsCount="1,200+ Jobs"
          demandTag="High Demand: Hospitality"
          isLarge={true}
          gradientClass="from-primary/80"
        />
        
        <DestinationCard 
          country="South Korea"
          subtitle="Tech & Service Industries"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBoZWYZ20A24YhYVFFz3FVcIf8mnaAK32bl0ZwD8okDFcb_2Oc4P8OF0IFTi1-FqxuJK_tyS5diQ9u1VHafVOqKJ4cOLzdO35CDzkcs1rGg-KgthLkrjHKxn5ulFiAsXmJpAwKYNwbPSBARVe1fu4ETi7DmhjRuIhyifCJbBst7lHh0gNUXDepf-0m1P2j6BdbqLyGLPTVNkKMDvKp2rcSCVCzzmKko_stkXpiUpyCfDLDwGTKQ9HgOFoY5vGd7CMpy_wIPWDL3bqUy"
          imageAlt="Seoul South Korea"
          gradientClass="from-secondary/80"
        />
        
        <DestinationCard 
          country="Germany"
          subtitle="Industrial & Culinary Roles"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAAlGqYkcJfzsMaalDbkn7tfAYhqiJP5lEIgt29kDJn4IuLnYggMV_OGyN0F2V2S5kDUfnrrCxb7P9YnRGz4kC_qNwVqDeHLzzwFfbIApYARVCiJBy49BU6s45u3YMBb-vpyo7c3DG9Bz1auGmPfSOTJkvFjXS79UurpeoKqMIEfw4hG-BQHb86f6-EKT6REs7kR-Ngh3aZyvA2RVHwS9XQp4wOJUxcDWB1cH7hAB5eklhhni5uXAI433oX9X5WkrsdIm-CSTqIWCkm"
          imageAlt="Germany Berlin"
          gradientClass="from-primary-container/80"
        />
        
        <div className="md:col-span-2 bg-secondary-fixed rounded-[2rem] p-10 flex flex-col justify-center">
          <Icon name="star" className="text-secondary text-5xl mb-6" filled />
          <h3 className="font-headline text-3xl font-bold text-on-secondary-fixed mb-4">Elite Hospitality Placements</h3>
          <p className="text-on-secondary-fixed-variant max-w-lg mb-8">We partner with 5-star hotel chains in the UAE and Singapore. Start your journey with international standards.</p>
          <Button variant="primary" className="self-start">
            Explore Specialized Roles
          </Button>
        </div>
      </div>
    </section>
  );
}
