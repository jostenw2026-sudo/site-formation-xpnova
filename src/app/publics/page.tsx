export default function PublicsPage() {
  const publics = [
    {
      title: 'Promoteurs',
      description: 'Porteurs de projets agro-systémiques nécessitant des compétences pour leurs équipes.',
      besoins: ['Formation des équipes', 'Renforcement des capacités', 'Formation à la gestion'],
    },
    {
      title: 'Coopératives',
      description: 'Groupements de producteurs nécessitant des formations techniques et organisationnelles.',
      besoins: ['Techniques de production', 'Gestion de la qualité', 'Organisation coopérative'],
    },
    {
      title: 'Entreprises agro-industrielles',
      description: 'Unités de transformation nécessitant des compétences pour leurs opérateurs et techniciens.',
      besoins: ['Processus industriels', 'Hygiène et sécurité', 'Qualité et normes'],
    },
    {
      title: 'Collectivités',
      description: 'Communes, départements et régions développant des projets territoriaux.',
      besoins: ['Formation des acteurs locaux', 'Développement des filières', 'Gestion de projets'],
    },
    {
      title: 'Programmes',
      description: 'Programmes de développement finançant des projets de renforcement de capacités.',
      besoins: ['Dispositifs à grande échelle', 'Reproductibilité', 'Suivi et évaluation'],
    },
    {
      title: 'Organismes de formation',
      description: 'Centres de formation professionnelle souhaitant enrichir leur offre.',
      besoins: ['Enrichissement de l\'offre', 'Qualité des contenus', 'Adaptation au marché'],
    },
    {
      title: 'Partenaires',
      description: 'Institutions, bailleurs et ONG finançant des projets de renforcement de capacités.',
      besoins: ['Alignement sur les objectifs', 'Redevabilité', 'Suivi et évaluation'],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Nos publics cibles</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Nos dispositifs de formation sont conçus pour répondre aux besoins de divers acteurs de l'agrosystème.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {publics.map((publicCible) => (
            <div key={publicCible.title} className="p-6 bg-white rounded border border-[#E2E5EC]">
              <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">{publicCible.title}</h2>
              <p className="text-[#5A6072] mb-4">{publicCible.description}</p>
              <div>
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Besoins typiques</h3>
                <ul className="text-sm text-[#5A6072] list-disc list-inside">
                  {publicCible.besoins.map((besoin) => (
                    <li key={besoin}>{besoin}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
