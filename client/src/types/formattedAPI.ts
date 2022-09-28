/* FORMATTED API TYPES */
import {
  HeaderAPI,
  PricingBoxAPI,
  SectionAboutProjectAPI,
  SectionAgendaAPI,
  SectionConceptAPI,
  SectionModulesAPI
} from "./api"

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

export type SectionConceptProps = SectionConceptAPI

export type SectionModulesProps = SectionModulesAPI

export type SectionAgendaProps = SectionAgendaAPI

export type PricingBoxProps = PricingBoxAPI

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
  }
}