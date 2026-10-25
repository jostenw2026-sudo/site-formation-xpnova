'use client';

import { useState } from 'react';
import { envoyerDemande, type EtatEnvoi } from '@/lib/contact-client';
import { EtatEnvoiPanneau } from '@/components/EtatEnvoi';
import IntroPage from '@/components/IntroPage';
import TitreSection from '@/components/TitreSection';
import { SchemaDemande } from '@/components/Schemas';
import { IconeWhatsApp } from '@/components/BoutonWhatsApp';
import { lienWhatsapp, MESSAGES, NUMERO_WHATSAPP_AFFICHE } from '@/lib/whatsapp-public';

// Formulaire anglais aligné sur le formulaire français (mêmes champs, même route /api/contact),
// ajouté avec le canal WhatsApp (décision DG du 21/10/2026). La page ne portait qu'un bloc
// « Direct contact » jusqu'ici.

const champ = 'w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]';

export default function ContactPageEN() {
  const [formData, setFormData] = useState({
    type: '',
    organisation: '',
    public: '',
    filiere: '',
    description: '',
    email: '',
    telephone: '',
    whatsapp: '',
    canal: '',
  });

  const [etat, setEtat] = useState<EtatEnvoi>({ phase: 'repos' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEtat({ phase: 'envoi' });
    setEtat(await envoyerDemande(formData, 'en'));
  };

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Contact us</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Our team of training engineers is available to support you in the design of your training systems.
          </p>
          <IntroPage cle="contact" lang="en">
            <SchemaDemande lang="en" />
          </IntroPage>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-3xl mx-auto">
          <TitreSection titre="Describe your need" texte="The fields useful for the first reply within 48 hours: your organisation, the audience to train, the value chain and the need. The quote, in FCFA, comes after this first exchange." />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 p-5 bg-white rounded border border-[#E2E5EC] flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-[#5A6072] flex-1">Prefer WhatsApp? Write to us directly, a training engineer replies within 48 working hours.</p>
            <a
              href={lienWhatsapp(MESSAGES['en'].defaut)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded font-semibold hover:bg-[#1ebe5b] transition-colors"
            >
              <IconeWhatsApp />
              Write directly on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Type of need *</label>
              <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className={champ}>
                <option value="">Select...</option>
                <option value="diagnostic">Professions diagnosis</option>
                <option value="referentiels">Competency frameworks</option>
                <option value="curriculum">Curriculum and pathways</option>
                <option value="contenus">Content and materials</option>
                <option value="evaluation">Competency assessment</option>
                <option value="cahiers">Specifications</option>
                <option value="suivi">Pedagogical monitoring</option>
                <option value="autre">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Organisation / Sector *</label>
              <input type="text" required value={formData.organisation} onChange={(e) => setFormData({ ...formData, organisation: e.target.value })} className={champ} placeholder="Name of your organisation..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Target audience *</label>
              <input type="text" required value={formData.public} onChange={(e) => setFormData({ ...formData, public: e.target.value })} className={champ} placeholder="E.g. promoters, cooperatives, companies..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Value chain / Field of activity *</label>
              <input type="text" required value={formData.filiere} onChange={(e) => setFormData({ ...formData, filiere: e.target.value })} className={champ} placeholder="E.g. agriculture, processing, livestock..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Description of the need *</label>
              <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className={champ} rows={5} placeholder="Describe your project and your training needs..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={champ} placeholder="your@email.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Phone *</label>
              <input type="tel" required value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} className={champ} placeholder="+237 ..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">WhatsApp number</label>
              <input type="tel" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} className={champ} placeholder="+237 ..." />
              <p className="mt-1 text-xs text-[#5A6072]">Optional. Leave empty if it is the same as the phone.</p>
            </div>

            <fieldset>
              <legend className="block text-sm font-semibold text-[#0D1F5C] mb-2">Preferred reply channel</legend>
              <div className="flex flex-wrap gap-6 text-sm text-[#0D1F5C]">
                <label className="flex items-center gap-2">
                  <input type="radio" name="canal" value="email" checked={formData.canal !== 'whatsapp'} onChange={() => setFormData({ ...formData, canal: 'email' })} className="h-4 w-4 accent-[#D4A017]" />
                  Email
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="canal" value="whatsapp" checked={formData.canal === 'whatsapp'} onChange={() => setFormData({ ...formData, canal: 'whatsapp' })} className="h-4 w-4 accent-[#D4A017]" />
                  WhatsApp
                </label>
              </div>
              <p className="mt-1 text-xs text-[#5A6072]">We only write to you on WhatsApp if you ask for it here.</p>
            </fieldset>

            <button type="submit" disabled={etat.phase === 'envoi'} className="w-full px-6 py-3 bg-[#D4A017] text-[#0D1F5C] rounded font-semibold hover:bg-[#E9C25A] transition-colors disabled:opacity-60">
              Submit my request
            </button>

            <EtatEnvoiPanneau etat={etat} lang="en" />
          </form>

          <div className="mt-12 p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Direct contact</h2>
            <p className="text-[#5A6072] mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@xp-nova.com" className="text-[#D4A017] hover:underline">
                hello@xp-nova.com
              </a>
            </p>
            <p className="text-[#5A6072] mb-2">
              <strong>Phone:</strong> +237 6700 34 000
            </p>
            <p className="text-[#5A6072] mb-2">
              <strong>WhatsApp:</strong>{' '}
              <a href={lienWhatsapp(MESSAGES['en'].defaut)} target="_blank" rel="noopener noreferrer" className="text-[#0D1F5C] underline">
                {NUMERO_WHATSAPP_AFFICHE}
              </a>
            </p>
            <p className="text-[#5A6072]">
              <strong>Address:</strong> 134, Rue 1813, Vallée Bastos — B.P. 5603, Nlongkak, Yaoundé, Cameroon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
