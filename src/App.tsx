import React from 'react'
import Header from './Header'

interface IAppProps { }

export interface IMenu {
  name: string,
  path: string,
}

const menu: IMenu[] =
  [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: 'About',
    },
    {
      name: 'Contact',
      path: 'Contact',
    },
  ]


const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <Header menu={menu} />
    </div>
  )
}

export default App
