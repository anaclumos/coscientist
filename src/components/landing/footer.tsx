import Link from "next/link"

import { Container } from "./primitives"

const links = [
  { label: "Manifesto", href: "/manifesto" },
  {
    label: "GitHub",
    href: "https://github.com/coscientist/coscientist",
    external: true,
  },
  // { label: "X", href: "https://x.com/anaclumos", external: true },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-16">
      <div className="bg-neutral-950/2.5 py-16 text-neutral-950 dark:bg-white/5 dark:text-white">
        <Container className="flex flex-col gap-16">
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      className="text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      className="text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-between gap-10 text-sm/7">
            <div className="text-neutral-600 dark:text-neutral-500">
              © {currentYear} Coscientist
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
