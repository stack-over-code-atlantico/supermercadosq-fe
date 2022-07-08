import React from 'react';
import ProfileBar from '../../pages/Profile/Profile'
import { PostCommentsContainer } from './styles';


export default class PostCommentsForm extends React.Component {

  render() {
    return (
       <>
        <ProfileBar />
        <PostCommentsContainer>
          </PostCommentsContainer>
       </>
    );
  }
}


