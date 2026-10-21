import type { Metadata } from 'next';
import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaRole } from '@/components/Schemas';
import { alternatesPour } from '@/lib/alternates';

// Miroir anglais de /reseau (« Mise en œuvre des formations ») : même prudence que la
// page française depuis la recette du 19/10/2026 — aucun partenaire, contrat ni réseau
// affirmé ; seule la répartition des rôles est décrite.

export const metadata: Metadata = {
  alternates: alternatesPour('/reseau', 'en'),
  title: 'Training delivery — Training Engineering XP-NOVA',
  description: 'XP-NOVA designs training systems; training organisations deliver them on the basis of our specifications. Division of roles, areas covered and how a training organisation can be consulted.',
};

export default function ReseauPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Training delivery</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            XP-NOVA designs training systems: competency frameworks, curricula, content and assessments.
            Their delivery — running the sessions, mobilising trainers, managing participants — is
            carried out by training organisations, on the basis of the specifications we draft.
          </p>
          <IntroPage cle="reseau" lang="en">
            <SchemaRole lang="en" />
          </IntroPage>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="The division of roles" texte="What our specifications require of the organisations that deliver, the areas covered and the status of partnerships." />
        </div>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">What our specifications set out</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Learning objectives and required trainer profiles</li>
              <li>Necessary infrastructure and equipment</li>
              <li>Methods for assessing learning outcomes</li>
              <li>Compliance with XP-NOVA design specifications</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Areas of intervention</h2>
            <ul className="text-[#5A6072] list-disc list-inside">
              <li>Agriculture and livestock</li>
              <li>Agri-food processing</li>
              <li>Territorial development</li>
              <li>Agro-systemic technology</li>
            </ul>
          </div>

          <div className="p-6 bg-white border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Partnerships</h2>
            <p className="text-[#5A6072]">
              No partnership with a training organisation has been published to date. The
              organisations involved are appointed project by project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Joining the organisations we consult" texte="How a training organisation can make itself known in order to be consulted on projects that match its areas and resources." />
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Are you a training organisation?</h2>
            <p className="text-[#5A6072] mb-4">
              Tell us about your areas, your trainers and your infrastructure: we will then be able to
              consult you on suitable projects.
            </p>
            <a
              href="/en/contact"
              className="inline-block px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors"
            >
              Write to us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
