# Technischer und redaktioneller Recherchestand

Datum: 07.11.2026. Preise und Lagerangaben sind abgerufene Momentaufnahmen, nicht garantierte Live-Bestände. Keine Bestellung ausgelöst.

## Tatsächlicher Projektstand

Der Nutzer hat zwölf Zellen aus gebrauchten Dyson-Akkupacks in einer 4S3P-Anordnung verbunden. Gemeldet: ca. 15,2 V gesamt und jeweils ca. 3,8 V für die vier Parallelgruppen. Die mitgeteilte Kennzeichnung einer Zellcharge lautet INR-20700A 0842IA2503. Nicht jede Zelle ist separat identifiziert. Zelltestresultate fehlen. Ladegerät, Nickelband, Punktschweißgerät und selbst konstruierte Halter sind vorhanden. Die Website darf einen abgeschlossenen Test oder eine fertige USB-C-Powerbank nicht behaupten.

## Primärquellen und konkrete Angebote

| Quelle | URL | Einordnung |
| --- | --- | --- |
| Apple, M4-Basismodell 14 Zoll | https://support.apple.com/de-de/121552 | 72,4 Wh, 70-W-Netzteil, Schnellladen mit 96 W; bereits im Gespräch direkt abgerufen, aktueller erneuter Abruf zeitweise 429. |
| E-One Moli Energy INR-20700A | https://www.dnkpower.com/wp-content/uploads/2024/08/molicel-INR20700A.pdf | Herstellerdatenblatt als Händlerkopie. Neuzellwerte, keine Qualitätsbestätigung der gebrauchten Zellen. |
| Injoinic IP2368 | https://energo-shop.com/content/files/ip2368-datasheet-70154894.pdf | Herstellerdatenblatt als Händlerkopie. Modulvariante separat prüfen. |
| IP2368, auswählbare 4S-Version | https://www.ebay.de/itm/336377008247 | Abruf: 8,52 € vor Versand, Variantenpreis beachten, 4S 16.8V angeboten, Standort Shenzhen. 100 W laut Angebot, nicht unabhängig nachgemessen. |
| MakerMind RBS16405 | https://www.roboter-bausatz.de/p/usb-c-power-bank-lade-modul-4s-100w | Abruf: 38,59 €, sofort verfügbar, 1–3 Tage angegeben. Alternative zu IP2368, Chip nicht identifiziert. |
| RBS16405 PDF | https://www.roboter-bausatz.de/datasheet/RBS16405.pdf | 4S, bidirektionale USB-C-Ports, 20 V / 5 A laut Anbieter. Schutzfunktionen und Balancing nicht eindeutig spezifiziert. Fehlerhafte Einheit „Quadratmeter“ im Text nicht übernommen. |
| RBS16405 Verkäuferangebot | https://www.ebay.de/itm/186309311426 | Genannter Artikelstandort Saarbrücken, Deutschland. Preis kann vom Shop abweichen. |
| JBD 4S 20A Smart BMS | https://medusa-crew.com/produkt/jbd-bms-4s-20a-protection-board-lto-lipo-li-ionen-uartrs485-ntc-heating-funktion-kopie/ | Abruf: 65 €, 2 vorrätig. Funktionen laut Händler. Genaue Modellnummer und Maße widersprüchlich/offen. Deutsche Kontaktadresse beweist keinen Versandort. |
| Kabel AWG14 | https://www.ebay.de/itm/175772993264 | Konkretes Händlerangebot. AWG14 rechnerisch etwa 2,08 mm². |
| Sicherungshalter | https://www.wimo.com/de/zubehoer/geraetezubehoer/stromversorgung/pp-fuse | 2,5-mm²-Leitung laut Anbieter; Sicherungsbauform und DC-Nennwerte vor Bestellung prüfen. |
| Isolierringe | https://www.nkon.nl/de/1x-20700-21700isolatiepapier-groen.html | Passform 20700/21700 laut Angebot, tatsächlichen Zellkopf prüfen. |
| Schrumpfschlauch | https://www.roboter-bausatz.de/p/8x-1m-schrumpfschlauch-sortiment-2mm-12mm | Für Leitungen, nicht zum Ersetzen eines Zellschrumpfschlauchs. |
| XT60-Leitung | https://pichler.de/XT60-Stecker-mit-Kabel | Nur eine Hälfte; Gegenhälfte und berührungsgeschützte Akkuseite erforderlich. |
| Anker 333 | https://www.anker.com/de/products/b8756-anker-333-usb-c-auf-usb-c-kabel-3-pack | Beispiel für 100-W-Kabel; Hersteller-Support bestätigt 5-A-Fähigkeit der Modellreihe. |
| Ähnliches Bauprojekt | https://www.youtube.com/watch?v=_WI9Nwqvplo | GreatScott!: My Power Bank Rivals Commercial Ones?! Super Fast! (DIY or Buy). Inspirationslink, nicht als vollständig geprüftes Tutorial behauptet. |

