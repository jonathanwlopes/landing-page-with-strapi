import React from 'react'
import { PricingBoxProps } from 'types/formattedAPI'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ totalPrice, priceInstallments, numberInstallments, benefits, button }: PricingBoxProps) => {
  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>{totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>R$ {priceInstallments}</S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />
      <Button
        href={button.url}
        onClick={onClick}
        withPrice
      >
        <p>{button.label}</p>
        <div>
          <S.ButtonFullPrice>R$ {totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>R$ {priceInstallments}</S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  )
}

export default PricingBox
