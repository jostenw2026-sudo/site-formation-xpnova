export default function AboutPageEN() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">About the Training Engineering division</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            The Training Engineering division of XP-NOVA designs professional training systems adapted to the realities of agro-system professions.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our positioning</h2>
            <p className="text-[#5A6072]">
              XP-NOVA designs training systems (frameworks, curricula, content, assessments). Session facilitation, trainer mobilization and participant management are provided by partner training organizations according to our specifications.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our approach</h2>
            <p className="text-[#5A6072]">
              Our pedagogical approach is based on the analysis of actual work tasks, equipment used, quality standards and expected results. We design measurable systems adapted to local context.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our skills</h2>
            <p className="text-[#5A6072]">
              Our pedagogical engineers cover all domains: profession diagnosis, frameworks, curricula, content, assessment and pedagogical monitoring.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our partners</h2>
            <p className="text-[#5A6072]">
              We work with partner training organizations selected for their skills, infrastructure and experience. These partners facilitate sessions according to our specifications.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our limits</h2>
            <p className="text-[#5A6072]">
              We do not directly facilitate training sessions, do not mobilize trainers, do not manage participants and do not deliver regulatory certifications. A technical verification is not a certification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
