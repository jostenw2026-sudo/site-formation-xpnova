import type { Metadata } from 'next';
import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaParcours } from '@/components/Schemas';
import { alternatesPour } from '@/lib/alternates';

export const metadata: Metadata = {
  alternates: alternatesPour('/approche', 'en'),
  title: 'Our pedagogical approach — Training Engineering XP-NOVA',
  description: 'A training engineering method grounded in real work: tasks, equipment and technologies, quality standards and expected results, then the design of a measurable training system.',
};

export default function ApprochePage() {
  const etapes = [
    {
      title: 'Task analysis',
      description: 'Identification of the real work tasks in the target professions.',
    },
    {
      title: 'Equipment and technologies',
      description: 'Identification of the equipment and technologies used in the field.',
    },
    {
      title: 'Quality standards',
      description: 'Identification of the applicable quality norms and standards.',
    },
    {
      title: 'Expected results',
      description: 'Definition of performance objectives and success indicators.',
    },
    {
      title: 'System design',
      description: 'Pedagogical architecture, methods, durations, assessment.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Our pedagogical approach</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Our pedagogical approach is based on the analysis of real work tasks, the equipment used, quality standards and expected results.
          </p>
          <IntroPage cle="approche" lang="en">
            <SchemaParcours lang="en" />
          </IntroPage>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <TitreSection titre="Starting from real work tasks" texte="The five steps of the method: the first four observe and describe the work, the fifth derives the training system from it." />
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
          <TitreSection titre="What the method guarantees" texte="A system designed from real work can be measured: each objective refers to an observable task and to an indicator." />
          <div className="p-6 bg-[#F4F5F8] border-l-4 border-[#D4A017]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Measurability</h2>
            <p className="text-[#5A6072]">
              We design measurable systems, with assessment and monitoring indicators that make it possible to measure the effectiveness of the training and to identify areas for improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
