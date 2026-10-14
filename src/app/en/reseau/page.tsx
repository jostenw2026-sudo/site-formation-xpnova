export default function ReseauPageEN() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Training network</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            We work with a network of partner training organizations selected for their skills, infrastructure and experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Selection criteria</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Technical skills in relevant domains</li>
              <li>Adequate infrastructure (rooms, equipment)</li>
              <li>Proven experience in professional training</li>
              <li>Ability to adapt to XP-NOVA specifications</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Intervention domains</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Agriculture and livestock</li>
              <li>Agri-food processing</li>
              <li>Territorial development</li>
              <li>Agro-systemic technology</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Collaboration modalities</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Partnerships formalized by contracts</li>
              <li>Payment according to deliverables and results</li>
              <li>Co-design of training systems</li>
              <li>Continuous trainer training</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Geographic coverage</h2>
            <p className="text-[#5A6072]">
              Cameroon and Central African countries (to be confirmed according to partners)
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Become a partner</h2>
            <p className="text-[#5A6072] mb-4">
              If you are a training organization and wish to join our network, contact us to discuss collaboration opportunities.
            </p>
            <a
              href="/en/contact"
              className="inline-block px-6 py-3 bg-[#D4A017] text-white rounded font-semibold hover:bg-[#B8860B] transition-colors"
            >
              Request partnership
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
