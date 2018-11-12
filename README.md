# pastforwardgraph

Die Datei films.js enthält alle Videosequenzen samt Verlinkungen zueinander.
Dies kann visuell unter https://gerdesque.github.io/pastforwardgraph/index.html eingesehen werden.

Alle Videosequenzen werden in der Liste 'Nodes' als einzelnes Objekt mit folgenden Parametern gespeichert:

- id: eindeutige Kennzeichnung der Videosequenz
- section: sprechender Titel des Videos (wird zur Visualisierung genutzt)
- thumbnail: Vorschaubild für die Videosequenz (Namenskonvention $ID$.jpg)
- video: Link zur Videosequenz von filmportal.de
- start: Beginn des Videos im Format "0:00"
- end: Ende des Videos im Format "0:00"
- intro: Tafeltext (= Vorspann/Eingangstafel) bestehend auss Ort, Zeit, Geschehen (1-2 Sätze)
- associationText1: Teaser der ersten Assoziation (kurzer Anreißertext)
- associationText2: Teaser der zweiten Assoziation (kurzer Anreißertext)
- text: Text für die Postkartenrückseite (nur für Startvideos relevant)
