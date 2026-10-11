export default function ReseauPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Réseau de formation</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Nous travaillons avec un réseau d'organismes de formation partenaires sélectionnés pour leurs compétences, leurs infrastructures et leur expérience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Critères de sélection</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Compétences techniques dans les domaines concernés</li>
              <li>Infrastructures adéquates (salles, équipements)</li>
              <li>Expérience éprouvée en formation professionnelle</li>
              <li>Capacité d'adaptation aux spécifications XP-NOVA</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Domaines d'intervention</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Agriculture et élevage</li>
              <li>Transformation agroalimentaire</li>
              <li>Développement territorial</li>
              <li>Technologie agro-systémique</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Modalités de collaboration</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Partenariats formalisés par contrats</li>
              <li>Rémunération selon les livrables et les résultats</li>
              <li>Co-design des dispositifs de formation</li>
              <li>Formation continue des formateurs</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Couverture géographique</h2>
            <p className="text-[#5A6072]">
              Cameroun et pays d'Afrique centrale (à confirmer selon les partenaires)
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Devenir partenaire</h2>
            <p className="text-[#5A6072] mb-4">
              Si vous êtes un organisme de formation et souhaitez rejoindre notre réseau, contactez-nous pour discuter des opportunités de collaboration.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#D4A017] text-white rounded font-semibold hover:bg-[#B8860B] transition-colors"
            >
              Demander un partenariat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
