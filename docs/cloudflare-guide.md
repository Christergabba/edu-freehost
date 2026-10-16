# Fra AI-idé til en nettadresse elevene kan bruke

**En praktisk guide for lærere · Alt gjøres i nettleseren · Ingen installasjon**

Du skal lage et lite læringsverktøy, legge koden på GitHub og publisere det med Cloudflare Pages. Til slutt har du en nettadresse du kan dele med elevene. Når du senere endrer koden på GitHub, publiserer Cloudflare den nye versjonen automatisk.

**Denne malen har to sider:** `public/index.html` er guiden du kan publisere, og `public/eksempel.html` er mattequizen. Bruker du malen, beholder du guiden og redigerer eksempelappen. Starter du fra et tomt repository, kan du legge selve verktøyet i `public/index.html` slik steg 4 viser.

Du trenger ingen forkunnskaper. Vi starter med en ferdig mattequiz, slik at du kan lære publiseringen før du ber AI lage ditt eget verktøy.

> **Dette er løsningen:** AI hjelper deg med koden → GitHub oppbevarer filene → Cloudflare Pages gjør verktøyet tilgjengelig på nettet → Elevene åpner nettadressen.

## Finn frem

1. [Hva skal du lage?](#steg-1)
2. [Dette trenger du](#steg-2)
3. [Opprett et repository – eller bruk malen](#steg-3)
4. [Legg inn mattequizen](#steg-4)
5. [Publiser med Cloudflare Pages](#steg-5)
6. [Åpne og del nettsiden](#steg-6)
7. [Oppdater læringsverktøyet](#steg-7)
8. [Lag nye verktøy med AI](#steg-8)
9. [Feilsøking](#steg-9)
10. [Personvern og sikkerhet](#steg-10)

<a id="steg-1"></a>
## 1. Hva skal du lage?

Eksempelet heter **Mattepause**. Det har ti oppgaver i pluss, minus og gange. Eleven velger blant fire svar, får vite om svaret er riktig og ser en kort forklaring. Etter siste oppgave vises resultatet. Quizen er laget for mobil, nettbrett og PC.

| Tjeneste | En enkel forklaring | Din oppgave |
| --- | --- | --- |
| **GitHub** | Et sted der du lagrer kodefiler og historikken over endringene dine. | Opprett en prosjektmappe og legg inn koden. |
| **Cloudflare Pages** | En tjeneste som publiserer filene som en nettside. | Koble til GitHub og velg hvilken mappe som skal publiseres. |

### Slik henger Git, GitHub og Cloudflare sammen

1. **AI lager kode.** Resultatet er tekst som beskriver innhold, utseende og funksjoner i verktøyet.
2. **Du lagrer på GitHub.** Git er systemet som holder orden på versjonene av filene. GitHub er nettstedet der du kan se og redigere dem. **Commit changes** lagrer en ny versjon med en kort melding om hva du endret.
3. **Cloudflare oppdager endringen.** Du kobler repositoryet til Pages én gang. Deretter henter Cloudflare automatisk filene fra den valgte branchen når du lagrer en endring.
4. **Elevene åpner nettsiden.** Cloudflare publiserer innholdet i `public` på en fast nettadresse. Elevene bruker denne adressen, mens du arbeider i GitHub.

GitHub-adressen viser prosjektet og filene. Cloudflare-adressen viser den ferdige nettsiden. Du kan endre filene mange ganger uten å endre adressen elevene bruker.

En prosjektmappe på GitHub kalles et **repository**. Vi bruker dette navnet videre fordi det står på knappene i GitHub.

Du bruker gratisnivået og en adresse som slutter på `pages.dev`. Du trenger ikke kjøpe et domene. Gratisnivået har bruksgrenser; blant annet tillater det for tiden 500 bygg/publiseringer i måneden. Se [Cloudflares gjeldende grenser](https://developers.cloudflare.com/pages/platform/limits/).

<a id="steg-2"></a>
## 2. Dette trenger du

- **Gratis GitHub-konto:** [Registrer deg på GitHub](https://github.com/signup). Følg registreringen og bekreft e-postadressen hvis du blir bedt om det.
- **Gratis Cloudflare-konto:** [Registrer deg hos Cloudflare](https://dash.cloudflare.com/sign-up). Bekreft e-postadressen og logg inn. Velg gratisnivået dersom du blir spurt. Du trenger ikke legge til eller kjøpe et domene.
- **Et AI-verktøy som kan lage kode:** Bruk for eksempel ChatGPT, Claude eller et annet verktøy du har tilgang til. Du trenger ikke AI for å publisere den ferdige eksempelquizen.

Ha gjerne GitHub og Cloudflare åpne i hver sin fane.

<a id="steg-3"></a>
## 3. Opprett et repository

**Har du allerede et eget repository?** Bruk det og gå videre til [steg 4](#steg-4). Ikke erstatt filer du trenger fra før.

### Alternativ A: Start med et tomt repository

1. Logg inn på [github.com](https://github.com/).
2. Klikk **+ → New repository** øverst. Du kan også åpne [opprettingssiden direkte](https://github.com/new).
3. Under **Owner** velger du din egen konto.
4. Skriv et navn under **Repository name**, for eksempel `mitt-laeringsverktoy`. Bruk gjerne små bokstaver og bindestreker, uten mellomrom, æ, ø og å.
5. Velg **Private** eller **Public**:
   - **Private:** Bare du og personer du gir tilgang til kan åpne repositoryet.
   - **Public:** Alle kan se repositoryet og kildekoden der.
6. Slå på **Add a README file**. Det gir prosjektet en første fil og gjør standardbranchen klar. En *branch* er en versjonslinje for filene; du bruker bare standardbranchen i denne guiden.
7. La øvrige valg stå som de er, og klikk **Create repository**.

> **Privat kodeprosjekt, offentlig nettside:** Cloudflare Pages støtter både private og offentlige repositoryer. Selv om repositoryet er privat, blir nettsiden offentlig i dette oppsettet. HTML, CSS og JavaScript som sendes til nettleseren kan også leses av besøkende. Privat repository skjuler ikke hemmeligheter i nettsidekoden. Se [Cloudflares veiledning om Git-integrasjon](https://developers.cloudflare.com/pages/get-started/git-integration/).

<a id="template"></a>
### Alternativ B: Bruk den ferdige malen

Da får du mattequizen og guiden ferdig lagt inn. Dette er valgfritt og erstatter alternativ A.

1. Åpne [edu-freehost på GitHub](https://github.com/Christergabba/edu-freehost).
2. Klikk **Use this template → Create a new repository** over fillisten.
3. Velg din egen konto under **Owner** og et navn, for eksempel `mitt-laeringsverktoy`.
4. Velg **Private** eller **Public**. Du trenger ikke velge **Include all branches**.
5. Klikk **Create repository from template**.
6. Kontroller at din egen kopi inneholder **public → index.html** (guiden) og **public → eksempel.html** (mattequizen). Gå deretter til [steg 5](#steg-5).

Du kobler **din egen kopi** til Cloudflare. Oppdateringer i originalmalen blir ikke automatisk kopiert til prosjektet ditt.

<a id="steg-4"></a>
## 4. Legg inn ditt første læringsverktøy

### Bruker du malen?

Da er filene allerede på plass. Gå til [steg 5](#steg-5). Når du senere vil endre quizen, redigerer du **public → eksempel.html**. Behold **public → index.html** for å beholde guiden som forside.

### Startet du med et tomt repository? Kopier mattequizen

1. Åpne [eksempelfilen public/eksempel.html](../public/eksempel.html). I originalrepositoryet finner du den også [her](https://github.com/Christergabba/edu-freehost/blob/main/public/eksempel.html).
2. Klikk **Copy raw file** hvis kopieringsknappen vises over koden. Ellers klikker du **Raw**, markerer hele teksten og kopierer den. Bruk **Ctrl+A**, deretter **Ctrl+C** (på Mac: **⌘A**, **⌘C**).
3. Gå tilbake til **ditt eget** repository.
4. Klikk **Add file → Create new file**. I et helt tomt repository kan lenken hete **creating a new file**.
5. Skriv følgende i feltet for filnavn:

   ```text
   public/index.html
   ```

6. Lim inn hele koden i det store redigeringsfeltet. Koden skal starte med `<!doctype html>` og slutte med `</html>`. Ikke ta med linjene med tre bakovervendte anførselstegn rundt koden fra et AI-svar.
7. Klikk **Commit changes…**. Skriv for eksempel `Legg til mattequiz` i meldingsfeltet.
8. Velg **Commit directly to the main branch** hvis valget vises, og bekreft med **Commit changes**. Bruk din standardbranch hvis den heter noe annet.

**Commit changes** betyr at du lagrer en ny versjon på GitHub. Du skal nå se mappen **public** og filen **index.html** i den.

> **Hvis filen allerede finnes:** Åpne **public → index.html**, klikk blyanten (**Edit this file**) og rediger den. Du skal ikke opprette en ny fil med samme navn.

### Hva ligger i filen?

All koden er samlet i én fil: HTML gir siden innhold, CSS bestemmer utseendet, og JavaScript får svaralternativene til å virke. Du trenger ingen andre filer, rammeverk, backend, database eller eksterne kodepakker. En *backend* er et eget program på en server; denne quizen kjører bare i nettleseren.

Oppgavene ligger samlet etter kommentaren **Endre oppgavene her**. Én oppgave ser slik ut:

```javascript
{ text: "7 + 5", answer: 12, options: [10, 11, 12, 13], explanation: "7 + 3 blir 10. Legg til 2 til, så får du 12." }
```

`text` er regnestykket, `answer` er riktig svar, `options` er svaralternativene og `explanation` er forklaringen eleven får. Riktig svar må stå nøyaktig én gang blant alternativene. Be gjerne AI hjelpe deg med endringer. Hele eksempelappen finnes i filen du nettopp kopierte.

**Merk:** GitHub viser koden når du åpner HTML-filen der. Den spillbare quizen åpner du via Cloudflare-adressen etter neste steg.

<a id="steg-5"></a>
## 5. Publiser med Cloudflare Pages

### A. Finn Pages

1. Logg inn på [Cloudflare Dashboard](https://dash.cloudflare.com/). Har du ikke konto, følger du registreringslenken i [steg 2](#steg-2).
2. Velg kontoen din hvis du blir bedt om det.
3. Åpne **Workers & Pages** i menyen.
4. Klikk **Create application** eller tilsvarende opprettingsknapp.
5. Velg **Pages**, og deretter **Connect to Git** eller **Import an existing Git repository**.

> **Se etter Pages:** Cloudflare endrer av og til knappenavn og plassering. Pages-valget kan ligge i en egen fane eller bak en lenke som **Looking to deploy Pages?**. Du skal ende på oppsett for **Pages med Git-integrasjon**. Hvis skjemaet krever en **Deploy command** som `wrangler deploy`, har du trolig valgt Workers. Gå tilbake og finn Pages.

### B. Gi tilgang til GitHub

1. Velg **GitHub**, og logg inn hvis du blir bedt om det.
2. Godkjenn Cloudflares GitHub-app. Navnet kan være **Cloudflare Workers and Pages**.
3. Velg **Only select repositories**, og velg ditt eget repository, for eksempel `mitt-laeringsverktoy`.
4. Klikk **Install & Authorize**, **Install** eller tilsvarende godkjenningsknapp.
5. Tilbake i Cloudflare velger du riktig GitHub-konto og repository. Klikk **Begin setup**.

Tilgangen lar Cloudflare hente filene og oppdage endringer. Hvis du bruker skolens GitHub-organisasjon, kan en administrator måtte godkjenne tilgangen.

### C. Fyll inn disse innstillingene

Gi **Project name** et ledig navn, for eksempel `mitt-laeringsverktoy`. Dette blir en del av nettadressen.

| Felt i Cloudflare | Skriv eller velg | Hva betyr det? |
| --- | --- | --- |
| **Production branch** | **`main`** | Versjonslinjen Cloudflare skal hente den delte nettsiden fra. |
| **Framework preset** | **`None`** | Verktøyet bruker vanlig HTML, CSS og JavaScript. |
| **Build command** | **`exit 0`** | Forteller Cloudflare at filene er klare uten et eget byggesteg. |
| **Build output directory** | **`public`** | Mappen som inneholder nettsiden Cloudflare skal publisere. |
| **Root directory (advanced)** | **La feltet stå tomt** | Oppsettet starter i repositoryets øverste mappe. |

**Branchen må stemme:** `main` er eksempelet. Hvis standardbranchen din heter `master` eller noe annet, velger du det navnet. Du ser branchnavnet i menyen over fillisten på GitHub. Hvis ingen branch kan velges, lagrer du først `public/index.html` med **Commit changes** på GitHub og prøver igjen.

Skriv bare `public` i **Build output directory**. Ikke skriv `public/index.html`, og ikke sett **Root directory** til `public` i dette oppsettet. Du trenger ingen **Environment variables**.

> Du limer `exit 0` inn i et felt hos Cloudflare. Du skal ikke åpne noen terminal eller kjøre kommandoen på datamaskinen din.

### D. Publiser

1. Klikk **Save and Deploy**.
2. Vent til publiseringen er ferdig. *Deployment* betyr at en versjon av nettsiden publiseres. Du kan se fremdriften i **Deployments**.
3. Når du ser en vellykket status, for eksempel **Success**, klikker du **Continue to project** eller åpner prosjektoversikten.

**Ingen GitHub Actions er nødvendig.** Du skal ikke aktivere GitHub Pages eller legge til noen arbeidsflytfil på GitHub. Cloudflare Pages håndterer publiseringen med den innebygde integrasjonen.

Oppsettet bygger på Cloudflares offisielle dokumentasjon: [Git-integrasjon og oppretting av Pages-prosjekt](https://developers.cloudflare.com/pages/get-started/git-integration/), [publisering av vanlig HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) og [build-innstillinger](https://developers.cloudflare.com/pages/configuration/build-configuration/). Veiledningen for vanlig HTML beskriver `exit 0`; vi bruker dette konsekvent her. Du kan hoppe over terminalinstruksjonene i dokumentasjonen, siden du allerede har lagt inn filene gjennom GitHub.

<a id="steg-6"></a>
## 6. Åpne og del nettsiden

1. Åpne Pages-prosjektet ditt i Cloudflare.
2. Finn **Production**-adressen i prosjektoversikten eller under **Deployments**. Den ser for eksempel slik ut:

   ```text
   https://mitt-laeringsverktoy.pages.dev
   ```

3. Klikk på adressen. Bruk den adressen Cloudflare faktisk viser; eksempelet over er bare et eksempel.
4. Bruker du malen, åpner forsiden guiden. Klikk **Prøv mattequizen** for å gå til `/eksempel.html`. Har du bare lagt quizen i `public/index.html`, åpnes den direkte på forsiden. Svar på noen oppgaver. Prøv både et riktig og et feil svar, og fullfør quizen.
5. Åpne samme adresse på mobilen. Kontroller at teksten er leselig og knappene enkle å trykke på.
6. Del gjerne guiden med kolleger. Til elevene deler du **quizens adresse**, som slutter på `/eksempel.html` hvis du bruker malen. Kopier adressen og lim den inn i skolens læringsplattform, en melding eller en undervisningsplan.

Elevene trenger vanligvis ingen konto og skal ikke logge inn på GitHub eller Cloudflare. Bruk den faste **Production**-adressen uten en tilfeldig versjonskode foran prosjektnavnet, og legg til `/eksempel.html` når du deler quizen fra malen. Da får elevene nye versjoner på samme adresse. De kan måtte laste siden på nytt hvis den allerede står åpen.

> **Klar for klassen?** Test en hel runde, resultatet og **Prøv en gang til**. Prøv også å bruke Tab og Enter på tastaturet. Åpne gjerne adressen i et privat nettleservindu for å kontrollere tilgangen uten innlogging.

<a id="steg-7"></a>
## 7. Oppdater læringsverktøyet

Prøv først en liten endring, for eksempel å bytte overskriften.

1. Åpne ditt repository på GitHub. Velg standardbranchen, for eksempel **main**.
2. Åpne **public → eksempel.html** hvis du bruker malen. Startet du med et tomt repository og la quizen på forsiden, åpner du **public → index.html**.
3. Klikk blyanten, **Edit this file**.
4. Finn `En liten pause. Ti matteoppgaver.` og endre teksten. Behold HTML-taggene rundt teksten.
5. Klikk **Commit changes…**, skriv for eksempel `Endre overskrift`, og lagre direkte til standardbranchen med **Commit changes**.
6. Åpne Cloudflare-prosjektets **Deployments**. En ny publisering skal starte automatisk.
7. Når den er vellykket, åpner du den faste nettadressen og laster siden på nytt.

**Etter første oppsett trenger du bare å endre koden i GitHub.** Cloudflare publiserer automatisk når du lagrer til den valgte produksjonsbranchen. Du trenger ingen manuell deployment, ny tilkobling eller ny nettadresse.

<a id="steg-8"></a>
## 8. Lag nye læringsverktøy med AI

Velg et fag, et trinn og ett tydelig læringsmål. Kopier prompten nedenfor til AI-verktøyet ditt og erstatt feltene i hakeparenteser.

### Kopier denne prompten

```text
Lag et enkelt, pedagogisk læringsverktøy på norsk bokmål.

Fag og tema: [for eksempel matematikk – gangetabellen]
Målgruppe: [for eksempel 4. trinn]
Læringsmål: [hva eleven skal øve på]
Ønsket aktivitet: [for eksempel ti oppgaver med fire svaralternativer]

Krav:
- Bruk kun HTML, CSS og vanlig JavaScript.
- Samle all kode, inkludert CSS og JavaScript, i én komplett index.html-fil.
- Ikke bruk backend, database, innlogging, API-er, npm-pakker, rammeverk,
  eksterne biblioteker, skrifttyper eller andre eksterne avhengigheter.
- Verktøyet skal kjøre direkte i nettleseren på Cloudflare Pages.
- Lag et ryddig, responsivt og brukervennlig grensesnitt for mobil,
  nettbrett og PC. Ta med viewport-meta-taggen.
- Bruk store knapper, god kontrast, synlig tastaturfokus og tydelige tekster.
- Gi eleven umiddelbar tilbakemelding og en kort faglig forklaring.
- La eleven starte på nytt. Unngå tidspress.
- Ikke be om eller lagre personopplysninger eller elevsvar.
- Bruk lang="nb" og UTF-8. Kommenter hvor jeg enkelt kan endre oppgavene.

Returner komplett kode i én HTML-kodeblokk, uten utelatelser eller plassholdere
i koden. Koden skal kunne kopieres direkte til public/index.html på GitHub.
Jeg skal ikke installere noe eller bruke terminalen.
```

### Bytt ut eksempelappen

1. Kopier hele HTML-koden fra AI-svaret. Bruk kopieringsknappen i kodeblokken hvis den finnes. Ikke kopier forklaringene eller linjene med tre bakovervendte anførselstegn rundt koden.
2. Åpne **public → eksempel.html → Edit this file** hvis du bruker malen. Da beholder du guiden på forsiden. I et repository med bare verktøyet åpner du **public → index.html → Edit this file**.
3. Klikk inne i kodefeltet, marker alt innhold og lim inn den nye koden. Ta gjerne vare på den gamle koden i et eget notat først. GitHub beholder også tidligere versjoner under **History**.
4. Klikk **Commit changes** og lagre til standardbranchen.
5. Vent til Cloudflare har publisert. Åpne nettadressen og test både faginnholdet og alle knappene før du deler verktøyet.

Du trenger ikke endre Cloudflare-oppsettet så lenge filen fortsatt ligger i `public` og følger kravene i prompten. Navnet `index.html` i AI-svaret hindrer deg ikke i å lime koden inn i `eksempel.html`. Hvis du vil beholde navigasjonen i quizen, ber du AI ta med lenker til `./` (guiden) og GitHub-repositoryet. Du kan også alltid gå tilbake via nettleseren. AI hjelper deg med å lage koden; elevene trenger ikke tilgang til AI-verktøyet for å bruke den ferdige nettsiden.

### Ideer til neste verktøy

| Verktøy | Eksempel på aktivitet |
| --- | --- |
| Mattequiz | Øv på brøk med svaralternativer og forklaringer. |
| Glosetrening | Snu glosekort og velg riktig oversettelse. |
| Geografiquiz | Koble land og hovedsteder. |
| Interaktiv tidslinje | Trykk på årstall og les om historiske hendelser. |
| Naturfagsoppgaver | Sorter dyr etter dyregruppe med knapper. |
| Enkle pedagogiske spill | Finn par mellom begreper og forklaringer. |

Start med ett verktøy per repository. Vil du beholde flere ulike verktøy samtidig, kan du bruke malen til et nytt repository for hvert verktøy og koble hvert av dem til sitt eget Pages-prosjekt.

<a id="steg-9"></a>
## 9. Feilsøking

### Nettsiden viser 404

404 betyr at siden ikke ble funnet.

1. Kontroller på GitHub at filen ligger i **public → index.html**, med små bokstaver. Unngå `index.html.txt` eller en ekstra `public`-mappe inni `public`.
2. Kontroller Cloudflare-innstillingene: **Build output directory = public**, mens **Root directory** er tomt.
3. Se at siste produksjonspublisering har lykkes, og åpne adressen fra Cloudflare-prosjektet. Bruk rotadressen, uten `/public` på slutten.

### Cloudflare finner ikke repositoryet

1. Kontroller at du bruker GitHub-kontoen som eier repositoryet, eller har tilgang til det.
2. Åpne [GitHubs appinnstillinger](https://github.com/settings/installations), finn Cloudflare-appen og klikk **Configure**.
3. Under **Repository access** legger du til repositoryet du vil publisere. Lagre og gå tilbake til Cloudflare.
4. Hvis repositoryet tilhører en skoleorganisasjon, spør administratoren om å godkjenne appen.

### Endringer vises ikke på nettsiden

1. Åpne filen du endret på GitHub (`public/eksempel.html` for quizen i malen), og kontroller at endringen faktisk er lagret.
2. Kontroller at du lagret på samme branch som Cloudflares **Production branch**.
3. Se under **Deployments** at den nyeste endringen har en vellykket publisering. Hvis ikke, les neste punkt.
4. Åpne den faste produksjonsadressen, ikke en gammel forhåndsvisningsadresse. Last siden på nytt, eller prøv et privat nettleservindu.
5. Hvis ingen publisering starter, kontroller under prosjektets innstillinger for **Builds / Branch control** at automatisk publisering av produksjonsbranchen er slått på. Navnene kan variere.

### Deployment feiler

1. Åpne den mislykkede publiseringen under **Deployments**, og les feilmeldingen i **Build log**.
2. Sammenlign innstillingene med tabellen i [steg 5](#steg-5): **None**, **exit 0**, **public**, riktig branch og tom **Root directory**.
3. Kontroller at `public/index.html` finnes på denne branchen og at Cloudflare fortsatt har GitHub-tilgang.
4. Rett feilen og lagre en endring på GitHub; da prøver Cloudflare automatisk på nytt. Ved en midlertidig tjenestefeil kan du velge **Retry deployment** hvis knappen finnes.

Hvis Cloudflare melder at gratisgrensen er nådd, må du vente til grensen nullstilles. Du trenger ikke oppgradere for å følge guiden. Mer hjelp finnes i [Cloudflares feilsøkingsguide](https://developers.cloudflare.com/pages/configuration/git-integration/troubleshooting/).

### Nettsiden fungerer ikke på mobil

Test først den publiserte adressen i mobilens vanlige nettleser. AI-generert kode kan mangle mobiltilpasning. Kopier koden tilbake til AI og be om å rette problemet, for eksempel:

```text
Gjør denne index.html-filen mobilvennlig. Behold funksjonene. Bruk
viewport-meta-tag, fleksible bredder, leselig tekst og store knapper.
Unngå vannrett rulling ved 320 pikslers skjermbredde. Returner hele den
oppdaterte filen med HTML, CSS og JavaScript uten eksterne avhengigheter.
Her er koden min:
[Lim inn innholdet fra public/eksempel.html, eller public/index.html hvis verktøyet ligger der]
```

Erstatt koden på GitHub, lagre og test på nytt etter publisering. En vellykket deployment bekrefter at filene er publisert; du må fortsatt teste at innhold og funksjoner virker.

<a id="steg-10"></a>
## 10. Personvern og sikkerhet

- **Ikke legg inn elevopplysninger.** Unngå navn, e-postadresser, vurderinger og andre opplysninger om elever i koden eller oppgavene. Eksempelquizen samler ikke inn eller lagrer elevsvar.
- **Ikke legg inn API-nøkler eller passord.** Koden i en nettside kan leses av besøkende, også når GitHub-repositoryet er privat. Verktøyet i denne guiden trenger ingen nøkler.
- **Regn nettsiden som offentlig.** Alle som kjenner adressen kan normalt åpne den og dele den videre. En vanskelig adresse er ikke tilgangskontroll.
- **Test AI-generert kode og faginnhold.** Prøv feil svar, riktig svar, hele oppgaveforløpet og omstart. Kontroller at løsninger og forklaringer er faglig riktige, og at verktøyet fungerer på elevenes enheter. Følg skolens rutiner for bruk av digitale verktøy.

<details>
<summary>Hvilke filer skal prosjektet inneholde?</summary>

Bruker du malen, får du denne strukturen:

```text
README.md
docs/
  cloudflare-guide.md
public/
  index.html       (guiden som nettside)
  eksempel.html    (mattequizen)
  guide.css        (utseendet til guiden)
  guide.js         (kopieringsknapper)
```

Alt i **public** publiseres som nettside. Forsiden viser guiden, og knappen **Prøv mattequizen** åpner eksempelsiden. README og Markdown-utgaven av guiden kan også leses på GitHub. Starter du med et tomt repository, er `public/index.html` den eneste filen Cloudflare trenger for å publisere eksempelappen. Du trenger ingen installasjonsfiler, Docker eller GitHub Actions.

</details>

[Til toppen](#fra-ai-idé-til-en-nettadresse-elevene-kan-bruke) · [Til repositoryets introduksjon](../README.md)

*Oppsett og dokumentasjonslenker kontrollert 16. oktober 2026. Knappenavn og gratisgrenser kan endres.*
