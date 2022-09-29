/* FORMATTED API TYPES */
import {
  HeaderAPI,
  PricingBoxAPI,
  SectionAboutProjectAPI,
  sectionAboutUsAPI,
  SectionAgendaAPI,
  SectionConceptAPI,
  SectionModulesAPI
} from "./api"

import { AuthorsProps, ImageProps, TechIconsProps } from "./global"

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

export type SectionConceptProps = SectionConceptAPI

export type SectionModulesProps = SectionModulesAPI

export type SectionAgendaProps = SectionAgendaAPI

export type PricingBoxProps = PricingBoxAPI

export type SectionAboutUsProps = Omit<sectionAboutUsAPI, 'authors'> & {
  authors: AuthorsProps[]
}

export type FormattedLandingPageProps = {
  landingPageFormatted: {
    logo: ImageProps
    header: HeaderProps
    sectionAboutProject: SectionAboutProjectProps
    sectionTech: SectionTechProps
    sectionConcept: SectionConceptProps
    sectionModules: SectionModulesProps
    sectionAgenda: SectionAgendaProps,
    pricingBox: PricingBoxProps
    sectionAboutUs: SectionAboutUsProps
  }
}