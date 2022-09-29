
import { SectionConceptProps } from 'types/formattedAPI'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionConcepts = ({ title, concepts }: SectionConceptProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
