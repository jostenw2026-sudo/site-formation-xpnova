// Chapeaux pédagogiques de chaque page (décision DG du 21/10/2026 : un texte introductif
// par page, et un schéma quand il aide à comprendre). Textes seulement : les schémas sont
// dans src/components/Schemas.tsx.

export type CleIntro =
  | 'accueil'
  | 'services'
  | 'publics'
  | 'approche'
  | 'reseau'
  | 'references'
  | 'aPropos'
  | 'contact';

export interface Intro {
  titre: string;
  texte: string;
  points: string[];
}

export const INTROS: Record<'fr' | 'en', Record<CleIntro, Intro>> = {
  fr: {
    accueil: {
      titre: 'Ce que vous trouverez sur ce site',
      texte:
        "La division Ingénierie de la formation répond à une question simple : quelles compétences votre projet exige-t-il, et comment les faire acquérir de façon vérifiable ? Elle y répond en concepteur : référentiels, curricula, contenus et outils d'évaluation. Les sessions elles-mêmes sont animées par des organismes de formation, sur la base de nos cahiers des charges.",
      points: [
        '7 services, du diagnostic des métiers au suivi pédagogique des formations déployées.',
        '7 publics, des promoteurs et coopératives aux programmes de développement et organismes de formation.',
        "Un ancrage agricole et agro-industriel : les dispositifs partent des tâches réelles observées au Cameroun et en Afrique centrale.",
      ],
    },
    services: {
      titre: 'Comment lire cette page',
      texte:
        "Les sept services s'enchaînent comme les étapes d'une ingénierie de formation complète : on diagnostique les métiers, on fixe les compétences dans un référentiel, on organise les apprentissages en curriculum, on produit les contenus, on conçoit l'évaluation, puis on cadre et on suit le déploiement. Chacun se commande aussi séparément.",
      points: [
        "« Livrables » dit ce que vous recevez ; « Périmètre d'intervention » rappelle où s'arrête XP-NOVA et où commence l'organisme qui anime.",
        'Les durées indicatives sont des durées de conception, hors sessions de formation.',
        "Le devis, en FCFA, n'est établi qu'après un premier échange de cadrage, gratuit et sans engagement.",
      ],
    },
    publics: {
      titre: 'Comment lire cette page',
      texte:
        "Un même service ne se conçoit pas de la même façon pour une coopérative cacaoyère, une unité de transformation ou un programme national de renforcement de capacités. Cette page décrit, public par public, le besoin type que nous rencontrons et la réponse d'ingénierie que nous y apportons.",
      points: [
        "« Besoin spécifique » décrit la situation de départ ; « Accompagnement XP-NOVA » ce que nous concevons pour y répondre.",
        'Les organismes de formation sont aussi un public : nous concevons des référentiels et contenus qu\'ils intègrent à leur offre.',
        'Vous ne vous reconnaissez dans aucun des sept ? Décrivez votre situation dans le formulaire : le cadrage le dira.',
      ],
    },
    approche: {
      titre: 'Comment lire cette page',
      texte:
        "Nous ne partons jamais d'un catalogue de modules, mais du travail réel : les tâches qu'un opérateur, un technicien ou un gestionnaire accomplit, les équipements qu'il manipule, les normes qu'il doit respecter et les résultats qu'on attend de lui. Le dispositif de formation en découle, et il doit être mesurable.",
      points: [
        "Les cinq étapes vont de l'observation du travail à l'architecture du dispositif ; les quatre premières produisent le référentiel, la cinquième le curriculum.",
        "Cette méthode rend les compétences évaluables : chaque objectif renvoie à une tâche observable, pas à un savoir abstrait.",
        "Elle s'applique à tous les maillons de l'agrosystème : production, transformation, logistique, gestion.",
      ],
    },
    reseau: {
      titre: 'Comment lire cette page',
      texte:
        "Concevoir et animer sont deux métiers. XP-NOVA conçoit ; des organismes de formation animent, sur la base d'un cahier des charges qui fixe les objectifs pédagogiques, les profils de formateurs, les infrastructures et les modalités d'évaluation. Cette page décrit cette répartition des rôles et ce que nos cahiers des charges imposent.",
      points: [
        "Aucun partenariat n'est publié : les organismes sont désignés projet par projet, selon le domaine, le lieu et le public.",
        'Le cahier des charges est le livrable qui relie la conception à la mise en œuvre ; il sert aussi à sélectionner les organismes.',
        'Organisme de formation : présentez-vous via le formulaire ; nous vous consulterons sur les projets qui s\'y prêtent.',
      ],
    },
    references: {
      titre: 'Ce que vous trouverez ici',
      texte:
        "Nous ne publions une référence que lorsque le rôle exact de XP-NOVA, le client, le lieu et la période sont documentés. Une référence sans ces quatre éléments n'en est pas une ; aucune n'est publiée à ce jour.",
      points: [
        "Chaque référence précisera le service rendu et le livrable remis : référentiel, curriculum, contenus ou outils d'évaluation.",
        "Les résultats des apprenants relèvent des organismes qui animent ; nous ne nous les attribuons pas.",
        'Les réalisations des autres divisions sont publiées sur leurs sites respectifs.',
      ],
    },
    aPropos: {
      titre: 'Ce que vous trouverez ici',
      texte:
        "Cette page explique qui nous sommes, ce que nous faisons et, surtout, ce que nous ne faisons pas. Notre valeur tient à cette frontière : nous concevons des dispositifs de formation, nous n'animons pas de sessions et nous ne délivrons pas de certifications.",
      points: [
        "Une division du bureau d'ingénierie conseil XP-NOVA, aux côtés d'AGROVITA, ODT et Technologie.",
        'Une ingénierie fondée sur le travail réel : tâches, équipements, normes, résultats attendus.',
        "Un ancrage camerounais : les métiers, les filières et les contraintes locales sont dans chaque dispositif.",
      ],
    },
    contact: {
      titre: 'Comment se passe une demande',
      texte:
        "Le dépôt d'une demande est gratuit et sans engagement. Décrivez votre organisation, le public à former et le besoin ; un ingénieur pédagogique vous répond sous 48 h ouvrées pour cadrer la mission. Le devis, en FCFA, ne vient qu'après ce premier échange.",
      points: [
        'Plus votre description est concrète (métiers visés, effectifs, lieu, calendrier, financement), plus la première réponse est utile.',
        'Vous pouvez aussi écrire directement sur WhatsApp ; le formulaire garde une trace pour vous et pour nous.',
        "Organisme de formation : indiquez-le dans le type de besoin, nous vous répondrons sur les projets qui s'y prêtent.",
      ],
    },
  },
  en: {
    accueil: {
      titre: 'What you will find on this site',
      texte:
        'The Training Engineering division answers a simple question: which skills does your project require, and how can they be acquired in a verifiable way? It answers as a designer: competency frameworks, curricula, content and assessment tools. The sessions themselves are delivered by training organisations, on the basis of our specifications.',
      points: [
        '7 services, from professions diagnosis to pedagogical monitoring of the training deployed.',
        '7 audiences, from promoters and cooperatives to development programmes and training organisations.',
        'An agricultural and agro-industrial focus: systems start from real tasks observed in Cameroon and Central Africa.',
      ],
    },
    services: {
      titre: 'How to read this page',
      texte:
        'The seven services follow one another like the steps of a complete training engineering: diagnose the professions, set the skills in a framework, organise learning into a curriculum, produce the content, design the assessment, then frame and monitor delivery. Each can also be ordered separately.',
      points: [
        '"Deliverables" says what you receive; "Scope of intervention" recalls where XP-NOVA stops and where the delivering organisation begins.',
        'Indicative durations are design durations, excluding training sessions.',
        'The quote, in FCFA, is issued only after a first scoping exchange, free and without commitment.',
      ],
    },
    publics: {
      titre: 'How to read this page',
      texte:
        'The same service is not designed the same way for a cocoa cooperative, a processing unit or a national capacity-building programme. This page describes, audience by audience, the typical need we meet and the engineering answer we bring.',
      points: [
        '"Specific need" describes the starting situation; "XP-NOVA support" what we design in response.',
        'Training organisations are an audience too: we design frameworks and content they integrate into their offer.',
        'None of the seven fits you? Describe your situation in the form: the scoping exchange will tell.',
      ],
    },
    approche: {
      titre: 'How to read this page',
      texte:
        'We never start from a catalogue of modules, but from real work: the tasks an operator, a technician or a manager performs, the equipment they handle, the standards they must meet and the results expected of them. The training system follows from this, and it must be measurable.',
      points: [
        'The five steps go from observing work to the architecture of the system; the first four produce the framework, the fifth the curriculum.',
        'This method makes skills assessable: each objective refers to an observable task, not to abstract knowledge.',
        'It applies to every link of the agro-system: production, processing, logistics, management.',
      ],
    },
    reseau: {
      titre: 'How to read this page',
      texte:
        'Designing and delivering are two different trades. XP-NOVA designs; training organisations deliver, on the basis of specifications that set the learning objectives, trainer profiles, infrastructure and assessment methods. This page describes this division of roles and what our specifications require.',
      points: [
        'No partnership is published: organisations are appointed project by project, according to domain, location and audience.',
        'The specifications are the deliverable that links design to delivery; they also serve to select organisations.',
        'Training organisation: introduce yourself through the form; we will consult you on suitable projects.',
      ],
    },
    references: {
      titre: 'What you will find here',
      texte:
        "We publish a reference only when XP-NOVA's exact role, the client, the location and the period are documented. A reference without these four elements is not one; none is published to date.",
      points: [
        'Each reference will state the service delivered and the deliverable handed over: framework, curriculum, content or assessment tools.',
        'Learners\' results belong to the organisations that deliver; we do not claim them.',
        'The other divisions publish their achievements on their own sites.',
      ],
    },
    aPropos: {
      titre: 'What you will find here',
      texte:
        'This page explains who we are, what we do and, above all, what we do not do. Our value lies in that boundary: we design training systems, we do not deliver sessions and we do not issue certifications.',
      points: [
        'A division of the XP-NOVA engineering consultancy, alongside AGROVITA, ODT and Technology.',
        'An engineering grounded in real work: tasks, equipment, standards, expected results.',
        'Rooted in Cameroon: local professions, value chains and constraints are in every system.',
      ],
    },
    contact: {
      titre: 'How a request works',
      texte:
        'Submitting a request is free and without commitment. Describe your organisation, the audience to be trained and the need; a training engineer replies within 48 working hours to scope the mission. The quote, in FCFA, comes only after this first exchange.',
      points: [
        'The more concrete your description (target professions, headcount, location, schedule, funding), the more useful the first reply.',
        'You can also write directly on WhatsApp; the form keeps a record for you and for us.',
        'Training organisation: say so in the type of need, we will reply about suitable projects.',
      ],
    },
  },
};
