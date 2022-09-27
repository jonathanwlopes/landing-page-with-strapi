import Container from 'components/Container'
import Heading from 'components/Heading'
import { SectionTechProps } from 'types/formattedAPI'

import { getImageURL } from 'utils/getImageURL'
import * as S from './styles'


const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageURL(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