## Offene technische Entscheidungen

1. Jede Zelle vor Betrieb geeignet prüfen, identifizieren und dokumentieren. Nach Parallelschaltung lässt sich aus der Gruppenspannung keine Einzelzellgesundheit ableiten.
2. Elektroaufbau nur nach isoliertem Prüfen der Verbinder und Strompfade weiterführen. Keine Abnahme allein anhand eines Fotos oder der Gesamtspannung.
3. USB-Platine auswählen: richtige Chemie, 4S / 16,8 V, 20 V / 5 A, Ladebegrenzung, Temperaturmessung, Kapazitätseinstellung, Kühlung und Leistung je Port bestätigen.
4. Beim alternativen RBS16405 klären, ob und wie externe Schutzschaltung und interne Zellabgriffe zusammenwirken. Kein blindes Kombinieren zweier BMS.
5. BMS-Modell, Kabelbaum, NTCs, Anschlussschema und zulässige Temperaturen verifizieren. Nicht mit LiFePO4-Profil betreiben.
6. Sicherungswert erst nach Dimensionierung von Zellverbindern, Kabeln, Kontakten und Einschaltstrom festlegen. Ein 20-A-BMS ist keine 20-A-Freigabe jedes Bauteils.
7. Kühlkörper nur elektrisch isoliert und passend zur Platine. Ein gedrucktes Gehäuse gilt nicht als feuerfest.
8. Prüfmittel: Kapazitätstester vorhanden, zusätzliche PD-Messung, geeignete Last und Temperaturmessung ausleihen oder modellbezogen auswählen.
9. Datenblattgrenze 2,5 V/Zelle ist keine pauschale Empfehlung für die Betriebsabschaltung eines gebrauchten Packs.

## Modellrechnung

Nominal: 4 × 3,6 V = 14,4 V; bei 3 Ah pro Zelle 3 × 3 Ah = 9 Ah; Energie = 129,6 Wh. Rechner erlaubt niedrigere Beispielkapazitäten. Wirkungsgrad ist eine Annahme. Stromaufteilung idealisiert; keine Simulation von Spannungseinbruch oder vorzeitiger BMS-Abschaltung. Keine reale Laufzeitzusage.

## Bildnachweise

Die drei Werkstattfotos stammen aus den vom Nutzer bereitgestellten Aufnahmen. Dateien werden ohne EXIF-Metadaten als WebP ausgeliefert. Exakte Prinzipskizzen und Favicon werden durch `scripts/generate-diagrams.mjs` erstellt.

`assets/hero-concept.webp` wurde mit dem integrierten Bildgenerator als ausdrücklich gekennzeichnete Designstudie erstellt. Prompt: „Editorial product-mockup for ZWEITAKT, a second-life DIY laptop power bank; warm ivory 3D-printed enclosure with fine FDM layers, orange USB-C end panel, slightly hovering lid, dark green cylindrical cells partially visible, warm gray workshop surface, no exposed wiring, no performance or certification claims; conceptual design study, not documentary.“
