import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Training Engineering | XP-NOVA',
  description: 'We design professional training systems adapted to agro-system professions: competency frameworks, curricula, educational content and assessment tools.',
};

export default function HomeEN() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1F5C] mb-6">
            Design the skills that agro-systemic projects need
          </h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            We design professional training systems adapted to the realities of agro-system professions: competency frameworks, curricula, educational content and assessment tools. Partner training organizations lead the sessions.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/en/contact"
              className="px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
            >
              Request a pedagogical framework
            </a>
            <a
              href="/en/services"
              className="px-6 py-3 bg-[#0D1F5C] text-white rounded font-semibold hover:bg-[#0A1850] transition-colors"
            >
              Discover our services
            </a>
          </div>
        </div>
      </section>

      {/* Distinction */}
      <section className="py-8 px-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D1F5C]">
            <strong>Our role:</strong> XP-NOVA designs training systems (frameworks, curricula, content, assessments). Session facilitation, trainer mobilization and participant management are provided by partner training organizations according to our specifications.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-4">7 services for quality professional training</h2>
          <p className="text-[#5A6072] mb-8">
            We support the design of complete training systems, from skills needs diagnosis to learning assessment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Professions diagnosis',
                description: 'Skills needs analysis and professions mapping.',
              },
              {
                title: 'Frameworks',
                description: 'Competency and profession frameworks adapted to local realities.',
              },
              {
                title: 'Curricula and pathways',
                description: 'Structured curricula and learning pathways: objectives, modules, durations.',
              },
              {
                title: 'Content and materials',
                description: 'Educational materials, practical guides and contextualized case studies.',
              },
              {
                title: 'Learning assessment',
                description: 'Assessment tools: tests, practical situations and observation grids.',
              },
              {
                title: 'Terms of reference',
                description: 'Terms of reference for partner training organizations.',
              },
              {
                title: 'Pedagogical monitoring',
                description: 'Monitoring and control systems: indicators and dashboards.',
              },
            ].map((service) => (
              <a
                key={service.title}
                href="/en/services"
                className="p-4 border border-[#E2E5EC] rounded hover:border-[#D4A017] transition-colors block"
              >
                <h3 className="font-semibold text-[#0D1F5C] mb-2">{service.title}</h3>
                <p className="text-sm text-[#5A6072]">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Publics */}
      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-4">7 audiences for adapted training</h2>
          <p className="text-[#5A6072] mb-8">
            Our training systems are designed to meet the needs of various agro-system actors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Promoters',
                description: 'Agro-systemic project leaders requiring skills for their teams.',
              },
              {
                title: 'Cooperatives',
                description: 'Producer groups requiring technical and organizational training.',
              },
              {
                title: 'Agro-industrial companies',
                description: 'Processing units requiring skills for their operators and technicians.',
              },
              {
                title: 'Local authorities',
                description: 'Municipalities, departments and regions developing territorial projects.',
              },
              {
                title: 'Programs',
                description: 'Development programs funding capacity building projects.',
              },
              {
                title: 'Training organizations',
                description: 'Professional training centers wishing to enrich their offer.',
              },
              {
                title: 'Partners',
                description: 'Institutions, donors and NGOs funding capacity building projects.',
              },
            ].map((publicCible) => (
              <a
                key={publicCible.title}
                href="/en/publics"
                className="p-4 bg-white rounded border border-[#E2E5EC] hover:border-[#D4A017] transition-colors block"
              >
                <h3 className="font-semibold text-[#0D1F5C] mb-2">{publicCible.title}</h3>
                <p className="text-sm text-[#5A6072]">{publicCible.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-6 bg-[#0D1F5C] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Does your project need a training system?</h2>
          <p className="mb-8 text-[#D4A017]">
            Our pedagogical engineers support you in the design of frameworks, curricula and content adapted to the realities of the agro-system.
          </p>
          <a
            href="/en/contact"
            className="inline-block px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
          >
            Request a pedagogical framework
          </a>
        </div>
      </section>
    </div>
  );
}
