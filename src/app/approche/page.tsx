import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaParcours } from '@/components/Schemas';
export default function ApprochePage() {
  const etapes = [
    {
      title: 'Analyse des tâches',
      description: 'Identification des tâches de travail réelles dans les métiers cibles.',
    },
    {
      title: 'Équipements et technologies',
      description: 'Identification des équipements et technologies utilisés sur le terrain.',
    },
    {
      title: 'Normes de qualité',
      description: 'Identification des normes de qualité et des standards applicables.',
    },
    {
      title: 'Résultats attendus',
      description: 'Définition des objectifs de performance et des indicateurs de réussite.',
    },
    {
      title: 'Conception du dispositif',
      description: 'Architecture pédagogique, méthodes, durées, évaluation.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Notre approche pédagogique</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Notre approche pédagogique se fonde sur l'analyse des tâches de travail réelles, des équipements utilisés, des normes de qualité et des résultats attendus.
          </p>
          <IntroPage cle="approche" lang="fr">
            <SchemaParcours lang="fr" />
          </IntroPage>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Partir des tâches de travail réelles" texte="Les cinq étapes de la méthode : les quatre premières observent et décrivent le travail, la cinquième en déduit le dispositif de formation." />
          <div className="space-y-8">
            {etapes.map((etape, index) => (
              <div key={etape.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4A017] text-[#0D1F5C] rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1 p-6 bg-white rounded border border-[#E2E5EC]">
                  <h3 className="text-xl font-bold text-[#0D1F5C] mb-2">{etape.title}</h3>
                  <p className="text-[#5A6072]">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Ce que la méthode garantit" texte="Un dispositif conçu à partir du travail réel se mesure : chaque objectif renvoie à une tâche observable et à un indicateur." />
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Mesurabilité</h2>
            <p className="text-[#5A6072]">
              Nous concevons des dispositifs mesurables, avec des indicateurs d'évaluation et de suivi qui permettent de mesurer l'efficacité de la formation et d'identifier les axes d'amélioration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
