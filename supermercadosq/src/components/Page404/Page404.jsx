import React from 'react'
import {Style404, Home404, Error404, Text404,BigBlue404} from './styles.jsx'


const Page404 = () => {
  return (
    <Style404>
      <Home404>
        <h1><a href="#">Home</a></h1>
      </Home404>
      <BigBlue404/>
      <Error404>
        <h2>error</h2>
      </Error404>
      <Text404>
        <h1>404</h1>
        
      </Text404>
    </Style404>
  )
}

export default Page404