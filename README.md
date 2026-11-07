# ZWEITAKT — Eine zweite Runde Energie.

Mein persönliches Werkstatttagebuch: zwölf gebrauchte Akkuzellen aus Dyson-Packs sollen zu einer USB-C-Powerbank für mein MacBook werden. Ziel: 100 W USB Power Delivery, 4S3P, selbst gedrucktes Gehäuse.

**Stand 07.11.2026:** Pack verbunden, ca. 15,2 V gesamt und ca. 3,8 V je Gruppe. Zellkapazität, Belastbarkeit, Schutzfunktion und thermische Auslegung noch nicht nachgewiesen. Das Projekt ist kein freigegebener Bauplan.

## Website

- Statische, responsive Projektseite in deutscher Ich-Perspektive
- Eigene exakte SVG-Prinzipskizzen und Originalbilder des Aufbaus
- Als Designstudie gekennzeichnetes Gehäusemotiv
- Modellrechner, Bauteilfilter, Tastatur-bedienbare Grafik-Tabs und vergrößerbare Fotos
- Konkrete Händlerlinks mit datiertem Recherchestand und offenen Prüfpunkten
- Keine Analytics, externen Fonts, Cookies, Frameworks oder Laufzeit-Abhängigkeiten

## Lokal

Node.js 22 oder neuer:

```sh
npm test
npm run build
python3 -m http.server 8080 --directory dist
```

Danach `http://localhost:8080` öffnen. Der Build kopiert die statischen Quelldateien nach `dist/`. SVGs lassen sich mit `node scripts/generate-diagrams.mjs` neu erzeugen.

## GitHub Pages

Der Workflow `.github/workflows/pages.yml` prüft, baut und veröffentlicht bei Push auf `main`. Falls GitHub Pages im Repository noch nicht aktiviert ist: unter **Settings → Pages → Source: GitHub Actions** auswählen und den Workflow erneut starten. Die erwartete URL ist `https://christian1binder.github.io/powerbank/`; sie gilt erst nach erfolgreichem Deployment.

## Inhalte pflegen

Artikel und Teileliste stehen in `index.html`. Gestaltung: `styles.css`. Interaktion: `app.js`. Nachvollziehbare Modellrechnung: `calculations.js`. Quellen und offene technische Fragen stehen zusätzlich in [RESEARCH.md](RESEARCH.md).

Die Website behauptet keine erfolgreiche 100-W-Abnahme. Händlerangaben ersetzen keine Prüfung. Alle Links sind ohne Affiliate-Parameter.
