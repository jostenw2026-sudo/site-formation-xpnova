import type { Metadata } from 'next';
import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaParcours } from '@/components/Schemas';
import { alternatesPour } from '@/lib/alternates';

export const metadata: Metadata = {
  alternates: alternatesPour('/services', 'en'),
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Skills Diagnostics',
      image: '/images/illustrations/diagnostic-metiers.webp',
      definition:
        "Analyze an organization's skills needs, map professions and identify gaps between available and expected competencies.",
      description:
        "Skills needs analysis, profession mapping, gap identification, workforce analysis.",
      livrables: ['Diagnostic report', 'Profession mapping', 'Gap identification'],
      perimetre:
        "XP-NOVA conducts the diagnostic and formalizes conclusions. Deployment of resulting training is handled by partner training organizations.",
      duree: '10 to 20 days',
    },
    {
      title: 'Frameworks',
      image: '/images/illustrations/referentiels.webp',
      definition:
        "Design activity and competency frameworks as well as profession frameworks, aligned with local realities and reference standards.",
      description:
        "Design of competency and profession frameworks adapted to local realities and international standards.",
      livrables: ['Competency frameworks', 'Profession frameworks', 'Assessment grids'],
      perimetre:
        "Framework design is XP-NOVA's responsibility; their pedagogical implementation is entrusted to partner training organizations.",
      duree: '15 to 30 days',
    },
    {
      title: 'Curricula and Pathways',
      image: '/images/illustrations/curricula-parcours.webp',
      definition:
        "Structure complete curricula and pedagogical pathways: learning objectives, modules, sequences, durations and animation methods.",
      description:
        'Design of structured curricula and pedagogical pathways: objectives, modules, sequences, durations, methods.',
      livrables: ['Training curricula', 'Pedagogical pathways', 'Training guides'],
      perimetre:
        "XP-NOVA designs the pathways; partner organizations ensure their delivery to learners.",
      duree: '20 to 40 days',
    },
    {
      title: 'Content and Materials',
      image: '/images/illustrations/contenus-supports.webp',
      definition:
        "Produce pedagogical content adapted to the target audience: course materials, practical guides, case studies and contextualized exercises.",
      description:
        'Design of pedagogical content adapted to the target audience: materials, guides, case studies, exercises.',
      livrables: ['Training materials', 'Practical guides', 'Case studies'],
      perimetre:
        "Content production is provided by XP-NOVA; use in sessions is carried out by trainers from partner organizations.",
      duree: '20 to 40 days',
    },
    {
      title: 'Competency Assessment',
      image: '/images/illustrations/evaluation-acquis.webp',
      definition:
        "Design competency assessment tools: knowledge tests, practical scenarios and objective observation grids.",
      description:
        "Design of assessment tools: knowledge tests, practical scenarios, observation grids.",
      livrables: ['Assessment tests', 'Observation grids', 'Certificates'],
      perimetre:
        "XP-NOVA designs assessment systems; administration and delivery in sessions are the responsibility of partner organizations.",
      duree: '10 to 20 days',
    },
    {
      title: 'Specifications',
      image: '/images/illustrations/cahiers-des-charges.webp',
      definition:
        "Draft specifications for partner training organizations: pedagogical objectives, required profiles and infrastructure.",
      description:
        "Drafting of specifications for partner training organizations: objectives, profiles, infrastructure.",
      livrables: ['Specifications', 'Assessment grid', 'Indicative schedule'],
      perimetre:
        "Specifications are drafted by XP-NOVA to select and frame organizations that will deploy the training.",
      duree: '10 to 15 days',
    },
    {
      title: 'Pedagogical Monitoring',
      image: '/images/illustrations/suivi-pedagogique.webp',
      definition:
        "Design monitoring and pedagogical management systems: indicators, dashboards and report templates.",
      description:
        'Design of monitoring and pedagogical management systems: indicators, dashboards, reports.',
      livrables: ['Monitoring indicators', 'Dashboards', 'Report templates'],
      perimetre:
        "XP-NOVA defines the monitoring framework; session data reporting is provided by partner organizations that deliver training.",
      duree: '10 to 15 days',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Our Training Engineering Services</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            We design complete training systems, from skills needs diagnostics to competency assessment. We design; partner organizations deliver.
          </p>
          <IntroPage cle="services" lang="en">
            <SchemaParcours lang="en" />
          </IntroPage>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="The seven services" texte="For each one: what it consists of, the deliverables you receive, XP-NOVA's share of the work and the indicative design duration." />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded border border-[#E2E5EC] overflow-hidden flex flex-col">
              {/* Illustration générée par IA, hébergée par le site : mention unique en bas de la liste (DG, 20/10/2026). */}
              <img src={service.image} alt={`Illustration — ${service.title}`} className="w-full h-40 object-cover" loading="lazy" width={1200} height={800} />
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">{service.title}</h2>
                <p className="text-[#5A6072] mb-4 text-sm italic">{service.definition}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Deliverables</h3>
                  <ul className="text-sm text-[#5A6072] list-disc list-inside">
                    {service.livrables.map((livrable) => (
                      <li key={livrable}>{livrable}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Scope of Intervention</h3>
                  <p className="text-sm text-[#5A6072]">{service.perimetre}</p>
                </div>
                <p className="text-sm text-[#5A6072] mt-auto">
                  <span className="font-semibold">Indicative Duration:</span> {service.duree}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-6xl mx-auto mt-8 text-[11px] leading-snug text-[#5A6072]">Illustrations on this page are generated and for information only.</p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="The limits of the scope" texte="What the division does not do, so you know from the outset what will need to be entrusted to a training organisation or an authority." />
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017] mb-8">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">What We Do Not Do</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Direct delivery of training sessions (handled by partners)</li>
              <li>Trainer mobilization (handled by partners)</li>
              <li>Participant management (handled by partners)</li>
              <li>Issuance of regulatory certifications (out of scope)</li>
            </ul>
          </div>
          <a
            href="/en/contact"
            className="inline-block px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
          >
            Request Pedagogical Scoping
          </a>
        </div>
      </section>
    </div>
  );
}
