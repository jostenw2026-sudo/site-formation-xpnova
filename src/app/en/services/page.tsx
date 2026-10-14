export default function ServicesPageEN() {
  const services = [
    {
      title: 'Professions diagnosis',
      definition:
        'Analyze organizational skills needs, map professions and identify gaps between available and expected competencies.',
      description:
        'Skills needs analysis, profession mapping, gap identification, workforce analysis.',
      livrables: ['Diagnosis report', 'Profession mapping', 'Gap identification'],
      perimetre:
        'XP-NOVA conducts the diagnosis and formalizes the conclusions. The deployment of resulting training is provided by partner training organizations.',
      duree: '10 to 20 days',
    },
    {
      title: 'Frameworks',
      definition:
        'Design activity and competency frameworks as well as profession frameworks, aligned with local realities and reference standards.',
      description:
        'Design of competency and profession frameworks adapted to local realities and international standards.',
      livrables: ['Competency frameworks', 'Profession frameworks', 'Assessment grids'],
      perimetre:
        'Framework design is XP-NOVA\'s responsibility; their pedagogical implementation is entrusted to partner training organizations.',
      duree: '15 to 30 days',
    },
    {
      title: 'Curricula and pathways',
      definition:
        'Structure complete curricula and learning pathways: learning objectives, modules, sequences, durations and facilitation methods.',
      description:
        'Design of structured curricula and learning pathways: objectives, modules, sequences, durations, methods.',
      livrables: ['Training curricula', 'Learning pathways', 'Training guides'],
      perimetre:
        'XP-NOVA designs the pathways; partner organizations ensure their facilitation with learners.',
      duree: '20 to 40 days',
    },
    {
      title: 'Content and materials',
      definition:
        'Produce educational content adapted to the target audience: course materials, practical guides, case studies and contextualized exercises.',
      description:
        'Design of educational content adapted to target audience: materials, guides, case studies, exercises.',
      livrables: ['Training materials', 'Practical guides', 'Case studies'],
      perimetre:
        'Content production is provided by XP-NOVA; session use is carried out by partner organization trainers.',
      duree: '20 to 40 days',
    },
    {
      title: 'Learning assessment',
      definition:
        'Design competency assessment tools: knowledge tests, practical situations and objective observation grids.',
      description:
        'Design of assessment tools: knowledge tests, practical situations, observation grids.',
      livrables: ['Assessment tests', 'Observation grids', 'Certificates'],
      perimetre:
        'XP-NOVA designs assessment systems; administration and delivery in sessions are partner organizations\' responsibility.',
      duree: '10 to 20 days',
    },
    {
      title: 'Terms of reference',
      definition:
        'Write terms of reference for partner training organizations: pedagogical objectives, required profiles and infrastructure.',
      description:
        'Drafting of terms of reference for partner training organizations: objectives, profiles, infrastructure.',
      livrables: ['Terms of reference', 'Evaluation grid', 'Indicative schedule'],
      perimetre:
        'Terms of reference are written by XP-NOVA to select and frame organizations that will deploy training.',
      duree: '10 to 15 days',
    },
    {
      title: 'Pedagogical monitoring',
      definition:
        'Design pedagogical monitoring and control systems: indicators, dashboards and report templates.',
      description:
        'Design of pedagogical monitoring and control systems: indicators, dashboards, reports.',
      livrables: ['Monitoring indicators', 'Dashboards', 'Report templates'],
      perimetre:
        'XP-NOVA defines the monitoring framework; session data reporting is provided by partner organizations that facilitate.',
      duree: '10 to 15 days',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Our pedagogical engineering services</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            We design complete training systems, from skills needs diagnosis to learning assessment. We design; partner organizations facilitate.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white rounded border border-[#E2E5EC]">
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
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Scope of intervention</h3>
                <p className="text-sm text-[#5A6072]">{service.perimetre}</p>
              </div>
              <p className="text-sm text-[#5A6072]">
                <span className="font-semibold">Indicative duration:</span> {service.duree}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017] mb-8">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">What we do not do</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Direct facilitation of training sessions (provided by partners)</li>
              <li>Trainer mobilization (provided by partners)</li>
              <li>Participant management (provided by partners)</li>
              <li>Regulatory certification delivery (out of scope)</li>
            </ul>
          </div>
          <a
            href="/en/contact"
            className="inline-block px-6 py-3 bg-[#D4A017] text-white rounded font-semibold hover:bg-[#B8860B] transition-colors"
          >
            Request pedagogical framework
          </a>
        </div>
      </section>
    </div>
  );
}
