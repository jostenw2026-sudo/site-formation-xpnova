import { ImageResponse } from "next/og";
import G from "@/content/donnees-groupe.json";
import { HOTE_PRODUCTION } from "@/lib/indexation";
import { IMAGE_PARTAGE, NOM_DIVISION } from "@/lib/metadonnees";

// Image de partage (Open Graph) du site, en PNG — modèle du portail
// (portail-xp-nova/src/app/opengraph-image.tsx). Facebook, LinkedIn et WhatsApp
// ignorent les images Open Graph en SVG.
// Charte du site : fond « formation profond » #6B2A0A et filet or #D4A017 du héros
// de l'accueil, or clair #E9C25A pour le texte sur fond foncé (src/app/globals.css).
// Police : celle fournie avec next/og (les polices du site sont en woff2, format que
// le moteur de rendu ne lit pas).

const SIGNATURE = { fr: G.groupe.signature, en: "From idea to impact." } as const;

export function imagePartage(langue: "fr" | "en") {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#6B2A0A",
          borderBottom: "14px solid #D4A017",
          color: "#FFFFFF",
          padding: "64px 72px 52px",
        }}
      >
        <div style={{ display: "flex", height: 8, width: 160, background: "#D4A017" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: 6, color: "#E9C25A" }}>{G.groupe.nom}</div>
          <div style={{ marginTop: 18, fontSize: 96, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            {NOM_DIVISION[langue]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          <span style={{ color: "#E9C25A" }}>{SIGNATURE[langue]}</span>
          <span>{HOTE_PRODUCTION}</span>
        </div>
      </div>
    ),
    { ...IMAGE_PARTAGE.taille },
  );
}
