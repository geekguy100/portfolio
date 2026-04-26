import { ButtonGroup } from "../ui/button-group"
import { NavigationButton } from "./nav-button"

const routes = [
  { href: "#aboutme", content: "Home" },
  { href: "#projects", content: "Projects" },
]

export function NavigationBar() {
  return (
    <nav>
      <ButtonGroup>
        {routes.map((t) => (
          <NavigationButton key={t.href} {...t} />
        ))}
      </ButtonGroup>
    </nav>
  )
}
