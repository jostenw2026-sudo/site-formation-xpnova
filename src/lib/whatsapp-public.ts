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

export const MESSAGES = {
  fr: {
    defaut: "Bonjour XP-NOVA Formation, je souhaite échanger sur un projet de dispositif de formation.",
    service: (service: string) => `Bonjour XP-NOVA Formation, je souhaite échanger sur le service « ${service} ».`,
    page: (titre: string) => `Bonjour XP-NOVA Formation, je vous écris depuis la page « ${titre} ».`,
    bouton: "Échanger sur WhatsApp",
    boutonCourt: "WhatsApp",
    aria: "Ouvrir une conversation WhatsApp avec XP-NOVA Formation",
    reponse: "Un ingénieur pédagogique vous répond sous 48 h ouvrées.",
  },
  en: {
    defaut: "Hello XP-NOVA Training, I would like to discuss a training system project.",
    service: (service: string) => `Hello XP-NOVA Training, I would like to discuss the "${service}" service.`,
    page: (titre: string) => `Hello XP-NOVA Training, I am writing from the page "${titre}".`,
    bouton: "Chat on WhatsApp",
    boutonCourt: "WhatsApp",
    aria: "Open a WhatsApp conversation with XP-NOVA Training",
    reponse: "A training engineer replies within 48 working hours.",
  },
} as const;
