import { SocialGrid } from "./social-grid"
import { NavigationBar } from "./nav-bar"
import Image from "next/image"

export function SiteHeader() {
  // Defaulting header height to what it is when the Image is fully loaded.
  return (
    <header className="site-section grid min-h-43.75 grid-cols-3 text-center">
      {/* Logo */}
      <div className="flex flex-none flex-col items-end justify-center">
        <Image
          unoptimized
          src="/hat.png"
          width={175}
          height={30}
          preload
          style={{ animationComposition: "add" }}
          alt="A black hat with wings"
          className="animate-header-enter"
        />
      </div>
      {/* Name */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <h1 className="text-4xl">Kyle Grenier</h1>
          <h4>Immersive Technology and Game Developer</h4>
        </div>
        <NavigationBar />
      </div>
      {/* Socials */}
      <SocialGrid />
    </header>
  )
}
