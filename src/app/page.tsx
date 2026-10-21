import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaRole } from '@/components/Schemas';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Héros */}
      <section className="py-20 px-6 bg-[#6B2A0A] text-white border-b-4 border-[#D4A017] sur-fonce">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Concevoir les compétences dont les projets agro-systémiques ont besoin
          </h1>
          <p className="text-lg text-[#E4E8F3] max-w-3xl">
            Nous concevons des dispositifs de formation professionnelle adaptés aux réalités des métiers de l'agrosystème : référentiels, curricula, contenus pédagogiques et outils d'évaluation. Les organismes de formation partenaires animent les sessions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
            >
              Demander un cadrage pédagogique
            </a>
            <a
              href="/services"
              className="px-6 py-3 border-2 border-white/70 text-white rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Chapeau pédagogique */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <IntroPage cle="accueil" lang="fr">
            <SchemaRole lang="fr" />
          </IntroPage>
        </div>
      </section>

      {/* Distinction */}
      <section className="py-8 px-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Notre rôle en une phrase" texte="La frontière qui structure tout le site : XP-NOVA conçoit, les organismes de formation animent." className="mb-4" />
          <p className="text-[#0D1F5C]">
            <strong>Notre rôle :</strong> XP-NOVA conçoit les dispositifs de formation (référentiels, curricula, contenus, évaluations). L'animation des sessions, la mobilisation des formateurs et la gestion des participants sont assurées par des organismes de formation partenaires selon nos spécifications.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="7 services pour des formations professionnelles de qualité" texte="Les étapes d'une ingénierie de formation complète, du diagnostic des besoins en compétences jusqu'au suivi du déploiement ; chacune se commande aussi séparément." />
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
          <TitreSection titre="7 publics pour des formations adaptées" texte="Les acteurs de l'agrosystème pour lesquels nous concevons : repérez votre situation, la page Publics détaille le besoin type et notre réponse." />
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
          <TitreSection clair titre="Votre projet a besoin d'un dispositif de formation ?" texte="Un premier échange de cadrage, gratuit et sans engagement : nos ingénieurs pédagogiques vous répondent sous 48 h ouvrées." className="mb-6 [&>p]:mx-auto" />
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
