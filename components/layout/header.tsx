import { NavigationBar } from "./nav-bar"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="flex flex-col items-center justify-between gap-4 bg-card py-4 text-center">
      <Image
        unoptimized
        src="/hat.png"
        width={175}
        height={30}
        preload
        className="absolute -top-4 left-110 animate-header-enter"
        style={{ animationComposition: "add" }}
        alt="A black hat with wings"
      />
      <div>
        <h1 className="text-4xl">Kyle Grenier</h1>
        <h4>Immersive Technology and Game Developer</h4>
      </div>
      <NavigationBar />
    </header>
  )
}
