import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaRole } from '@/components/Schemas';
import { metadonneesPage } from '@/lib/metadonnees';
import { FilAriane } from '@/components/JsonLd';

export const generateMetadata = metadonneesPage('/reseau', 'fr', {
  title: 'Mise en œuvre des formations — Ingénierie de la formation XP-NOVA',
  description: 'XP-NOVA conçoit les dispositifs ; les organismes de formation les mettent en œuvre sur la base de nos cahiers des charges. Répartition des rôles, domaines couverts et consultation d\'un organisme.',
});

// Recette du 19/10/2026 (lot 6, CDC-RECETTE-XPNOVA v1.1 §7) : la page affirmait un
// « réseau d'organismes de formation partenaires sélectionnés », des « partenariats
// formalisés par contrats », une « rémunération selon les résultats » et une
// « formation continue des formateurs », sans aucun partenaire documenté. Elle ne
// décrit plus que la répartition des rôles déjà exposée sur le site (accueil,
// services, à propos). Adresse /reseau conservée.
export default function ReseauPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FilAriane langue="fr" cheminFr="/reseau" nom="Mise en œuvre des formations" />
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Mise en œuvre des formations</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            XP-NOVA conçoit les dispositifs de formation : référentiels, curricula, contenus et évaluations.
            Leur mise en œuvre — animation des sessions, mobilisation des formateurs, gestion des
            participants — est assurée par des organismes de formation, sur la base des cahiers des
            charges que nous rédigeons.
          </p>
          <IntroPage cle="reseau" lang="fr">
            <SchemaRole lang="fr" />
          </IntroPage>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="La répartition des rôles" texte="Ce que nos cahiers des charges imposent aux organismes qui animent, les domaines couverts et l'état des partenariats." />
        </div>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Ce que nos cahiers des charges précisent</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Objectifs pédagogiques et profils de formateurs requis</li>
              <li>Infrastructures et équipements nécessaires</li>
              <li>Modalités d&apos;évaluation des acquis</li>
              <li>Respect des spécifications de conception XP-NOVA</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Domaines d&apos;intervention</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Agriculture et élevage</li>
              <li>Transformation agroalimentaire</li>
              <li>Développement territorial</li>
              <li>Technologie agro-systémique</li>
            </ul>
          </div>

          <div className="p-6 bg-white border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Partenariats</h2>
            <p className="text-[#5A6072]">
              Aucun partenariat avec un organisme de formation n&apos;est publié à ce jour. Les
              organismes intervenants sont désignés projet par projet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Rejoindre les organismes consultés" texte="Comment un organisme de formation se fait connaître pour être consulté sur les projets qui correspondent à ses domaines et à ses moyens." />
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Vous êtes un organisme de formation ?</h2>
            <p className="text-[#5A6072] mb-4">
              Présentez-nous vos domaines, vos formateurs et vos infrastructures : nous pourrons vous
              consulter sur les projets qui s&apos;y prêtent.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
