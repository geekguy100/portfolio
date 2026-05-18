// Source: https://github.com/shadcn-ui/ui/blob/main/apps/v4/hooks/use-mobile.ts

import * as React from "react"

export function useScreenBreakpoint(breakpoint = 768) {
  const [hitBreakpoint, setHitBreakpoint] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => {
      setHitBreakpoint(window.innerWidth < breakpoint)
    }
    mql.addEventListener("change", onChange)
    setHitBreakpoint(window.innerWidth < breakpoint)
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!hitBreakpoint
}
