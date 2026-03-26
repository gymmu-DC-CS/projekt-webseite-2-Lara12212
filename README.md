[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pAqJXfzR)


05.03.2026:
Einstieg/Einleitung ins Thema bekommen.
Thema rausgesucht = Schweden.
Angefangen Informationen über das Land zu recherchieren. 


06.03.2026:
Ich habe weitere Informationen über Schweden recherchiert und diese anschließend in übersichtliche Unterkapitel gegliedert. Mithilfe von ChatGPT habe ich die gesammelten Informationen in eigenen Worten zu einem zusammenhängenden Text ausgearbeitet. Außerdem habe ich das Inhaltsverzeichnis anhand meiner gewählten Unterkapitel fertiggestellt.


12.03.2026:
Quellen für die Allgemeinen Informationen:
https://sweden.se/
https://de.wikipedia.org/wiki/Schweden
Bild:
Aus eigenen Fotos von meiner Reise nach Schweden
Quellen für den Steckbrief:
https://de.wikipedia.org/wiki/Schweden
https://www.schwedenkonsulat.de/schweden/fakten-und-zahlen/
https://sweden.se/life/society/key-facts-about-sweden
Bild:
https://www.istockphoto.com/photo/swedish-flag-gm649665310-118022553
Ich habe an diesem Tag beide Texte(Allgemeinen Informationen und den Steckbrief) 
in die Website eingefügt.


13.03.2026
Quellen für den Text zur Geschichte von Schweden:
https://de.wikipedia.org/wiki/Schweden#Geschichte
https://www.britannica.com/place/Sweden
Quellen für die Geographie und die Natur:
https://sweden.se/nature
https://de.wikipedia.org/wiki/Schweden#Geografie
Zusätzlich habe ich noch zwei Bilder(Schweden Flagge/Natur)eingefügt und 
diese neben dem entsprechenden Text platziert. Dazu habe ich die Hilfe von 
Chat Gpt benutzt. 


15.03.2026:
Quellen für den Text zum Klima:
https://de.wikipedia.org/wiki/Schweden#Klima
Tabelle zum Klima eingefügt, sodass es besser übersichtlich ist.
Den Code für die Tabelle habe ich von ChatGpt, da ich keine Ahnung hatte,
wie man so etwas macht und ich keine geeigneten Tutorials gefunden habe. 
Danach habe ich noch mit Hilfe von CSS, die Tabelle farbig gestalten(blau und gelb = Farben von Schweden) und die Hintergrundfarbe der ganzen Website auf ein dunkelgrau festgelegt. 
Zusätzlich habe ich die Schriftart noch geändert, sodass der Text besser lesbar ist. 


16.03.2026:
Alle restlichen Texte eingefügt. 
Quelle für den Text zur Bevölkerung und zur Gesellschaft:
https://de.wikipedia.org/wiki/Demografie_Schwedens

Quellen zum Text über das Essen/die Spezialitäten:
https://visitsweden.de/aktivitaten/essen-trinken/schwedische-kuche/
https://en.wikipedia.org/wiki/Coffee_in_Sweden

Quellen zum Text über die Kultur und Traditionen:
https://de.wikipedia.org/wiki/Mittsommerfest
https://www.schwedenliebe.com/de/schweden-infos/traditionen-und-braeuche
https://visitsweden.de/aktivitaten/kultur-geschichte-und-kunst/schwedische-traditionen/

Quellen zum Text zur Wirtschaft und zur Innovation:
https://www.platformsweden.com/retail

Quellen zum Text über den Tourismus und die Sehenswürdigkeiten:
https://www.tourismus.de/europa/schweden/
https://en.wikipedia.org/wiki/Stockholm

Quellen von den FunFacts:
https://www.schweden.pro/p/steckbrief-schweden.html
https://hejsweden.com/wichtige-daten-und-fakten-uber-schweden/

Die Gestaltung der FunFacts geändert, sodass es attraktiver für Leser/innen ist.
Diese Gestaltung wurde mit Hilfe von ChatGpt und mit eigenen Ideen umgesetzt.

Danach habe ich ein Video über die schwedische Naturlandschaft eingefügt. Diese Video stammt 
aus Youtube. Das Video habe ich selbst eingefügt, dennoch hat mir ChatGpt bei dem Layout des 
Videos geholfen z.B die abgerundeten Ecken und dass es in der Mitte der Website steht.

Ausserdem habe ich noch eine Reihe von 3 Bildern unterhalb des Textes über das Essen eingefügt. Diese Fotos dienen zur Visualisierung der drei Gerichte, die im Text erwähnt werden. Die Anordnung(alle 3 Bilder nebeneinander) habe ich wiederrum mit Chat Gpt gemacht. Die Beschreibung unterhalb der Bilder, habe ich selbstständig hinzugefügt, sodass man weiss um welches Gericht es sich dabei handelt. 




Erläuterung für Java Scripts:

document.querySelectorAll("a").forEach(link => 

--> Diese Zeile sucht alle Links (<a> Elemente) auf der Website und geht sie einzeln durch.

link.onclick = function(e)

--> Hier wird festgelegt, was passieren soll, wenn man auf einen Link klickt.

e.preventDefault();

--> Verhindert das normale Verhalten des Links (das sofortige Springen zum Ziel).

document.querySelector(this.getAttribute("href"))

--> Holt das Ziel des Links

.scrollIntoView({behavior:"smooth"});

--> Scrollt weich zu diesem Element.

document.getElementById("topBtn").onclick = function()

--> Sucht den Button mit der ID topBtn und reagiert auf einen Klick.

window.scrollTo({top:0, behavior:"smooth"});

--> Scrollt die Seite weich zurück nach oben.