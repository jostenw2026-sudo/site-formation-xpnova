export default function ServicesPage() {
  const services = [
    {
      title: 'Diagnostic métiers',
      description: 'Analyse des besoins en compétences, cartographie des métiers, identification des gaps, analyse des effectifs.',
      livrables: ['Rapport de diagnostic', 'Cartographie des métiers', 'Identification des gaps'],
      duree: '10 à 20 jours',
    },
    {
      title: 'Référentiels',
      description: 'Conception de référentiels de compétences et de métiers adaptés aux réalités locales et aux standards internationaux.',
      livrables: ['Référentiels de compétences', 'Référentiels de métiers', 'Grilles d\'évaluation'],
      duree: '15 à 30 jours',
    },
    {
      title: 'Curricula et parcours',
      description: 'Conception de curricula et parcours pédagogiques structurés : objectifs, modules, séquences, durées, méthodes.',
      livrables: ['Curricula de formation', 'Parcours pédagogiques', 'Guides de formation'],
      duree: '20 à 40 jours',
    },
    {
      title: 'Contenus et supports',
      description: 'Conception de contenus pédagogiques adaptés au public cible : supports, guides, études de cas, exercices.',
      livrables: ['Supports de formation', 'Guides pratiques', 'Études de cas'],
      duree: '20 à 40 jours',
    },
    {
      title: 'Évaluation des acquis',
      description: 'Conception d\'outils d\'évaluation : tests de connaissances, mises en situation, grilles d\'observation.',
      livrables: ['Tests d\'évaluation', 'Grilles d\'observation', 'Certificats'],
      duree: '10 à 20 jours',
    },
    {
      title: 'Cahiers des charges',
      description: 'Rédaction des cahiers des charges pour organismes de formation partenaires : objectifs, profils, infrastructures.',
      livrables: ['Cahier des charges', 'Grille d\'évaluation', 'Planning indicatif'],
      duree: '10 à 15 jours',
    },
    {
      title: 'Suivi pédagogique',
      description: 'Conception de dispositifs de suivi et de pilotage pédagogique : indicateurs, tableaux de bord, rapports.',
      livrables: ['Indicateurs de suivi', 'Tableaux de bord', 'Modèles de rapports'],
      duree: '10 à 15 jours',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Nos services d'ingénierie pédagogique</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Nous concevons des dispositifs de formation complets, du diagnostic des besoins en compétences jusqu'à l'évaluation des acquis.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white rounded border border-[#E2E5EC]">
              <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">{service.title}</h2>
              <p className="text-[#5A6072] mb-4 text-sm">{service.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Livrables</h3>
                <ul className="text-sm text-[#5A6072] list-disc list-inside">
                  {service.livrables.map((livrable) => (
                    <li key={livrable}>{livrable}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-[#5A6072]">
                <span className="font-semibold">Durée indicative :</span> {service.duree}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017] mb-8">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Ce que nous ne faisons pas</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Animation directe de sessions de formation (assurée par les partenaires)</li>
              <li>Mobilisation de formateurs (assurée par les partenaires)</li>
              <li>Gestion des participants (assurée par les partenaires)</li>
              <li>Délivrance de certifications réglementaires (hors périmètre)</li>
            </ul>
          </div>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#D4A017] text-white rounded font-semibold hover:bg-[#B8860B] transition-colors"
          >
            Demander un cadrage pédagogique
          </a>
        </div>
      </section>
    </div>
  );
}
