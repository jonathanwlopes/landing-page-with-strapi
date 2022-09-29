
import Container from 'components/Container'
import Heading from 'components/Heading'
import ProfileCard from 'components/ProfileCard'

import { SectionAboutUsProps } from 'types/formattedAPI'
import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          photo={author.photo}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
