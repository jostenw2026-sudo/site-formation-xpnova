'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: '',
    organisation: '',
    public: '',
    filiere: '',
    description: '',
    email: '',
    telephone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre demande. Nous vous répondrons sous 48 h.');
  };

  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">Contactez-nous</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            Notre équipe d'ingénieurs pédagogiques est à votre disposition pour vous accompagner dans la conception de vos dispositifs de formation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Type de besoin *</label>
              <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]">
                <option value="">Sélectionnez...</option>
                <option value="diagnostic">Diagnostic métiers</option>
                <option value="referentiels">Référentiels</option>
                <option value="curriculum">Curriculum et parcours</option>
                <option value="contenus">Contenus et supports</option>
                <option value="evaluation">Évaluation des acquis</option>
                <option value="cahiers">Cahiers des charges</option>
                <option value="suivi">Suivi pédagogique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Organisation / Secteur *</label>
              <input type="text" required value={formData.organisation} onChange={(e) => setFormData({ ...formData, organisation: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]" placeholder="Nom de votre organisation..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Public cible *</label>
              <input type="text" required value={formData.public} onChange={(e) => setFormData({ ...formData, public: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]" placeholder="Ex: promoteurs, coopératives, entreprises..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Filière / Secteur d'activité *</label>
              <input type="text" required value={formData.filiere} onChange={(e) => setFormData({ ...formData, filiere: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]" placeholder="Ex: agriculture, transformation, élevage..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Description du besoin *</label>
              <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]" rows={5} placeholder="Décrivez votre projet et vos besoins en formation..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">E-mail *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]" placeholder="votre@email.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0D1F5C] mb-2">Téléphone *</label>
              <input type="tel" required value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} className="w-full p-3 border border-[#E2E5EC] rounded focus:outline-none focus:border-[#D4A017]" placeholder="+237 ..." />
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-[#D4A017] text-white rounded font-semibold hover:bg-[#B8860B] transition-colors">
              Soumettre ma demande
            </button>
          </form>

          <div className="mt-12 p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Contact direct</h2>
            <p className="text-[#5A6072] mb-2"><strong>E-mail :</strong> hello@xp-nova.com</p>
            <p className="text-[#5A6072] mb-2"><strong>Téléphone :</strong> +237 6700 34 000</p>
            <p className="text-[#5A6072]"><strong>Adresse :</strong> 134, Rue 1813, Vallée Bastos — B.P. 5603, Nlongkak, Yaoundé, Cameroun</p>
          </div>
        </div>
      </section>
    </div>
  );
}
