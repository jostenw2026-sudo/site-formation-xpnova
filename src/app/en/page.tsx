import { Metadata } from 'next';
import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaRole } from '@/components/Schemas';

export const metadata: Metadata = {
  title: 'Professional Training Engineering | XP-NOVA',
  description: 'We design professional training systems adapted to agro-system professions: competency frameworks, curricula, educational content and assessment tools.',
};

export default function HomeEN() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 px-6 bg-[#6B2A0A] text-white border-b-4 border-[#D4A017] sur-fonce">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Design the skills that agro-systemic projects need
          </h1>
          <p className="text-lg text-[#E4E8F3] max-w-3xl">
            We design professional training systems adapted to the realities of agro-system professions: competency frameworks, curricula, educational content and assessment tools. Partner training organizations lead the sessions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/en/contact"
              className="px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
            >
              Request a pedagogical framework
            </a>
            <a
              href="/en/services"
              className="px-6 py-3 border-2 border-white/70 text-white rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Discover our services
            </a>
          </div>
        </div>
      </section>

      {/* Reading guide */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <IntroPage cle="accueil" lang="en">
            <SchemaRole lang="en" />
          </IntroPage>
        </div>
      </section>

      {/* Distinction */}
      <section className="py-8 px-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Our role in one sentence" texte="The boundary that structures the whole site: XP-NOVA designs, training organisations deliver." className="mb-4" />
          <p className="text-[#0D1F5C]">
            <strong>Our role:</strong> XP-NOVA designs training systems (frameworks, curricula, content, assessments). Session facilitation, trainer mobilization and participant management are provided by partner training organizations according to our specifications.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="7 services for quality professional training" texte="The steps of a complete training engineering, from skills needs diagnosis to deployment monitoring; each can also be ordered separately." />
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
          <TitreSection titre="7 audiences for adapted training" texte="The agro-system actors we design for: find your situation, the Audiences page details the typical need and our answer." />
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
          <TitreSection clair titre="Does your project need a training system?" texte="A first scoping exchange, free and without commitment: our training engineers reply within 48 working hours." className="mb-6 [&>p]:mx-auto" />
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
