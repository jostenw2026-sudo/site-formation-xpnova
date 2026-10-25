import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { metadonneesPage } from '@/lib/metadonnees';
import { FilAriane } from '@/components/JsonLd';

export const generateMetadata = metadonneesPage('/publics', 'fr', {
  title: 'Nos publics cibles — Ingénierie de la formation XP-NOVA',
  description: 'Promoteurs, coopératives, entreprises agro-industrielles, collectivités, programmes, organismes de formation et partenaires : le besoin type de chaque public.',
});

export default function PublicsPage() {
  const publics = [
    {
      title: 'Promoteurs',
      description:
        'Porteurs de projets agro-systémiques nécessitant des compétences pour leurs équipes.',
      besoin:
        "Préparer les équipes à exploiter un nouvel équipement, une nouvelle activité ou à structurer la gestion de l'exploitation.",
      accompagnement:
        "XP-NOVA conçoit des parcours de montée en compétences ciblés (exploitation, gestion, qualité), déployés par des organismes partenaires.",
      cta: 'Demander un cadrage pour vos équipes',
    },
    {
      title: 'Coopératives',
      description:
        'Groupements de producteurs nécessitant des formations techniques et organisationnelles.',
      besoin:
        "Renforcer les compétences techniques de production et la gouvernance interne des coopératives pour améliorer qualité et revenus.",
      accompagnement:
        "XP-NOVA conçoit des référentiels et dispositifs adaptés au contexte coopératif (techniques, qualité, organisation), animés par des partenaires.",
      cta: 'Cadrer un dispositif pour votre coopérative',
    },
    {
      title: 'Entreprises agro-industrielles',
      description:
        'Unités de transformation nécessitant des compétences pour leurs opérateurs et techniciens.',
      besoin:
        "Qualifier les opérateurs et techniciens sur les processus industriels, l'hygiène, la sécurité et le respect des normes.",
      accompagnement:
        "XP-NOVA conçoit des curricula et supports sur-mesure (process, hygiène/sécurité, qualité) pour les équipes, déployés par des partenaires de formation.",
      cta: 'Demander un parcours pour vos opérateurs',
    },
    {
      title: 'Collectivités',
      description:
        'Communes, départements et régions développant des projets territoriaux.',
      besoin:
        "Monter en compétence les acteurs locaux et les filières dans le cadre de projets de développement territorial.",
      accompagnement:
        "XP-NOVA conçoit des dispositifs de renforcement de capacités et de structuration de filières, animés par des organismes partenaires.",
      cta: 'Cadrer un dispositif territorial',
    },
    {
      title: 'Programmes',
      description:
        'Programmes de développement finançant des projets de renforcement de capacités.',
      besoin:
        "Déployer des dispositifs de formation à grande échelle, reproductibles et mesurables, alignés sur les objectifs du programme.",
      accompagnement:
        "XP-NOVA conçoit des dispositifs massifiables (curricula, outils, suivi-évaluation) déployés par des organismes partenaires.",
      cta: 'Concevoir un dispositif à grande échelle',
    },
    {
      title: 'Organismes de formation',
      description:
        'Centres de formation professionnelle souhaitant enrichir leur offre.',
      besoin:
        "Enrichir une offre de formation avec des contenus et référentiels adaptés aux besoins réels du marché de l'agrosystème.",
      accompagnement:
        "XP-NOVA conçoit référentiels, curricula et supports que les organismes partenaires intègrent à leurs dispositifs d'animation.",
      cta: 'Enrichir votre offre de formation',
    },
    {
      title: 'Partenaires',
      description:
        'Institutions, bailleurs et ONG finançant des projets de renforcement de capacités.',
      besoin:
        "Disposer de dispositifs pédagogiques alignés sur les objectifs, avec redevabilité et suivi-évaluation documentés.",
      accompagnement:
        "XP-NOVA conçoit des dispositifs traçables (référentiels, indicateurs, rapports) dont l'animation revient aux organismes partenaires.",
      cta: 'Cadrer un dispositif de qualité',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FilAriane langue="fr" cheminFr="/publics" nom="Nos publics cibles" />
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Nos publics cibles</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Nos dispositifs de formation sont conçus pour répondre aux besoins de divers acteurs de l'agrosystème : nous les concevons, les organismes partenaires les animent.
          </p>
          <IntroPage cle="publics" lang="fr" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Sept publics, sept besoins types" texte="Pour chaque public : la situation de départ que nous rencontrons le plus souvent et le dispositif que nous concevons pour y répondre." />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {publics.map((publicCible) => (
            <div key={publicCible.title} className="p-6 bg-white rounded border border-[#E2E5EC] flex flex-col">
              <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">{publicCible.title}</h2>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Besoin spécifique</h3>
                <p className="text-[#5A6072] text-sm">{publicCible.besoin}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#0D1F5C] mb-2">Accompagnement XP-NOVA</h3>
                <p className="text-[#5A6072] text-sm">{publicCible.accompagnement}</p>
              </div>
              <a
                href="/contact"
                className="inline-block mt-auto px-4 py-2 bg-[#D4A017] text-[#0D1F5C] rounded text-sm font-semibold hover:bg-[#E9C25A] transition-colors"
              >
                {publicCible.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
