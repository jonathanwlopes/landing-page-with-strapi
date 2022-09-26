import { GetStaticProps } from 'next'
import { client } from '../graphql'

import { LandingPageAPI } from 'types/api'
import { FormattedLandingPageProps } from 'types/formatedAPI'

import { GET_LANDING_PAGE } from 'graphql/queries/getLandingPage'

import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
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
  const { logo, header, sectionAboutProject, sectionTech } = landingPageFormatted

  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject {...sectionAboutProject} />
      <SectionTech {...sectionTech} />
      <SectionConcepts />
      <SectionModules />
      <SectionAgenda />
      <PricingBox />
      <SectionAboutUs />
      <SectionReviews />
      <SectionFaq />
      <Footer />
      <JsonSchema />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<Promise<LandingPageAPI>>(GET_LANDING_PAGE)
  const { logo, header, sectionAboutProject, sectionTech } = landingPage.data.attributes

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
          url: icon.data.attributes.url
        }
      }))
    }
  }

  return {
    props: {
      landingPageFormatted
    }
  }
}

export default Index
