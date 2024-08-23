function simplifyPath(path: string): string {
  const pathArray = path
    .split("/")
    .filter((string) => string.length > 0 && string !== ".");
  const pathStack: string[] = [];

  for (const string of pathArray) {
    if (string === "..") pathStack.pop();
    else pathStack.push(string);
  }

  return "/" + pathStack.join("/");
}
