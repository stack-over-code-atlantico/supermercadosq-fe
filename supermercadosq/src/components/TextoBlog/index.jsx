import React from 'react'
import { Title } from  './styles'
import { SubTitle } from  './styles'
import { Paragraph }  from './styles'
import { Button } from './styles'
import { Div } from './styles'

export function TextoBlog(){
    return(
        <Div>
            <Title>SQ Blog</Title>
            <SubTitle>Comunidade</SubTitle>
            <Paragraph>Entre em nosso blog, venha conferir e contribuir na nossa comunidade, está rolando várias discussões sobre tabela nutricional e alergias!</Paragraph>
            <Button>Blog</Button>
        </Div>
    )
  }