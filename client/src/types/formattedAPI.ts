/* FORMATTED API TYPES */
import { HeaderAPI, SectionAboutProjectAPI } from "./api"
import { ImageProps, TechIconsProps } from "./global"

export type HeaderProps = Omit<HeaderAPI, 'image'> & {
  image: ImageProps
}

export type SectionAboutProjectProps = Omit<SectionAboutProjectAPI, 'image'> & {
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type SectionConceptProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  module: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type FormattedLandingPageProps = {
  landingPageFormatted: {
    logo: ImageProps
    header: HeaderProps
    sectionAboutProject: SectionAboutProjectProps
    sectionTech: SectionTechProps
    sectionConcept: SectionConceptProps
    sectionModules: SectionModulesProps
  }
}