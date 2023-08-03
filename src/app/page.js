import Head from 'next/head' 
import NavHome from './components/NavHome' 
import Provision from './components/Provision'

export default function Home() {
  return (
    <>  
      <NavHome/>
      <Provision/>
    </>
  )
}
