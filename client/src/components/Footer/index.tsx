import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido por{' '}
        <a href="https://willianjusten.com.br/">Willian Justen </a>,
        <a href="https://guilouro.dev"> Guilherme Louro</a> e
        <a href="https://github.com/jonathanwlopes"> Jonathan Lopes (Aluno)</a>
      </p>
      <p>
        Design por <a href="https://dribbble.com/vmarcosp">Marcos Oliveira</a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
