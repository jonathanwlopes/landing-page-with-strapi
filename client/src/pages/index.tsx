import { GetStaticProps } from 'next'
import { client } from '../graphql'

import { LandingPageAPI } from 'types/api'
import { FormattedLandingPageProps } from 'types/formattedAPI'

import { GET_LANDING_PAGE } from 'graphql/queries/getLandingPage'

import Footer from 'components/Footer'
import PricingBox from 'components/PricingBox'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionAgenda from 'components/SectionAgenda'
import SectionConcepts from 'components/SectionConcepts'
import SectionFaq from 'components/SectionFaq'
import SectionHero from 'components/SectionHero'
import SectionModules from 'components/SectionModules'
import SectionReviews from 'components/SectionReviews'
import SectionTech from 'components/SectionTech'


const Index = ({ landingPageFormatted }: FormattedLandingPageProps) => {
  const {
    logo,
    header,
    sectionAboutProject,
    sectionTech,
    sectionConcept,
    sectionModules,
    sectionAgenda,
    pricingBox
  } = landingPageFormatted

  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcept} />
      <SectionModules {...sectionModules} />
      <SectionAgenda {...sectionAgenda} />
      <PricingBox {...pricingBox} />
      <SectionAboutUs />
      <SectionReviews />
      <SectionFaq />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<Promise<LandingPageAPI>>(GET_LANDING_PAGE)
  const {
    logo,
    header,
    sectionAboutProject,
    sectionTech,
    sectionConcept,
    sectionModules,
    sectionAgenda,
    pricingBox
  } = landingPage.data.attributes

  const landingPageFormatted = {
    logo: logo.data.attributes,
    header: {
      ...header,
      image: header.image.data.attributes
    },
    sectionAboutProject: {
      ...sectionAboutProject,
      image: sectionAboutProject.image.data.attributes
    },
    sectionTech: {
      ...sectionTech,
      techIcons: sectionTech.techIcons.map(({ icon, title }) => ({
        title,
        icon: {
          url: icon.data.attributes.url,
          name: icon.data.attributes.name,
          alternativeText: icon.data.attributes.alternativeText
        }
      }))
    },
    sectionConcept,
    sectionModules,
    sectionAgenda,
    pricingBox
  }

  return {
    props: {
      landingPageFormatted
    }
  }
}

export default Index
