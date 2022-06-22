import React from 'react'
import { UserAvatar, User, UserDetails, UserName, UserIcons } from './styles'
import { FiAlertTriangle, FiEdit2, FiTrash } from 'react-icons/fi'

const UserComment = () => {
  return (
    <User>
      <UserDetails>
        <UserAvatar>

        </UserAvatar>
        <UserName>
          <h1>Cris</h1>
          <h2>Publicado em 20/02/2022</h2>
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
