/* API TYPES */
type LogoAPI = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

type HeaderAPI = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

type SectionAboutProjectAPI = {
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

type SectionTechAPI = {
  title: string
  techIcons: {
    title: string
    icon: {
      data: {
        attributes: {
          name: string
          url: string
          alternativeText: string
        }
      }
    }
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
      }
    }
  }
}