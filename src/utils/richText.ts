const START = "__HEIVEN_STRONG_START__";
const END = "__HEIVEN_STRONG_END__";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function emphasize(text: string, phrases: string[] = []) {
  const uniquePhrases = [...new Set(phrases)].filter(Boolean).sort((a, b) => b.length - a.length);

  if (!uniquePhrases.length) {
    return text;
  }

  let output = text;

  for (const phrase of uniquePhrases) {
    output = output.replace(new RegExp(escapeRegExp(phrase), "g"), `${START}${phrase}${END}`);
  }

  return output.replaceAll(START, "<strong>").replaceAll(END, "</strong>");
}
