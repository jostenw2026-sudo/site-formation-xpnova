import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { metadonneesPage } from '@/lib/metadonnees';
import { FilAriane } from '@/components/JsonLd';

export const generateMetadata = metadonneesPage('/references', 'fr', {
  title: 'Projets d\'ingénierie pédagogique — Ingénierie de la formation XP-NOVA',
  description: 'XP-NOVA ne publie une référence qu\'une fois documentée : rôle exact de XP-NOVA, client, lieu, période et livrable. Aucune référence n\'est publiée à ce jour.',
});

export default function ReferencesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FilAriane langue="fr" cheminFr="/references" nom="Projets d'ingénierie pédagogique" />
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Projets d'ingénierie pédagogique</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Les références seront publiées une fois documentées : rôle exact de XP-NOVA, client, lieu et période.
          </p>
          <IntroPage cle="references" lang="fr" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Missions documentées" texte="Rôle exact de XP-NOVA, client, lieu, période et livrable pour chaque référence publiée ; rien n'est affiché avant d'être vérifié." />
          <div className="p-6 bg-white rounded border border-[#E2E5EC] mb-8">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">À venir</h2>
            <p className="text-[#5A6072]">
              Les références détaillées seront ajoutées après validation par la Direction générale. Chaque référence mentionnera le rôle exact de XP-NOVA (conception du dispositif), le client, le lieu, la période et le livrable (référentiel, curriculum, contenus, outils d'évaluation).
            </p>
          </div>

          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Note importante</h2>
            <p className="text-[#5A6072]">
              Les références présentées ici reflètent le rôle de conception de XP-NOVA. Les résultats pédagogiques, la réussite des apprenants et les impacts sur l'emploi dépendent des organismes de formation partenaires qui animent les sessions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
