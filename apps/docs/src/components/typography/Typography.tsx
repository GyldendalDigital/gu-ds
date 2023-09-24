import type { FunctionComponent } from "react";
import { TypographyTable } from "./TypographyTable";
import * as styles from "./typography.module.css";

interface Props {}

export const Typography: FunctionComponent<Props> = () => {
  return (
    <div className={`${styles.typography}`}>
      <h2 className="heading-x">General</h2>
      <p>
        Definere noen generelle regler, for eksempel: Linjehøyde 150% i
        mengetekst, linjehøyde 120% i titler og detaljer. SemiBold til
        overskrifter, ikke Bold. Medium på CTA.
      </p>

      <h2>Fonts</h2>
      <p>
        Fonts Vi bruker fontfamilien Inter i vektene regular (400), medium (500)
        og semibold (600), og tilsvarende vekter i italic.
      </p>

      <h2>Headings</h2>
      <p>Headings Text styles som brukes til overskrifter på ulike nivåer.</p>
      <TypographyTable filter={(item) => item.path[0] === "heading"} />

      <h2>Content</h2>
      <p>Text styles som brukes til mengdetekst og innholdselementer.</p>
      <TypographyTable filter={(item) => item.path[0] === "content"} />
      <h3>Guidelines: Paragraphs & rich text</h3>
      <p>
        Regler for tekstavsnitt og lenker, uthevet tekst og kursiv i løpende
        tekst.
      </p>

      <div>
        <p>
          Tekstavsnitt som dette har en{" "}
          <strong>maksbredde på 36rem (864px)</strong> for å sikre god lesbarhet
          og forhindre at tekstlinjene blir lenger enn ca 75–80 tegn.
        </p>
        <p>
          Tekstavsnitt som dette har en{" "}
          <strong>maksbredde på 36rem (576px)</strong> for å sikre god lesbarhet
          og forhindre at tekstlinjene blir lenger enn ca 75–80 tegn.
        </p>
        <p>
          I løpende tekst vil noen ord eller tekststrenger kunne opptre som{" "}
          <strong>uthevet tekst</strong>, eller satt i <em>kursiv</em>, eller{" "}
          <strong>
            <em>begge deler</em>
          </strong>{" "}
          på én gang. Noen ganger er det også behov for lenker i løpende tekst,
          og de vil se ut <a href="/">som dette</a>. Slik tar vi høyde for alle
          tekstgrep som kan komme via rike tekstfelter i Redaptic.
        </p>
      </div>

      <h2>Action items</h2>
      <p>
        Text styles som brukes til komponenter som knapper, inputfelter, osv.
      </p>

      <TypographyTable filter={(item) => item.path[0] === "action"} />
    </div>
  );
};
