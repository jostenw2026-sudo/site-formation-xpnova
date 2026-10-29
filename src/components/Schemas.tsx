// Schémas explicatifs en SVG, aux couleurs de la charte (navy #0D1F5C, or #D4A017).
// Composants serveur, sans dépendance ; chaque schéma est bilingue et lisible sur mobile
// (viewBox 760 de large, hauteur libre). Un texte alternatif résume le schéma.
// Modèle repris du site Technologie (décision DG du 21/10/2026).

type L = 'fr' | 'en';
const NAVY = '#0D1F5C';
const GOLD = '#D4A017';
const GREY = '#5A6072';
const LINE = '#C9CED8';
const TINT = '#F4F5F8';

const Fleche = ({ id }: { id: string }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill={GREY} />
    </marker>
  </defs>
);

function Boite({ x, y, w, h, titre, lignes = [], fort = false, tint = false }: { x: number; y: number; w: number; h: number; titre: string; lignes?: string[]; fort?: boolean; tint?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fort ? GOLD : tint ? TINT : 'white'} fillOpacity={fort ? 0.15 : 1} stroke={fort ? GOLD : LINE} strokeWidth={fort ? 2 : 1.25} />
      <text x={x + 14} y={y + 24} fontSize="13" fontWeight="600" fill={NAVY}>
        {titre}
      </text>
      {lignes.map((l, i) => (
        <text key={l} x={x + 14} y={y + 42 + i * 16} fontSize="11.5" fill={GREY}>
          {l}
        </text>
      ))}
    </g>
  );
}

/** Accueil et Mise en œuvre : XP-NOVA conçoit ; les organismes de formation animent ; le client voit ses équipes compétentes. */
export function SchemaRole({ lang = 'fr' }: { lang?: L }) {
  const t =
    lang === 'en'
      ? { titre: 'XP-NOVA designs; training organisations deliver; you get skilled teams', a: 'XP-NOVA TRAINING', a1: 'Professions diagnosis, frameworks', a2: 'Curricula, content, assessment', b: 'Training organisations', b1: 'Mobilise trainers, run sessions', b2: 'Manage the participants', c: 'You', c1: 'Fund and decide', c2: 'Put skills to work', f1: 'specifications', f2: 'monitoring indicators' }
      : { titre: 'XP-NOVA conçoit ; les organismes de formation animent ; vos équipes montent en compétences', a: 'XP-NOVA FORMATION', a1: 'Diagnostic des métiers, référentiels', a2: 'Curricula, contenus, évaluation', b: 'Organismes de formation', b1: 'Mobilisent les formateurs', b2: 'Animent, gèrent les participants', c: 'Vous', c1: 'Financez et décidez', c2: 'Exploitez les compétences', f1: 'cahier des charges', f2: 'indicateurs de suivi' };
  return (
    <svg viewBox="0 0 760 200" role="img" aria-label={t.titre} className="w-full h-auto" fontFamily="inherit">
      <Fleche id="role-arrow" />
      <text x="16" y="24" fontSize="14" fontWeight="600" fill={NAVY}>
        {t.titre}
      </text>
      <Boite x={16} y={52} w={240} h={80} titre={t.a} lignes={[t.a1, t.a2]} fort />
      <Boite x={304} y={52} w={212} h={80} titre={t.b} lignes={[t.b1, t.b2]} />
      <Boite x={564} y={52} w={180} h={80} titre={t.c} lignes={[t.c1, t.c2]} tint />
      <g fill="none" stroke={GREY} strokeWidth="1.25" markerEnd="url(#role-arrow)">
        <path d="M256 92H304" />
        <path d="M516 92H564" />
      </g>
      <text x="280" y="82" fontSize="10.5" fill={GREY} textAnchor="middle">
        {t.f1}
      </text>
      <path d="M410 132V164H136V132" fill="none" stroke={GREY} strokeWidth="1.25" strokeDasharray="4 3" markerEnd="url(#role-arrow)" />
      <text x="273" y="178" fontSize="10.5" fill={GREY} textAnchor="middle">
        {t.f2}
      </text>
    </svg>
  );
}

