import { routes } from "./routes"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Corvus",
  description: "A messaging platform for the ever changing world.",
  mainNav: [
    {
      title: "Home",
      href: routes.HOME,
    },
    {
      title: "About",
      href: routes.ABOUT,
    },
    {
      title: "Services",
      href: routes.SERVICES,
    },
    {
      title: "Contact",
      href: routes.CONTACT,
    },
  ],
  defaultRoute: routes.FEED,
  links: {
    twitter: "https://twitter.com/connectus",
    github: "https://github.com/connectus",
    instagram: "https://instagram.com/connectus",
    linkedin: "https://linkedin.com/company/connectus",
    web: "https://corvus.connectus.com",
  },
}