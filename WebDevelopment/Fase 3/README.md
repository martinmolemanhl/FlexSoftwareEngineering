#Front End Website met basic JQuery - Fase 3
Om te voorkomen dat we functies gebruiken die in een browser niet ondersteund
wordt, kun je gebruik maken van een bibliotheek ('Library') zoals JQuery.

In deze variant wordt JQuery gebruikt om aan een bestaande container (\<div>) 
een stukje tekst toe te voegen. We zoeken door middel van een **selector** '#container'
het juiste stukje in de het [Document Object Model](https://nl.wikipedia.org/wiki/Document_Object_Model), 
en daar een aanpassing in te doen.

Verder gaan we zorgen dat de code op tijd wordt uitgevoerd: pas als het hele document
geladen is wordt de code uitgevoerd. Het gebruikte mechanisme is 
```javascript
{
  $(document).ready(function(){});
}
```
waarbij jouw Javascript code tussen de twee accolades {} moet komen. 