function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap: Map<string, string> = new Map();
  const tMap: Map<string, string> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      if (sMap.get(s[i]) !== t[i]) return false;
    } else {
      sMap.set(s[i], t[i]);
    }
    if (tMap.has(t[i])) {
      if (tMap.get(t[i]) !== s[i]) return false;
    } else {
      tMap.set(t[i], s[i]);
    }
  }

  return true;
}
