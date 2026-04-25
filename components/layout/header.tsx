import { NavigationBar } from "./nav-bar"

export function SiteHeader() {
  return (
    <header className="flex flex-col items-center justify-between gap-4 bg-card py-4 text-center">
      <div>
        <h1 className="text-4xl">Kyle Grenier</h1>
        <h4>Immersive Technology and Game Developer</h4>
      </div>
      <NavigationBar />
    </header>
  )
}
