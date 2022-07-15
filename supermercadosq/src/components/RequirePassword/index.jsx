import React, { useEffect, useState } from 'react'
import { Image, LabelCheck, RequiredPassword } from './styles'
import ImageCheck from '../../assets/icons/icon-check.png'
import ImageClose from '../../assets/icons/icon-close.png'
import InputPassword from '../InputPassword/InputPassword'

const RequirePassword = ({lengthPassword,casePassword,numberPassword}) => {

  return (
    <RequiredPassword>
    <p>Sua senha deve conter:</p>
    <div>
      <LabelCheck>
        <Image src={lengthPassword? ImageCheck : ImageClose} />
        <span>8 caracteres</span>
      </LabelCheck>
      <LabelCheck>
        <Image src={casePassword? ImageCheck : ImageClose} />
        <span> Maiúscula e minúscula</span>
      </LabelCheck>
      <LabelCheck>
        <Image src={numberPassword ? ImageCheck : ImageClose} />
        <span>Caracter especial e Números</span>
      </LabelCheck>
    </div>
  </RequiredPassword>
  )
}

export default RequirePassword