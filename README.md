# Fra AI-idé til læringsverktøy

Publiser små læringsverktøy gratis med **GitHub og Cloudflare Pages**. En praktisk guide for lærere. Du gjør alt i nettleseren, uten installasjon eller terminal.

## Start her

**[Les hele guiden på GitHub →](docs/cloudflare-guide.md)**

Når du publiserer repositoryet med Cloudflare Pages, blir guiden også forsiden på nettstedet. Derfra kan du åpne mattequizen, kopiere AI-prompten og gå til GitHub-prosjektet. Del `/eksempel.html` med elever som bare skal bruke quizen.

Guiden tar deg fra konto og kode til en nettadresse du kan dele med elevene. Du får en ferdig mattequiz, en kopierbar AI-prompt og hjelp med vanlige feil.

Vil du videre? [Neste steg med Codex eller Claude Code](docs/cloudflare-guide.md#neste-steg) viser hvordan AI kan redigere filene direkte på datamaskinen og håndtere commit og push, i **VS Code eller terminalen**. Dette er et valgfritt tillegg til hovedguiden i nettleseren.

| Fil | Innhold |
| --- | --- |
| [docs/cloudflare-guide.md](docs/cloudflare-guide.md) | Hele veiledningen, steg for steg |
| [public/index.html](public/index.html) | Komplett guide som publisert nettside |
| [public/eksempel.html](public/eksempel.html) | Fungerende mattequiz med ti oppgaver |
| [public/guide.css](public/guide.css) og [public/guide.js](public/guide.js) | Responsivt design og kopieringsknapper |

## Ferdig utgangspunkt

Velg **Use this template → Create a new repository** øverst på GitHub for å få din egen kopi med eksempelappen inkludert. Følg deretter [publiseringssteget](docs/cloudflare-guide.md#steg-5). Se også [template-alternativet i guiden](docs/cloudflare-guide.md#template).

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

## Oppdater innholdet

Guiden finnes som Markdown i `docs/cloudflare-guide.md` og som vanlig HTML i `public/index.html`. Ved innholdsendringer oppdaterer du begge utgavene. Quizen ligger separat i `public/eksempel.html`. Alt publiseres uten byggesteg eller eksterne avhengigheter.
