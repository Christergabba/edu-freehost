# Fra AI-idé til læringsverktøy

Publiser små læringsverktøy gratis med **GitHub og Cloudflare Pages**. En praktisk guide for lærere, skrevet på norsk bokmål. Du gjør alt i nettleseren, uten installasjon eller terminal.

## Start her

**[Les hele guiden →](docs/cloudflare-guide.md)**

Guiden tar deg fra konto og kode til en nettadresse du kan dele med elevene. Du får en ferdig mattequiz, en kopierbar AI-prompt og hjelp med vanlige feil.

| Fil | Innhold |
| --- | --- |
| [docs/cloudflare-guide.md](docs/cloudflare-guide.md) | Hele veiledningen, steg for steg |
| [public/index.html](public/index.html) | Fungerende mattequiz med ti oppgaver |

## Ferdig utgangspunkt

Velg **Use this template → Create a new repository** øverst på GitHub for å få din egen kopi med eksempelappen inkludert. Følg deretter [publiseringssteget](docs/cloudflare-guide.md#steg-5). Hvis knappen mangler, kan eieren aktivere **Settings → General → Template repository**. Se også [template-alternativet i guiden](docs/cloudflare-guide.md#template).

## Innstillinger i Cloudflare Pages

| Felt | Verdi |
| --- | --- |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `public` |
| Production branch | `main` (eller din standardbranch) |
| Root directory | La feltet stå tomt |

Bruk Pages sin innebygde GitHub-integrasjon. Ingen GitHub Actions, pakkeinstallasjon eller database er nødvendig. Quizen kjører i elevens nettleser og lagrer ikke svar.

> Ikke legg elevopplysninger, API-nøkler eller passord i koden. Test alltid verktøyet før du deler det.
