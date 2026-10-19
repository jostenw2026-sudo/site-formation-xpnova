export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Héros */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1F5C] mb-6">
            Concevoir les compétences dont les projets agro-systémiques ont besoin
          </h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Nous concevons des dispositifs de formation professionnelle adaptés aux réalités des métiers de l'agrosystème : référentiels, curricula, contenus pédagogiques et outils d'évaluation. Les organismes de formation partenaires animent les sessions.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
            >
              Demander un cadrage pédagogique
            </a>
            <a
              href="/services"
              className="px-6 py-3 bg-[#0D1F5C] text-white rounded font-semibold hover:bg-[#0A1850] transition-colors"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Distinction */}
      <section className="py-8 px-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#0D1F5C]">
            <strong>Notre rôle :</strong> XP-NOVA conçoit les dispositifs de formation (référentiels, curricula, contenus, évaluations). L'animation des sessions, la mobilisation des formateurs et la gestion des participants sont assurées par des organismes de formation partenaires selon nos spécifications.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-4">7 services pour des formations professionnelles de qualité</h2>
          <p className="text-[#5A6072] mb-8">
            Nous accompagnons la conception de dispositifs de formation complets, du diagnostic des besoins en compétences jusqu'à l'évaluation des acquis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Diagnostic métiers',
                description: 'Analyse des besoins en compétences et cartographie des métiers.',
              },
              {
                title: 'Référentiels',
                description: 'Référentiels de compétences et de métiers adaptés aux réalités locales.',
              },
              {
                title: 'Curricula et parcours',
                description: 'Curricula et parcours pédagogiques structurés : objectifs, modules, durées.',
              },
              {
                title: 'Contenus et supports',
                description: 'Supports pédagogiques, guides pratiques et études de cas contextualisés.',
              },
              {
                title: 'Évaluation des acquis',
                description: "Outils d'évaluation : tests, mises en situation et grilles d'observation.",
              },
              {
                title: 'Cahiers des charges',
                description: 'Cahiers des charges pour organismes de formation partenaires.',
              },
              {
                title: 'Suivi pédagogique',
                description: 'Dispositifs de suivi et de pilotage : indicateurs et tableaux de bord.',
              },
            ].map((service) => (
              <a
                key={service.title}
                href="/services"
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
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-4">7 publics pour des formations adaptées</h2>
          <p className="text-[#5A6072] mb-8">
            Nos dispositifs de formation sont conçus pour répondre aux besoins de divers acteurs de l'agrosystème.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Promoteurs',
                description: 'Porteurs de projets agro-systémiques nécessitant des compétences pour leurs équipes.',
              },
              {
                title: 'Coopératives',
                description: 'Groupements de producteurs nécessitant des formations techniques et organisationnelles.',
              },
              {
                title: 'Entreprises agro-industrielles',
                description: 'Unités de transformation nécessitant des compétences pour leurs opérateurs et techniciens.',
              },
              {
                title: 'Collectivités',
                description: 'Communes, départements et régions développant des projets territoriaux.',
              },
              {
                title: 'Programmes',
                description: 'Programmes de développement finançant des projets de renforcement de capacités.',
              },
              {
                title: 'Organismes de formation',
                description: "Centres de formation professionnelle souhaitant enrichir leur offre.",
              },
              {
                title: 'Partenaires',
                description: 'Institutions, bailleurs et ONG finançant des projets de renforcement de capacités.',
              },
            ].map((publicCible) => (
              <a
                key={publicCible.title}
                href="/publics"
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
          <h2 className="text-2xl font-bold mb-4">Votre projet a besoin d'un dispositif de formation ?</h2>
          <p className="mb-8 text-[#D4A017]">
            Nos ingénieurs pédagogiques vous accompagnent dans la conception de référentiels, curricula et contenus adaptés aux réalités de l'agrosystème.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
          >
            Demander un cadrage pédagogique
          </a>
        </div>
      </section>
    </div>
  );
}
