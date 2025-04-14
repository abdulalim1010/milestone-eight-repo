
import { Suspense } from 'react'
import './App.css'
import DaysiNave from './components/DaysiNave'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/PriceOption/PriceOption'



const pricingPromis = fetch(' pricingData.json')
.then(res=> res.json())

function App() {

  return (
    <>
      <header><DaysiNave></DaysiNave>
      
      <NavBar></NavBar></header>
    <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>
}><PriceOption pricingPromis={pricingPromis}></PriceOption> </Suspense>
    </main>
    </>
  )
}

export default App
