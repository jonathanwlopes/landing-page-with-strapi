
import { SectionAboutProjectProps } from 'types/formattedAPI'

import Container from 'components/Container'
import Heading from 'components/Heading'

import { getImageURL } from 'utils/getImageURL'
import * as S from './styles'


const SectionAboutProject = ({ description, image, title }: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageURL(image.url)}
          alt={image.alternativeText}
          loading="lazy" />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
