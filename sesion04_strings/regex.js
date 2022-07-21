let text =
  "En muchas partes del cuerpo como son las manos, las orejas o los pies, están representados todos los órganos y partes del cuerpo. Incidiendo sobre estas zonas se pueden crear arcos reflejos que actúen directamente sobre cualquier órgano del cuerpo y que solucionen cualgquier anomalía que exista En las manos, las orejas o los pies, se representan todos los órganos del cuerpo Incidiendo sobre estas zonas se pueden crear arcos reflejos que actúen directamente sobre cualquier punto del organismo y que solucionan cualquier punto del organismo y que solucionen la anomalía que exista";

console.log(text.match(/los/g));

//Metodos para buscar Palabras
console.log(text.includes("órgano")); //true

console.log(text.startsWith("en")); //false

console.log(text.endsWith("exista")); //true
