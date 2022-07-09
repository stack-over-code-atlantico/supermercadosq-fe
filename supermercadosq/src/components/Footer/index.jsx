import React from 'react'
import { DivFooter } from './styles'
import { CopyrightText } from './styles'
import { MenuFooter } from './styles'
import { SocialMediaIcon } from './styles'

import Github from '../../assets/icons/github.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Twitter from '../../assets/icons/twitter.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import Youtube from '../../assets/icons/youtube.svg'

export function Footer(){
    return(
        <DivFooter>
            <CopyrightText>
                Todos os produtos, usuários e comentários são apenas para estudo. Não há nenhum direito reservado, porém o projeto foi feito com muita dedicação, aproveite.
            </CopyrightText>
            <MenuFooter>
                <li>
                    <a>Política da Empresa</a>
                </li>
                <li>
                    <a>Instituto Atlântico</a>
                </li>
                <li>
                    <a>Termos &#38; Condições</a>
                </li>
            </MenuFooter>
            <SocialMediaIcon>
                <img src={Github} />
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={Twitter} />
                <img src={LinkedIn} />
                <img src={Youtube} />
            </SocialMediaIcon>
            <p className='powered'>Powered by StackOverCode 2022</p>
        </DivFooter>
    )
}