import { ButtonGroup } from "@/components/ui/button-group"
import { NavigationButton } from "../../components/nav-button"

const routes = [
  { href: "/", children: "Home" },
  { href: "/#projects", children: "Projects" },
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
