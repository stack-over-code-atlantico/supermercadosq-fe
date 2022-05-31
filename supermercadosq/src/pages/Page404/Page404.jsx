import React from 'react'
import {
  Style404,
  HomeGreen404,
  CircleSmallBrown,
  CircleSmallYellow,
  ErrorBlue404,
  CircleSmallMustard,
  CircleSmallBlue,
  CardText
} from './styles.jsx'

const Page404 = () => {
  return (
    <Style404>
      <div className="circleBigBlue"></div>
      <div className="circleSmallRed"></div>

      <CircleSmallBrown />
      <CircleSmallYellow />
      <CircleSmallMustard />
      <CircleSmallBlue />
      <HomeGreen404>
        <h1>
          <a href="/">Home</a>
        </h1>
      </HomeGreen404>
      <CardText>
        <ErrorBlue404>
          <h2>error</h2>
        </ErrorBlue404>
        <h1 id="error404">404</h1>
        <span>PAGE NOT FOUND</span>
      </CardText>
    </Style404>
  )
}

export default Page404
