// Canal WhatsApp côté visiteur (décision DG du 21/10/2026 : WhatsApp systématique).
// Distinct de src/lib/whatsapp.ts, qui alerte l'équipe via Green API côté serveur.
//
// Numéro affiché et utilisé dans wa.me : NEXT_PUBLIC_WHATSAPP_NUMERO (chiffres seuls, indicatif
// compris), à défaut le numéro du site. Changer de numéro = une variable Coolify, aucun code.
//
// Règle absolue : aucun envoi automatique vers un prospect. Le visiteur clique lui-même sur
// un lien wa.me dont le message est pré-rédigé et modifiable.

export const NUMERO_WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? "237670034000").replace(/\D/g, "");

export const NUMERO_WHATSAPP_AFFICHE = `+${NUMERO_WHATSAPP.slice(0, 3)} ${NUMERO_WHATSAPP.slice(3, 6)} ${NUMERO_WHATSAPP.slice(6, 9)} ${NUMERO_WHATSAPP.slice(9)}`.trim();

/** Lien wa.me avec message pré-rédigé (le visiteur peut le modifier avant d'envoyer). */
export function lienWhatsapp(message: string): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

// Le premier mot de chaque message est le mot-clé de la division (FORMATION / TRAINING) : le chatbot
// du numéro public le reconnaît et propose directement les besoins de la division (volet 1, 21/10/2026).
export const MESSAGES = {
  fr: {
    defaut: "FORMATION — Bonjour XP-NOVA FORMATION, je souhaite échanger sur un projet de dispositif de formation.",
    service: (service: string) => `FORMATION — Bonjour XP-NOVA FORMATION, je souhaite échanger sur le service « ${service} ».`,
    page: (titre: string) => `FORMATION — Bonjour XP-NOVA FORMATION, je vous écris depuis la page « ${titre} ».`,
    bouton: "Échanger sur WhatsApp",
    boutonCourt: "WhatsApp",
    aria: "Ouvrir une conversation WhatsApp avec XP-NOVA FORMATION",
    reponse: "Un ingénieur pédagogique vous répond sous 48 h ouvrées.",
  },
  en: {
    defaut: "TRAINING — Hello XP-NOVA TRAINING, I would like to discuss a training system project.",
    service: (service: string) => `TRAINING — Hello XP-NOVA TRAINING, I would like to discuss the "${service}" service.`,
    page: (titre: string) => `TRAINING — Hello XP-NOVA TRAINING, I am writing from the page "${titre}".`,
    bouton: "Chat on WhatsApp",
    boutonCourt: "WhatsApp",
    aria: "Open a WhatsApp conversation with XP-NOVA TRAINING",
    reponse: "A training engineer replies within 48 working hours.",
  },
} as const;
