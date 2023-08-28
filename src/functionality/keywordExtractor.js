const stopWords = [
  "and",
  "the",
  "in",
  "is",
  "of",
  "like",
  "on",
  "hey",
  "based",
  "with",
  "from",
  "if",
  "i",
  "get",
  "other",
  "have",
  "there",
  "has",
  "this",
  "a",
  "it",
  "to",
  "for",
  "at",
  "our",
  "but",
  "how",
  "us",
  "also",
  "can",
  "you",
  "me",
  "him",
  "so",
  "was",
  "any",
  "between",
  "start",
  "all",
  "an",
  "are",
  "as",
  "be",
  "by",
  "do",
  "does",
  "done",
  "every",
  "for",
  "had",
  "has",
  "having",
  "if",
  "in",
  "into",
  "it",
  "its",
  "just",
  "more",
  "most",
  "no",
  "not",
  "on",
  "or",
  "out",
  "over",
  "some",
  "such",
  "that",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "this",
  "those",
  "through",
  "under",
  "up",
  "very",
  "we",
  "what",
  "when",
  "where",
  "which",
  "while",
  "who",
  "will",
  "with",
  "within",
  "without",
  "would",
];

const stopWordsAfr = [
  "en",
  "die",
  "in",
  "is",
  "van",
  "soos",
  "op",
  "hallo",
  "gebaseer",
  "met",
  "uit",
  "indien",
  "ek",
  "kry",
  "ander",
  "het",
  "daar",
  "het",
  "hierdie",
  "n",
  "dit",
  "om",
  "vir",
  "by",
  "ons",
  "maar",
  "hoe",
  "ons",
  "ook",
  "kan",
  "jy",
  "my",
  "hom",
  "so",
  "was",
  "enige",
  "tussen",
  "begin",
  "al",
  "'n",
  "is",
  "wees",
  "deur",
  "doen",
  "doen",
  "gedaan",
  "elke",
  "vir",
  "het",
  "het",
  "hê",
  "indien",
  "in",
  "in",
  "dit",
  "dit",
  "net",
  "meer",
  "meeste",
  "geen",
  "nie",
  "op",
  "of",
  "uit",
  "oor",
  "sommige",
  "sodanig",
  "dat",
  "hulle",
  "hulle",
  "dan",
  "daar",
  "hierdie",
  "hulle",
  "hierdie",
  "hulle",
  "deur",
  "jou",
  "onder",
  "op",
  "baie",
  "ons",
  "wat",
  "wanneer",
  "waar",
  "welke",
  "terwyl",
  "wie",
  "sal",
  "met",
  "binne",
  "sonder",
  "sou",
];

export const ExtractKeyWords = (paragraph, lang) => {
  const words = paragraph.toLowerCase().split(/\W+/);

  let filteredWords;

  console.log(paragraph);

  if (lang === "af") {
    filteredWords = words.filter((word) => !stopWordsAfr.includes(word));
  } else {
    filteredWords = words.filter((word) => !stopWords.includes(word));
  }

  const wordFrequency = {};
  filteredWords.forEach((word) => {
    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  });

  const sortedKeywords = Object.keys(wordFrequency).sort(
    (a, b) => wordFrequency[b] - wordFrequency[a]
  );

  return sortedKeywords;
};
