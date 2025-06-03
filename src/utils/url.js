export function withBase(path) {
  const base = (process.env.BASE_URL || '/').replace(/\/$/, '')
  const final = path.replace(/^\/+/, '') // 移除 path 開頭的所有斜線
  return `${base}/${final}`
}

export function buildRouteLink(slug) {
  const base = (process.env.BASE_URL || '/').replace(/\/$/, '')
  const cleanSlug = slug.replace(/^\/+/, '') // 移除開頭的 `/`（保險用）

  return `${base}#/${cleanSlug}`
}