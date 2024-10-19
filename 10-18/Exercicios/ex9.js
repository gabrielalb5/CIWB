const word = 'interestelar';
vetor = Array.from(word);
apenasVogais = vetor.filter((x) => x=="a" || x=="e" || x=="i" || x=="o" || x=="u");
console.log("A palavra tem "+apenasVogais.length+" vogais");