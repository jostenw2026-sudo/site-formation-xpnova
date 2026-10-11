export default function AProposPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0D1F5C] mb-6">À propos de la division Ingénierie de la formation</h1>
          <p className="text-lg text-[#5A6072] max-w-3xl">
            La division Ingénierie de la formation de XP-NOVA conçoit des dispositifs de formation professionnelle adaptés aux réalités des métiers de l'agrosystème.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F5F8]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Notre positionnement</h2>
            <p className="text-[#5A6072]">
              XP-NOVA conçoit les dispositifs de formation (référentiels, curricula, contenus, évaluations). L'animation des sessions, la mobilisation des formateurs et la gestion des participants sont assurées par des organismes de formation partenaires selon nos spécifications.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Notre approche</h2>
            <p className="text-[#5A6072]">
              Notre approche pédagogique se fonde sur l'analyse des tâches de travail réelles, des équipements utilisés, des normes de qualité et des résultats attendus. Nous concevons des dispositifs mesurables et adaptés au contexte local.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Nos compétences</h2>
            <p className="text-[#5A6072]">
              Nos ingénieurs pédagogiques couvrent l'ensemble des domaines : diagnostic métiers, référentiels, curricula, contenus, évaluation et suivi pédagogique.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Nos partenaires</h2>
            <p className="text-[#5A6072]">
              Nous travaillons avec des organismes de formation partenaires sélectionnés pour leurs compétences, leurs infrastructures et leur expérience. Ces partenaires animent les sessions selon nos spécifications.
            </p>
          </div>

          <div className="p-6 bg-white rounded border border-[#E2E5EC]">
            <h2 className="text-xl font-bold text-[#0D1F5C] mb-3">Nos limites</h2>
            <p className="text-[#5A6072]">
              Nous n'animons pas directement les sessions de formation, ne mobilisons pas les formateurs, ne gérons pas les participants et ne délivrons pas de certifications réglementaires. Une vérification technique n'est pas une certification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
