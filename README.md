# [past forward graph ⏩](https://gerdesque.github.io/pastforwardgraph/)

Das Projekts kann unter [past forward ⏩](https://gerdesque.github.io/pastforward/) besucht werden!

![past forward](https://codingdavinci.de/img/projekte//pastforward.png)

Die Datei films.json enthält alle Videosequenzen samt Verlinkungen zueinander. Eine Videosequenz ist ein Ausschnitt aus einem der 22 Filme, der mit Start- und Endzeit klar abgesteckt ist.
Dies kann visuell unter https://gerdesque.github.io/pastforwardgraph/index.html eingesehen werden.

Alle Videosequenzen werden in der Liste 'Nodes' als einzelnes Objekt mit folgenden Parametern gespeichert:

- id: eindeutige Kennzeichnung der Videosequenz
- section: sprechender Titel des Videos (wird zur Visualisierung genutzt)
- thumbnail: Vorschaubild für die Videosequenz (Namenskonvention $ID$.jpg)
- video: Link zur Videosequenz von filmportal.de
- start: Beginn des Videos im Format "0:00"
- end: Ende des Videos im Format "0:00"
- intro: Tafeltext (= Vorspann/Eingangstafel) bestehend aus Ort, Zeit, Geschehen (1-2 Sätze)
- text: Text für die Postkartenrückseite (nur für Startvideos relevant)

Im Bereich 'arcs' wird eine Liste zwischen der Quelle und den Zielsequenzen gepflegt. Dies ist notwendig für die Darstellung des Graphen. Weiterhin erhält jede Verbindung einen Assoziationstext. 
