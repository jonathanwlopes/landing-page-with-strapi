
import { SectionModulesProps } from 'types/formattedAPI'

import CardModule from 'components/CardModule'
import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'

const SectionModules = ({ title, module }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {module.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
