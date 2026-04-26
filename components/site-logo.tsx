import Image from "next/image"

export function SiteLogo() {
  return (
    <Image
      unoptimized
      src="/hat.png"
      width={175}
      height={30}
      preload
      className="animate-header-enter"
      style={{ animationComposition: "add" }}
      alt="A black hat with wings"
    />
  )
}
