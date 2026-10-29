// FAQ de la division Ingénierie de la formation (décision DG du 21/10/2026). Réponses alignées
// sur la doctrine « nous concevons, les organismes de formation animent », les sept services
// publiés et les conditions communes au groupe (dépôt gratuit, premier retour sous 48 h,
// devis en FCFA après ouverture du dossier).

export interface QuestionFaq {
  q: string;
  r: string;
  lien?: { label: string; href: string };
}

export interface ThemeFaq {
  theme: string;
  fonction: string;
  questions: QuestionFaq[];
}

import { URL_SITES } from '@/lib/sites';

export const FAQ: Record<'fr' | 'en', ThemeFaq[]> = {
  fr: [
    {
      theme: 'Ce que nous faisons',
      fonction: 'Le métier d\'ingénierie de la formation, et la frontière avec l\'animation des sessions.',
      questions: [
        {
          q: 'Animez-vous vous-mêmes les formations ?',
          r: "Non. XP-NOVA conçoit les dispositifs de formation : diagnostic des métiers, référentiels de compétences, curricula, contenus pédagogiques, outils d'évaluation, cahiers des charges et suivi. L'animation des sessions, la mobilisation des formateurs et la gestion des participants sont assurées par des organismes de formation, désignés projet par projet, sur la base de nos cahiers des charges.",
          lien: { label: 'Mise en œuvre des formations', href: '/reseau' },
        },
        {
          q: "Qu'est-ce qu'un référentiel de compétences, et pourquoi commencer par là ?",
          r: "C'est le document qui décrit, pour un métier ou un poste, les tâches à accomplir, les compétences requises pour les accomplir et les critères qui permettent de dire qu'elles sont acquises. Tout le reste en découle : le curriculum organise l'acquisition de ces compétences, les contenus les enseignent, l'évaluation les vérifie. Sans référentiel, une formation enseigne des savoirs sans lien démontré avec le travail attendu.",
          lien: { label: 'Notre approche', href: '/approche' },
        },
        {
          q: 'Délivrez-vous des diplômes ou des certifications ?',
          r: "Non. Nous concevons les outils d'évaluation (tests, mises en situation, grilles d'observation) et nous pouvons les aligner sur un cadre existant, mais la passation en session relève de l'organisme qui anime, et la délivrance d'un titre reconnu relève des autorités compétentes. Une évaluation XP-NOVA atteste que l'outil mesure ce qu'il doit mesurer, pas qu'un apprenant est certifié.",
        },
        {
          q: 'Quels secteurs couvrez-vous ?',
          r: "Les métiers de l'agrosystème : production agricole et élevage, transformation agroalimentaire, logistique et conservation, gestion d'exploitation et de coopérative, développement territorial et exploitation d'équipements agro-industriels. Les dispositifs sont conçus pour le Cameroun et l'Afrique centrale, à partir des tâches réellement observées sur le terrain.",
        },
      ],
    },
    {
      theme: "Déroulé d'une mission",
      fonction: 'Comment une conception se déroule, ce que nous vous demandons, ce que vous recevez.',
      questions: [
        {
          q: 'Comment se déroule la conception d\'un dispositif ?',
          r: "En six temps : analyse du besoin et des métiers concernés ; rédaction du référentiel de compétences ; structuration du curriculum (modules, séquences, durées, méthodes) ; production des contenus ; conception des outils d'évaluation ; puis cahier des charges et dispositif de suivi pour le déploiement. Chaque temps donne lieu à un livrable validé avec vous avant de passer au suivant.",
          lien: { label: 'Les sept services', href: '/services' },
        },
        {
          q: 'Peut-on commander un seul service, par exemple uniquement les contenus ?',
          r: "Oui. Les sept services se commandent séparément ou en chaîne. Si vous disposez déjà d'un référentiel ou d'un curriculum, nous travaillons à partir de l'existant ; nous vous dirons si quelque chose doit être repris avant de produire les contenus ou l'évaluation.",
        },
        {
          q: 'Que devons-nous fournir pour que la mission avance ?',
          r: "L'accès au travail réel : rencontrer les personnes qui exercent les métiers visés, voir les postes, les équipements et les documents de qualité en usage, connaître les résultats attendus par la direction ou le bailleur. Plus cet accès est ouvert, plus le dispositif colle à votre réalité. Une partie du travail de rédaction se fait ensuite à distance.",
        },
        {
          q: 'Combien de temps dure une conception ?',
          r: "Les durées indicatives publiées vont de 10 à 15 jours pour un cahier des charges ou un dispositif de suivi à 20 à 40 jours pour un curriculum ou des contenus complets. Une chaîne complète, du diagnostic au cahier des charges, se situe le plus souvent entre deux et quatre mois selon le nombre de métiers couverts et la disponibilité des acteurs de terrain.",
          lien: { label: 'Durées par service', href: '/services' },
        },
      ],
    },
    {
      theme: 'Publics et financement',
      fonction: 'À qui s\'adressent nos dispositifs, et comment ils s\'inscrivent dans un projet ou un programme.',
      questions: [
        {
          q: 'Travaillez-vous avec des coopératives et de petites organisations ?',
          r: "Oui. Les coopératives et groupements de producteurs sont l'un de nos sept publics. Le dispositif est alors dimensionné à l'échelle du groupement : compétences techniques de production, qualité, gouvernance et gestion. Le financement provient souvent d'un programme, d'une collectivité ou d'un partenaire ; nous pouvons concevoir le dispositif pour qu'il réponde à leurs exigences de redevabilité.",
          lien: { label: 'Nos publics', href: '/publics' },
        },
        {
          q: 'Un programme de développement peut-il vous confier la composante formation d\'un projet ?',
          r: "Oui. Nous concevons des dispositifs reproductibles et mesurables (référentiels, curricula, outils, suivi-évaluation) que plusieurs organismes de formation peuvent déployer à grande échelle. Les indicateurs sont définis dès la conception, pour que la remontée des données de session alimente directement vos rapports.",
        },
        {
          q: 'Vous êtes un organisme de formation : que pouvons-nous faire ensemble ?',
          r: "Deux choses. Soit nous concevons pour vous des référentiels, curricula et contenus que vous intégrez à votre offre. Soit vous êtes consulté, projet par projet, pour animer un dispositif que nous avons conçu pour un client, sur la base de notre cahier des charges. Présentez-nous vos domaines, vos formateurs et vos infrastructures via le formulaire de contact.",
          lien: { label: 'Nous écrire', href: '/contact' },
        },
      ],
    },
    {
      theme: 'Délais, devis et livrables',
      fonction: 'Ce que coûte une demande, quand le devis arrive, sous quelle forme vous recevez les livrables.',
      questions: [
        {
          q: 'Combien coûte une première demande ?',
          r: "Rien. Le dépôt d'une demande est gratuit et sans engagement. Vous recevez un premier retour sous 48 h ouvrées. Le devis de mission, en FCFA, n'est établi qu'après ouverture du dossier, une fois le besoin cadré : métiers visés, effectifs, services demandés, lieu et calendrier.",
          lien: { label: 'Déposer une demande', href: '/contact' },
        },
        {
          q: 'De quoi dépend le montant du devis ?',
          r: "Du nombre de métiers et de compétences à couvrir, des services commandés, du volume de contenus à produire et des déplacements nécessaires pour observer le travail réel. Les frais de mission sur site sont indiqués séparément. Le devis détaille chaque livrable, en FCFA, et aucune prestation non prévue n'est facturée sans accord écrit.",
        },
        {
          q: 'Sous quelle forme recevons-nous les livrables ?',
          r: "En fichiers modifiables, remis à chaque étape validée : référentiels et curricula en documents structurés, contenus en supports prêts à l'animation (guides du formateur, supports de l'apprenant, études de cas), outils d'évaluation avec leurs grilles de correction, cahier des charges et tableaux de bord de suivi. Vous en détenez les droits d'usage pour le projet concerné.",
        },
      ],
    },
    {
      theme: 'Contact et autres divisions',
      fonction: 'Comment nous joindre, et quand une autre division XP-NOVA est le bon interlocuteur.',
      questions: [
        {
          q: 'Comment vous joindre le plus simplement ?',
          r: "Par le formulaire de contact, qui garde une trace pour vous et pour nous, ou directement sur WhatsApp au numéro affiché sur chaque page. Dans les deux cas, un ingénieur pédagogique vous répond sous 48 h ouvrées. Nous n'envoyons jamais de message WhatsApp non sollicité : c'est vous qui ouvrez la conversation.",
          lien: { label: 'Contact', href: '/contact' },
        },
        {
          q: 'Quelle différence avec AGROVITA, ODT et Technologie ?',
          r: "AGROVITA accompagne un projet agricole ou agro-industriel de l'idée à la première vente ; ODT conduit des opérations de développement territorial avec les collectivités ; Technologie fait l'ingénierie des équipements. La division FORMATION conçoit les compétences dont ces projets ont besoin, en appui aux trois autres ou seule quand le besoin est purement pédagogique.",
          lien: { label: 'Le portail XP-NOVA', href: URL_SITES.portail },
        },
      ],
    },
  ],
  en: [
    {
      theme: 'What we do',
      fonction: 'The trade of training engineering, and the boundary with session delivery.',
      questions: [
        {
          q: 'Do you deliver the training yourselves?',
          r: 'No. XP-NOVA designs training systems: professions diagnosis, competency frameworks, curricula, educational content, assessment tools, specifications and monitoring. Session delivery, trainer mobilisation and participant management are provided by training organisations, appointed project by project, on the basis of our specifications.',
          lien: { label: 'Training delivery', href: '/en/reseau' },
        },
        {
          q: 'What is a competency framework, and why start there?',
          r: 'It is the document that describes, for a profession or a position, the tasks to perform, the skills required to perform them and the criteria that show they have been acquired. Everything else follows: the curriculum organises the acquisition of those skills, the content teaches them, the assessment verifies them. Without a framework, a course teaches knowledge with no demonstrated link to the expected work.',
          lien: { label: 'Our approach', href: '/en/approche' },
        },
        {
          q: 'Do you issue diplomas or certifications?',
          r: 'No. We design the assessment tools (tests, practical scenarios, observation grids) and can align them with an existing framework, but administering them in session is the delivering organisation\'s role, and issuing a recognised title belongs to the competent authorities. An XP-NOVA assessment attests that the tool measures what it should, not that a learner is certified.',
        },
        {
          q: 'Which sectors do you cover?',
          r: 'Agro-system professions: crop and livestock production, food processing, logistics and storage, farm and cooperative management, territorial development and operation of agro-industrial equipment. Systems are designed for Cameroon and Central Africa, from tasks actually observed in the field.',
        },
      ],
    },
    {
      theme: 'How a mission unfolds',
      fonction: 'How a design proceeds, what we ask of you, what you receive.',
      questions: [
        {
          q: 'How does the design of a training system proceed?',
          r: 'In six steps: analysis of the need and the professions concerned; writing of the competency framework; structuring of the curriculum (modules, sequences, durations, methods); production of content; design of assessment tools; then specifications and a monitoring system for deployment. Each step produces a deliverable validated with you before moving to the next.',
          lien: { label: 'The seven services', href: '/en/services' },
        },
        {
          q: 'Can we order a single service, for instance only the content?',
          r: 'Yes. The seven services can be ordered separately or as a chain. If you already have a framework or a curriculum, we work from the existing material; we will tell you if something needs reworking before producing the content or the assessment.',
        },
        {
          q: 'What must we provide for the mission to progress?',
          r: 'Access to real work: meeting the people who practise the target professions, seeing the workstations, equipment and quality documents in use, knowing the results expected by management or the donor. The more open this access, the closer the system fits your reality. Part of the writing is then done remotely.',
        },
        {
          q: 'How long does a design take?',
          r: 'Published indicative durations range from 10 to 15 days for specifications or a monitoring system to 20 to 40 days for a full curriculum or content set. A complete chain, from diagnosis to specifications, most often takes two to four months depending on the number of professions covered and the availability of field actors.',
          lien: { label: 'Durations by service', href: '/en/services' },
        },
      ],
    },
    {
      theme: 'Audiences and funding',
      fonction: 'Who our systems are for, and how they fit into a project or a programme.',
      questions: [
        {
          q: 'Do you work with cooperatives and small organisations?',
          r: 'Yes. Cooperatives and producer groups are one of our seven audiences. The system is then sized to the group: technical production skills, quality, governance and management. Funding often comes from a programme, a local authority or a partner; we can design the system to meet their accountability requirements.',
          lien: { label: 'Our audiences', href: '/en/publics' },
        },
        {
          q: 'Can a development programme entrust you with the training component of a project?',
          r: 'Yes. We design reproducible and measurable systems (frameworks, curricula, tools, monitoring and evaluation) that several training organisations can deploy at scale. Indicators are defined at design stage, so that session data feeds your reports directly.',
        },
        {
          q: 'You are a training organisation: what can we do together?',
          r: 'Two things. Either we design frameworks, curricula and content for you to integrate into your offer. Or you are consulted, project by project, to deliver a system we designed for a client, on the basis of our specifications. Introduce your domains, trainers and facilities through the contact form.',
          lien: { label: 'Write to us', href: '/en/contact' },
        },
      ],
    },
    {
      theme: 'Lead times, quotes and deliverables',
      fonction: 'What a request costs, when the quote arrives, in what form you receive the deliverables.',
      questions: [
        {
          q: 'What does a first request cost?',
          r: 'Nothing. Submitting a request is free and without commitment. You receive a first reply within 48 working hours. The mission quote, in FCFA, is issued only after the file is opened, once the need is scoped: target professions, headcount, services requested, location and schedule.',
          lien: { label: 'Submit a request', href: '/en/contact' },
        },
        {
          q: 'What does the quote depend on?',
          r: 'On the number of professions and skills to cover, the services ordered, the volume of content to produce and the travel needed to observe real work. Site mission expenses are shown separately. The quote details each deliverable, in FCFA, and no unplanned service is invoiced without written agreement.',
        },
        {
          q: 'In what form do we receive the deliverables?',
          r: 'As editable files, handed over at each validated step: frameworks and curricula as structured documents, content as delivery-ready materials (trainer guides, learner materials, case studies), assessment tools with their marking grids, specifications and monitoring dashboards. You hold the rights of use for the project concerned.',
        },
      ],
    },
    {
      theme: 'Contact and other divisions',
      fonction: 'How to reach us, and when another XP-NOVA division is the right contact.',
      questions: [
        {
          q: 'What is the simplest way to reach you?',
          r: 'Through the contact form, which keeps a record for you and for us, or directly on WhatsApp at the number shown on every page. In both cases, a training engineer replies within 48 working hours. We never send unsolicited WhatsApp messages: you open the conversation.',
          lien: { label: 'Contact', href: '/en/contact' },
        },
        {
          q: 'How do you differ from AGROVITA, ODT and Technology?',
          r: 'AGROVITA supports an agricultural or agro-industrial project from idea to first sale; ODT leads territorial development operations with local authorities; Technology does equipment engineering. The TRAINING division designs the skills those projects need, in support of the other three or alone when the need is purely educational.',
          lien: { label: 'The XP-NOVA portal', href: URL_SITES.portail },
        },
      ],
    },
  ],
};
