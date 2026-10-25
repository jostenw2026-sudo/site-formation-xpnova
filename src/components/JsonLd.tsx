import G from "@/content/donnees-groupe.json";
import { URL_PRODUCTION } from "@/lib/indexation";
import { cheminAnglais, urlAbsolue } from "@/lib/alternates";
import { NOM_DIVISION } from "@/lib/metadonnees";

// Données structurées schema.org (JSON-LD), sur le modèle du portail
// (portail-xp-nova/src/components/JsonLd.tsx). URL absolues sur l'hôte de production,
// comme les canonical (src/lib/alternates.ts), quel que soit l'hôte servi.
// Pas de balisage Course ni Service : aucune session, durée, lieu ni prix publiés.

type Langue = "fr" | "en";

/** Identifiant de l'organisation du groupe, déclaré par le portail xp-nova.com. */
const ID_GROUPE = "https://xp-nova.com/#organisation";
// Fiche Google Business Profile de XP-NOVA (lien public communiqué par la direction le
// 25/10/2026), portée par l'organisation du groupe que référence parentOrganization.
const FICHE_GOOGLE = "https://maps.app.goo.gl/xaTfVMgpvk4sHu5W9";
const ID_DIVISION = `${URL_PRODUCTION}/#organisation`;

/** JSON pour un <script> : « < » échappé en \u003c (guide JSON-LD de Next). */
export function serialiserJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiserJsonLd(data) }} />;
}

/**
 * La division Formation, rattachée à l'organisation du groupe. Nom, adresse,
 * téléphone et courriel : src/content/donnees-groupe.json, dans la langue de la
 * page (comme le pied de page). Description : celle du layout de la langue.
 */
export function organisationLd(langue: Langue, description: string) {
  const en = langue === "en";
  const adresse = en ? G.coordonnees.adresseEn : G.coordonnees.adresse;
  // « 134, Rue 1813, Vallée Bastos — B.P. 5603, Nlongkak, Yaoundé, Cameroun »
  const [rue, boitePostale] = adresse.split(" — ");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ID_DIVISION,
    name: `${NOM_DIVISION[langue]} — ${G.groupe.nom}`,
    url: URL_PRODUCTION,
    logo: `${URL_PRODUCTION}/brand/logo_xpnova_color.png`,
    description,
    email: G.coordonnees.courriel,
    telephone: G.coordonnees.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: rue,
      postOfficeBoxNumber: boitePostale.split(",")[0],
      addressLocality: G.groupe.ville,
      addressCountry: "CM",
    },
    areaServed: en ? ["Cameroon", "Central Africa"] : ["Cameroun", "Afrique centrale"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: G.coordonnees.courriel,
      telephone: G.coordonnees.telephone,
      availableLanguage: ["fr", "en"],
    },
    parentOrganization: {
      "@type": "Organization",
      "@id": ID_GROUPE,
      name: G.groupe.nom,
      url: "https://xp-nova.com",
      sameAs: [FICHE_GOOGLE],
    },
  };
}

/**
 * Fil d'Ariane d'une page intérieure (Accueil → page), désignée par son chemin
 * FRANÇAIS ; `nom` = le H1 de la page.
 */
export function FilAriane({ langue, cheminFr, nom }: { langue: Langue; cheminFr: string; nom: string }) {
  const en = langue === "en";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: en ? "Home" : "Accueil", item: urlAbsolue(en ? "/en" : "/") },
          { "@type": "ListItem", position: 2, name: nom, item: urlAbsolue(en ? cheminAnglais(cheminFr) : cheminFr) },
        ],
      }}
    />
  );
}
