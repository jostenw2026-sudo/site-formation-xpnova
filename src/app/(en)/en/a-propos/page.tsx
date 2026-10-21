import type { Metadata } from 'next';
import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { alternatesPour } from '@/lib/alternates';

export const metadata: Metadata = {
  alternates: alternatesPour('/a-propos', 'en'),
  title: 'About the Training Engineering division — XP-NOVA',
  description: "XP-NOVA's Training Engineering division designs vocational training systems suited to agro-system professions: positioning, approach, expertise, delivery and limits.",
};

export default function AProposPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">About the Training Engineering division</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            XP-NOVA&apos;s Training Engineering division designs vocational training systems suited to the realities of agro-system professions.
          </p>
          <IntroPage cle="aPropos" lang="en" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="The division in five points" texte="Positioning, approach, expertise, delivery and limits: enough to judge whether we are the right partner for your need." />
        </div>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our positioning</h2>
            <p className="text-[#5A6072]">
              XP-NOVA designs training systems (competency frameworks, curricula, content, assessments). Running the sessions, mobilising trainers and managing participants are handled by partner training organisations according to our specifications.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our approach</h2>
            <p className="text-[#5A6072]">
              Our pedagogical approach is based on the analysis of real work tasks, the equipment used, quality standards and expected results. We design measurable systems adapted to the local context.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our expertise</h2>
            <p className="text-[#5A6072]">
              Our training engineers cover every area: professions diagnosis, competency frameworks, curricula, content, assessment and pedagogical monitoring.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Delivery</h2>
            <p className="text-[#5A6072]">
              Training delivery is entrusted to training organisations appointed project by project, which run the sessions according to our specifications. No partnership has been published to date.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Our limits</h2>
            <p className="text-[#5A6072]">
              We do not deliver training sessions directly, mobilise trainers, manage participants or issue regulatory certifications. A technical verification is not a certification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
