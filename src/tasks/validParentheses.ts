function isValidParentheses(s: string): boolean {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const closingBracket = pairs[s[i]];

    if (closingBracket != null) {
      stack.push(closingBracket);
      continue;
    }

    const lastClosingBracket = stack.pop();
    if (s[i] !== lastClosingBracket) {
      return false;
    }
  }

  return stack.length === 0;
}
