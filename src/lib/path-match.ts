// 팝업/코드삽입 공통: showOnPaths(쉼표구분, '*'=전체, 접미사 '*'=하위경로 전체)를 현재 경로와 비교.
export function matchesPath(showOnPaths: string | null | undefined, pathname: string): boolean {
  if (!showOnPaths || showOnPaths.trim() === '*') return true
  return showOnPaths
    .split(',')
    .map((p) => p.trim())
    .some((p) => p === pathname || (p.endsWith('*') && pathname.startsWith(p.slice(0, -1))))
}
