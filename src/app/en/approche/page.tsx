export default function ApprochePage() {
  const etapes = [
    {
      title: 'Task analysis',
      description: 'Identification of actual work tasks in target professions.',
    },
    {
      title: 'Equipment and technologies',
      description: 'Identification of equipment and technologies used in the field.',
    },
    {
      title: 'Quality standards',
      description: 'Identification of applicable quality standards and norms.',
    },
    {
      title: 'Expected results',
      description: 'Definition of performance objectives and success indicators.',
    },
    {
      title: 'System design',
      description: 'Pedagogical architecture, methods, durations, assessment.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Our pedagogical approach</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Our pedagogical approach is based on the analysis of actual work tasks, equipment used, quality standards and expected results.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-8">Starting from actual work tasks</h2>
          <div className="space-y-8">
            {etapes.map((etape, index) => (
              <div key={etape.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4A017] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1 p-6 bg-white rounded border border-[#E2E5EC]">
                  <h3 className="text-xl font-bold text-[#0D1F5C] mb-2">{etape.title}</h3>
                  <p className="text-[#5A6072]">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Measurability</h2>
            <p className="text-[#5A6072]">
              We design measurable systems, with assessment and monitoring indicators that measure training effectiveness and identify improvement areas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
