/* API TYPES */
import { IconProps, ImageProps } from "./global"

type LogoAPI = {
  data: {
    attributes: ImageProps
  }
}

export type HeaderAPI = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: ImageProps
    }
  }
}

export type SectionAboutProjectAPI = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type TechIconsAPI = {
  title: string
  icon: {
    data: {
      attributes: IconProps
    }
  }
}

export type SectionTechAPI = {
  title: string
  techIcons: TechIconsAPI[]
}

export type SectionConceptAPI = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesAPI = {
  title: string
  module: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type LandingPageAPI = {
  landingPage: {
    data: {
      attributes: {
        logo: LogoAPI
        header: HeaderAPI
        sectionAboutProject: SectionAboutProjectAPI
        sectionTech: SectionTechAPI
        sectionConcept: SectionConceptAPI
        sectionModules: SectionModulesAPI
      }
    }
  }
}

