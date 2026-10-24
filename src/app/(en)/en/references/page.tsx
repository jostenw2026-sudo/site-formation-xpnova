import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { metadonneesPage } from '@/lib/metadonnees';
import { FilAriane } from '@/components/JsonLd';

export const generateMetadata = metadonneesPage('/references', 'en', {
  title: 'Training engineering projects — Training Engineering XP-NOVA',
  description: "XP-NOVA publishes a reference only once it is documented: XP-NOVA's exact role, client, location, period and deliverable. No reference has been published to date.",
});

export default function ReferencesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FilAriane langue="en" cheminFr="/references" nom="Training engineering projects" />
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Training engineering projects</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            References will be published once documented: XP-NOVA&apos;s exact role, client, location and period.
          </p>
          <IntroPage cle="references" lang="en" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Documented assignments" texte="XP-NOVA's exact role, client, location, period and deliverable for each published reference; nothing is displayed before it has been verified." />
          <div className="p-6 bg-white rounded border border-[#E2E5EC] mb-8">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Coming soon</h2>
            <p className="text-[#5A6072]">
              Detailed references will be added after approval by the General Management. Each reference will state XP-NOVA&apos;s exact role (design of the system), the client, the location, the period and the deliverable (competency framework, curriculum, content, assessment tools).
            </p>
          </div>

          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Important note</h2>
            <p className="text-[#5A6072]">
              The references presented here reflect XP-NOVA&apos;s design role. Pedagogical results, learners&apos; success and employment impacts depend on the partner training organisations that deliver the sessions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
