const configuredBase = import.meta.env.BASE_URL;

const basePath = configuredBase === "/"
  ? "/"
  : `/${configuredBase.replace(/^\/+|\/+$/g, "")}/`;

export function withBase(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|#)/i.test(path)) {
    return path;
  }

  const [pathname, hash] = path.split("#", 2);
  const relativePath = pathname.replace(/^\/+/, "");
  const resolvedPath = `${basePath}${relativePath}`;

  return hash ? `${resolvedPath}#${hash}` : resolvedPath;
}

export function stripBase(pathname: string): string {
  if (basePath === "/") {
    return pathname;
  }

  const baseWithoutTrailingSlash = basePath.slice(0, -1);

  if (pathname === baseWithoutTrailingSlash) {
    return "/";
  }

  if (pathname.startsWith(basePath)) {
    return `/${pathname.slice(basePath.length)}`;
  }

  return pathname;
}
