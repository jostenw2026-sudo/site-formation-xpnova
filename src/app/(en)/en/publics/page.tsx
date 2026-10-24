import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { metadonneesPage } from '@/lib/metadonnees';

export const generateMetadata = metadonneesPage('/publics', 'en', {
  title: 'Target audiences — Training Engineering XP-NOVA',
  description: 'Promoters, cooperatives, agro-industrial companies, local authorities, programmes, training organisations and partners: the typical need of each audience and the training system XP-NOVA designs in response.',
});

export default function PublicsPage() {
  const publics = [
    {
      title: 'Promoters',
      description:
        'Agro-systemic project owners who need skills for their teams.',
      besoin:
        'Prepare teams to operate new equipment or a new activity, or to structure the management of the operation.',
      accompagnement:
        'XP-NOVA designs targeted upskilling pathways (operations, management, quality), delivered by partner organisations.',
      cta: 'Request scoping for your teams',
    },
    {
      title: 'Cooperatives',
      description:
        'Producer groups that need technical and organisational training.',
      besoin:
        'Strengthen the technical production skills and internal governance of cooperatives to improve quality and income.',
      accompagnement:
        'XP-NOVA designs frameworks and systems suited to the cooperative context (techniques, quality, organisation), delivered by partners.',
      cta: 'Scope a system for your cooperative',
    },
    {
      title: 'Agro-industrial companies',
      description:
        'Processing units that need skills for their operators and technicians.',
      besoin:
        'Qualify operators and technicians in industrial processes, hygiene, safety and compliance with standards.',
      accompagnement:
        'XP-NOVA designs tailor-made curricula and materials (process, hygiene and safety, quality) for the teams, delivered by training partners.',
      cta: 'Request a pathway for your operators',
    },
    {
      title: 'Local authorities',
      description:
        'Municipalities, divisions and regions developing territorial projects.',
      besoin:
        'Build the skills of local stakeholders and value chains as part of territorial development projects.',
      accompagnement:
        'XP-NOVA designs capacity-building and value-chain structuring systems, delivered by partner organisations.',
      cta: 'Scope a territorial system',
    },
    {
      title: 'Programmes',
      description:
        'Development programmes funding capacity-building projects.',
      besoin:
        "Deploy large-scale, replicable and measurable training systems aligned with the programme's objectives.",
      accompagnement:
        'XP-NOVA designs scalable systems (curricula, tools, monitoring and evaluation) deployed by partner organisations.',
      cta: 'Design a large-scale system',
    },
    {
      title: 'Training organisations',
      description:
        'Vocational training centres wishing to enrich their offer.',
      besoin:
        'Enrich a training offer with content and frameworks suited to the real needs of the agro-system market.',
      accompagnement:
        'XP-NOVA designs frameworks, curricula and materials that partner organisations integrate into their delivery.',
      cta: 'Enrich your training offer',
    },
    {
      title: 'Partners',
      description:
        'Institutions, donors and NGOs funding capacity-building projects.',
      besoin:
        'Have pedagogical systems aligned with objectives, with documented accountability and monitoring and evaluation.',
      accompagnement:
        'XP-NOVA designs traceable systems (frameworks, indicators, reports) whose delivery rests with partner organisations.',
      cta: 'Scope a quality system',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Our target audiences</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Our training systems are designed to meet the needs of a range of agro-system stakeholders: we design them, partner organisations deliver them.
          </p>
          <IntroPage cle="publics" lang="en" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Seven audiences, seven typical needs" texte="For each audience: the starting situation we meet most often and the system we design in response." />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {publics.map((publicCible) => (
            <div key={publicCible.title} className="p-6 bg-white rounded border border-[#E2E5EC] flex flex-col">
              <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">{publicCible.title}</h2>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Specific need</h3>
                <p className="text-[#5A6072] text-sm">{publicCible.besoin}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">XP-NOVA support</h3>
                <p className="text-[#5A6072] text-sm">{publicCible.accompagnement}</p>
              </div>
              <a
                href="/en/contact"
                className="inline-block mt-auto px-4 py-2 bg-[#D4A017] text-[#0D1F5C] rounded text-sm font-semibold hover:bg-[#E9C25A] transition-colors"
              >
                {publicCible.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