/** Services et Approche : le parcours d'ingénierie, du besoin au déploiement. */
export function SchemaParcours({ lang = 'fr' }: { lang?: L }) {
  const t =
    lang === 'en'
      ? { titre: 'From the skills need to the training deployed', s: ['Needs analysis', 'Framework', 'Curriculum', 'Content', 'Assessment', 'Deployment'], d: ['Professions diagnosis', 'Skills, tasks, standards', 'Modules, sequences, durations', 'Materials, guides, cases', 'Tests, observation grids', 'Specifications, monitoring'], j: 'XP-NOVA designs', k: 'organisations deliver' }
      : { titre: 'Du besoin en compétences à la formation déployée', s: ['Analyse du besoin', 'Référentiel', 'Curriculum', 'Contenus', 'Évaluation', 'Déploiement'], d: ['Diagnostic des métiers', 'Compétences, tâches, normes', 'Modules, séquences, durées', 'Supports, guides, cas', "Tests, grilles d'observation", 'Cahier des charges, suivi'], j: 'XP-NOVA conçoit', k: 'les organismes animent' };
  const w = 112;
  const gap = 12;
  return (
    <svg viewBox="0 0 760 190" role="img" aria-label={t.titre} className="w-full h-auto">
      <Fleche id="parc-arrow" />
      <text x="16" y="24" fontSize="14" fontWeight="600" fill={NAVY}>
        {t.titre}
      </text>
      {t.s.map((s, i) => {
        const x = 16 + i * (w + gap);
        const dernier = i === 5;
        return (
          <g key={s}>
            <rect x={x} y={48} width={w} height={34} rx="8" fill={dernier ? 'white' : NAVY} stroke={dernier ? GOLD : NAVY} strokeWidth="1.5" strokeDasharray={dernier ? '4 3' : undefined} />
            <text x={x + w / 2} y={70} fontSize="11.5" fontWeight="600" fill={dernier ? NAVY : 'white'} textAnchor="middle">
              {s}
            </text>
            {i < 5 && <path d={`M${x + w} 65H${x + w + gap}`} stroke={GREY} strokeWidth="1.25" markerEnd="url(#parc-arrow)" />}
            <rect x={x} y={94} width={w} height={44} rx="6" fill={dernier ? TINT : 'white'} stroke={LINE} strokeWidth="1.25" />
            {t.d[i].split(', ').map((l, k) => (
              <text key={l} x={x + w / 2} y={112 + k * 13} fontSize="9.5" fill={GREY} textAnchor="middle">
                {l}
              </text>
            ))}
          </g>
        );
      })}
      <path d="M16 156H636" stroke={GOLD} strokeWidth="2" />
      <text x="326" y="176" fontSize="10.5" fill={NAVY} textAnchor="middle" fontWeight="600">
        {t.j}
      </text>
      <path d="M648 156H744" stroke={GOLD} strokeWidth="2" strokeDasharray="4 3" />
      <text x="696" y="176" fontSize="10.5" fill={GREY} textAnchor="middle">
        {t.k}
      </text>
    </svg>
  );
}

/** Contact : trois étapes d'une demande. */
export function SchemaDemande({ lang = 'fr' }: { lang?: L }) {
  const t =
    lang === 'en'
      ? { titre: 'From your request to the quote', s: [['1. Your request', 'Form or WhatsApp', 'free, no commitment'], ['2. First reply', 'within 48 working hours', 'an engineer scopes the need'], ['3. File opening', 'quote in FCFA', 'then the design starts']] }
      : { titre: 'De votre demande au devis', s: [['1. Votre demande', 'Formulaire ou WhatsApp', 'gratuite, sans engagement'], ['2. Premier retour', 'sous 48 h ouvrées', 'un ingénieur cadre le besoin'], ['3. Ouverture du dossier', 'devis en FCFA', 'puis la conception démarre']] };
  return (
    <svg viewBox="0 0 760 132" role="img" aria-label={t.titre} className="w-full h-auto">
      <Fleche id="dem-arrow" />
      <text x="16" y="24" fontSize="14" fontWeight="600" fill={NAVY}>
        {t.titre}
      </text>
      {t.s.map((s, i) => (
        <g key={s[0]}>
          <Boite x={16 + i * 256} y={44} w={224} h={76} titre={s[0]} lignes={[s[1], s[2]]} fort={i === 1} tint={i !== 1} />
          {i < 2 && <path d={`M${240 + i * 256} 82H${272 + i * 256}`} stroke={GREY} strokeWidth="1.25" markerEnd="url(#dem-arrow)" />}
        </g>
      ))}
    </svg>
  );
}
