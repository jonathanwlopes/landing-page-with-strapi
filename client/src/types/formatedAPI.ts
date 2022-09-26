/* FORMATTED API TYPES */
export type LogoProps = {
  alternativeText: string
  url: string
}

export type TechIconsProps = {
  title: string
  icon: {
    url: string
  }
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type FormattedLandingPageProps = {
  landingPageFormatted: {
    logo: LogoProps
    header: HeaderProps
    sectionAboutProject: SectionAboutProjectProps
    sectionTech: SectionTechProps
  }
}