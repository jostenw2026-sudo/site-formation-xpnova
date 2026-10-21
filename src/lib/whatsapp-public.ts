// Canal WhatsApp côté visiteur (volet 1, spécification du 21/10/2026 ; repris de site-technologie-xpnova).
// Distinct de src/lib/whatsapp.ts, qui alerte l'équipe via Green API côté serveur.
//
// Numéro affiché et utilisé dans wa.me : NEXT_PUBLIC_WHATSAPP_NUMERO (chiffres seuls, indicatif
// compris), à défaut le numéro public du groupe (donnees-groupe.json). Changer de numéro = une variable Coolify.

export const NUMERO_WHATSAPP = (process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? "237670034000").replace(/\D/g, "");

export const NUMERO_WHATSAPP_AFFICHE = `+${NUMERO_WHATSAPP.slice(0, 3)} ${NUMERO_WHATSAPP.slice(3, 6)} ${NUMERO_WHATSAPP.slice(6, 9)} ${NUMERO_WHATSAPP.slice(9)}`.trim();

/** Lien wa.me avec message pré-rédigé (le visiteur peut le modifier avant d'envoyer). */
export function lienWhatsapp(message: string): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

// Le premier mot de chaque message est le mot-clé de la division (FORMATION / TRAINING) : le chatbot
// du numéro public le reconnaît et propose directement les besoins de la division.
export const MESSAGES = {
  fr: {
    defaut: "FORMATION — Bonjour XP-NOVA Formation, je souhaite échanger sur un projet de formation.",
    page: (titre: string) => `FORMATION — Bonjour XP-NOVA Formation, je vous écris depuis la page « ${titre} ».`,
    bouton: "Échanger sur WhatsApp",
    boutonCourt: "WhatsApp",
    aria: "Ouvrir une conversation WhatsApp avec XP-NOVA Formation",
    reponse: "Un expert vous répond sous 48 h ouvrées.",
  },
  en: {
    defaut: "TRAINING — Hello XP-NOVA Training, I would like to discuss a training project.",
    page: (titre: string) => `TRAINING — Hello XP-NOVA Training, I am writing from the page "${titre}".`,
    bouton: "Chat on WhatsApp",
    boutonCourt: "WhatsApp",
    aria: "Open a WhatsApp conversation with XP-NOVA Training",
    reponse: "An expert replies within 48 working hours.",
  },
} as const;
