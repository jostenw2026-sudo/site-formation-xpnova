import type { Metadata } from 'next';
import { alternatesPour } from '@/lib/alternates';
import FormulaireCandidature from '@/components/FormulaireCandidature';
import { URL_SITES } from '@/lib/sites';

// Page Carrières de la division (29/10/2026) : profils recherchés, renvoi vers les offres
// du groupe (portail) et formulaire de candidature → /api/candidature → Odoo.
export const metadata: Metadata = {
  alternates: alternatesPour('/carrieres', 'en'),
  title: "Careers — TRAINING XP-NOVA",
  description: "Join the TRAINING division of XP-NOVA: profiles we look for and open application. Your CV is kept in our applicant database with your consent.",
};

const PROFILS = [
  { titre: "Training engineers and instructional designers", desc: "Needs analysis, design of learning paths and training systems." },
  { titre: "Agrosystem subject-matter experts", desc: "Technical content and competency frameworks for agricultural and agri-business professions." },
  { titre: "Learning material and e-learning designers", desc: "Teaching materials, digital modules, learning tools." },
  { titre: "Competency assessment specialists", desc: "Assessment, certification and learning follow-up systems." },
];

export default function CarrieresPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#8A6300] mb-3">Careers</p>
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Join the TRAINING division</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">{"The TRAINING division designs training systems suited to agrosystem professions. It recruits instructional designers and subject-matter experts as its assignments require."}</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-6">The profiles we look for</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROFILS.map((p) => (
              <div key={p.titre} className="p-6 bg-white rounded border border-[#E2E5EC] border-l-4 border-l-[#D4A017]">
                <h3 className="text-lg font-bold text-[#0D1F5C]">{p.titre}</h3>
                <p className="text-[#5A6072] mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded border border-[#E2E5EC]">
            <p className="font-semibold text-[#0D1F5C] mb-2">XP-NOVA group vacancies</p>
            <p className="text-[#5A6072]">
              Open positions in all divisions are published on{' '}
              <a href={`${URL_SITES.portail}/en/carrieres`} className="font-semibold text-[#0D1F5C] underline">
                the XP-NOVA careers page
              </a>
              . For the TRAINING division, send us an open application below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0D1F5C] mb-4">Apply</h2>
          <p className="text-[#5A6072] mb-8">
            Attach your up-to-date CV and describe your skills and the kind of assignment you are interested in. We acknowledge receipt within 48 working hours.
          </p>
          <FormulaireCandidature lang="en" profils={PROFILS.map((p) => p.titre)} />
        </div>
      </section>
    </div>
  );
}
