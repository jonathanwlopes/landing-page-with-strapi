
import { HeaderProps } from 'types/formattedAPI'
import { ImageProps } from 'types/global'

import Button from 'components/Button'
import Logo from 'components/Logo'
import * as S from './styles'

import Container from 'components/Container'

import { gaEvent } from 'utils/ga'
import { getImageURL } from 'utils/getImageURL'


const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: ImageProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>
            {header.description}
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href={header.button.url}
              onClick={onClick}
              wide
            >
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageURL(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
