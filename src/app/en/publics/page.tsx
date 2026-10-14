export default function PublicsPageEN() {
  const publics = [
    {
      title: 'Promoters',
      description:
        'Agro-systemic project leaders requiring skills for their teams.',
      besoin:
        'Prepare teams to operate new equipment, new activities or structure farm management.',
      accompagnement:
        'XP-NOVA designs targeted skills development pathways (operation, management, quality), deployed by partner organizations.',
      cta: 'Request framework for your teams',
    },
    {
      title: 'Cooperatives',
      description:
        'Producer groups requiring technical and organizational training.',
      besoin:
        'Strengthen production technical skills and internal cooperative governance to improve quality and income.',
      accompagnement:
        'XP-NOVA designs frameworks and systems adapted to cooperative context (technical, quality, organization), facilitated by partners.',
      cta: 'Frame a system for your cooperative',
    },
    {
      title: 'Agro-industrial companies',
      description:
        'Processing units requiring skills for their operators and technicians.',
      besoin:
        'Qualify operators and technicians on industrial processes, hygiene, safety and standards compliance.',
      accompagnement:
        'XP-NOVA designs custom curricula and materials (processes, hygiene/safety, quality) for teams, deployed by training partners.',
      cta: 'Request pathway for your operators',
    },
    {
      title: 'Local authorities',
      description:
        'Municipalities, departments and regions developing territorial projects.',
      besoin:
        'Develop skills of local actors and value chains within territorial development projects.',
      accompagnement:
        'XP-NOVA designs capacity building and value chain structuring systems, facilitated by partner organizations.',
      cta: 'Frame a territorial system',
    },
    {
      title: 'Programs',
      description:
        'Development programs funding capacity building projects.',
      besoin:
        'Deploy large-scale training systems, reproducible and measurable, aligned with program objectives.',
      accompagnement:
        'XP-NOVA designs scalable systems (curricula, tools, monitoring-evaluation) deployed by partner organizations.',
      cta: 'Design a large-scale system',
    },
    {
      title: 'Training organizations',
      description:
        'Professional training centers wishing to enrich their offer.',
      besoin:
        'Enrich training offer with content and frameworks adapted to actual agro-system market needs.',
      accompagnement:
        'XP-NOVA designs frameworks, curricula and materials that partner organizations integrate into their facilitation systems.',
      cta: 'Enrich your training offer',
    },
    {
      title: 'Partners',
      description:
        'Institutions, donors and NGOs funding capacity building projects.',
      besoin:
        'Have pedagogical systems aligned with objectives, with documented accountability and monitoring-evaluation.',
      accompagnement:
        'XP-NOVA designs traceable systems (frameworks, indicators, reports) whose facilitation is partner organizations\' responsibility.',
      cta: 'Frame a quality system',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Our target audiences</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Our training systems are designed to meet the needs of various agro-system actors: we design them, partner organizations facilitate them.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
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
                className="inline-block mt-auto px-4 py-2 bg-[#D4A017] text-white rounded text-sm font-semibold hover:bg-[#B8860B] transition-colors"
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
