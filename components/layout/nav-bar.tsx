import { ButtonGroup } from "../ui/button-group"
import { NavigationButton } from "./nav-button"

const routes = [
  { href: "#", title: "Home" },
  { href: "#projects", title: "Projects" },
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
