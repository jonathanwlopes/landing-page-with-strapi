/* FORMATTED API TYPES */
import {
  HeaderAPI,
  PricingBoxAPI,
  SectionAboutProjectAPI,
  sectionAboutUsAPI,
  SectionAgendaAPI,
  SectionConceptAPI,
  SectionFaqAPI,
  SectionModulesAPI,
  SectionReviewsAPI
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

export type SectionReviewsProps = Omit<SectionReviewsAPI, 'reviews'> & {
  reviews: {
    name: string
    text: string
    photo: ImageProps
  }[]
}

export type SectionFaqProps = SectionFaqAPI

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
    sectionReviews: SectionReviewsProps
    sectionFaq: SectionFaqProps
  }
}