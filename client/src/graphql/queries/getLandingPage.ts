export const GET_LANDING_PAGE = /* GraphQL */ `
fragment LOGO on LandingPage {
  logo {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
}

fragment HEADER on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }
}

fragment SECTION_ABOUT on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }
}

fragment SECTION_TECH on LandingPage{
  sectionTech {
    title
    techIcons {
      title
      icon {
        data {
          attributes {
            url
            name
            alternativeText
          }
        }
      }
    }
  }
}

fragment SECTION_CONCEPT on LandingPage {
  sectionConcept {
    title
    concepts(pagination: {
    start: 0,
    limit: 50
  }) {
      title 
    }
  }
}

fragment SECTION_MODULES on LandingPage {
  sectionModules {
    title
    module {
      title
      subtitle
      description
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    data {
      attributes {
        ...LOGO
        ...HEADER
        ...SECTION_ABOUT
        ...SECTION_TECH
        ...SECTION_CONCEPT
        ...SECTION_MODULES
      }
    }
  }
}
`


