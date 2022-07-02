import React from 'react'
import { UserAvatar, User, UserDetails, UserName, UserIcons } from './styles'
import { FiAlertTriangle, FiEdit2, FiTrash } from 'react-icons/fi'

const UserComment = ({user, dataPublicacao}) => {
  if(dataPublicacao){
    dataPublicacao = dataPublicacao.slice(0,10).split('-').reverse().join('/')
  }
  return (
    <User>
      <UserDetails>
        <UserAvatar>

        </UserAvatar>
        <UserName>
          <h1>{user}</h1>
          <h2>{dataPublicacao}</h2>
        </UserName>
      </UserDetails>
      <UserIcons>
        <a><FiAlertTriangle/></a>
        <a><FiEdit2/></a>
        <a><FiTrash/></a>
      </UserIcons>
    </User>
  )
}

export default UserComment
