import React from 'react'
import { useContext } from 'react';

const TitleContext = React.createContext('')

const Title = () => {
  const title = useContext(TitleContext);
  return <h1>{title}</h1>

  // return (
  //   <TitleContext.Consumer>
  //     {(title) => {
  //       return <h1>{title}</h1>
  //     }}
  //   </TitleContext.Consumer>
  // )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
