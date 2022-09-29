/* API TYPES */
import { IconProps, ImageProps, ButtonProps } from "./global"

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

export type SectionAgendaAPI = {
  title: string
  description: string
}

export type PricingBoxAPI = {
  totalPrice: string
  numberInstallments: string
  priceInstallments: string
  benefits: string
  button: ButtonProps
}

export type sectionAboutUsAPI = {
  title: string
  authors: {
    data: {
      attributes: {
        photo: {
          data: {
            attributes: {
              url: string
              alternativeText: string
            }
          }
        }
        name: string
        description: string
        role: string
        socialLinks: {
          title: string
          url: string
        }[]
      }
    }[]
  }
}

export type SectionReviewsAPI = {
  title: string
  reviews: {
    name: string
    text: string
    photo: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
  }[]
}

export type SectionFaqAPI = {
  title: string
  questions: {
    answer: string
    question: string
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
        sectionAgenda: SectionAgendaAPI,
        pricingBox: PricingBoxAPI
        sectionAboutUs: sectionAboutUsAPI
        sectionReviews: SectionReviewsAPI
        sectionFaq: SectionFaqAPI
      }
    }
  }
}

